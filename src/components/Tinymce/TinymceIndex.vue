<template>
  <div
    :class="{ fullscreen: fullscreen }"
    class="tinymce-container"
    :style="{ width: containerWidth }"
  >
    <textarea :id="tinymceId" class="tinymce-textarea" />
    <!-- <div class="editor-custom-btn-container">
      <editorImage color="#1890ff" class="editor-upload-btn" @successCBK="imageSuccessCBK" />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import plugins from './plugins'
import toolbar from './toolbar'
import load from './dynamicLoadScript'
import { getTinymce } from './getTinymce'
import type { Editor } from './tinymce'
import {
  computed,
  nextTick,
  onDeactivated,
  onMounted,
  onUnmounted,
  ref,
  watch,
  withDefaults
} from 'vue'

const tinymceCDN =
  'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js'

const props = withDefaults(
  defineProps<{
    id?: string
    modelValue: string
    toolbar?: string[]
    menubar?: string
    height?: string | number
    width?: string | number
  }>(),
  {
    id: 'vue-tinymce-' + new Date().getTime().toString(),
    toolbar: () => [],
    modelValue: '',
    height: 360,
    width: 'auto',
    menubar: 'file edit insert view format table'
  }
)

const emits = defineEmits(['update:modelValue'])

const hasChange = ref(false)
const hasInit = ref(false)
const fullscreen = ref(false)
const tinymceId = ref(props.id)
const languageTypeList = ref({
  en: 'en',
  zh: 'zh_CN',
  es: 'es_MX',
  ja: 'ja'
})

const containerWidth = computed(() => {
  const width = props.width.toString()
  if (/^[\d]+(\.[\d]+)?$/.test(width)) {
    return `${width}px`
  }
  return width
})

watch(
  () => props.modelValue,
  (newValue: string, value) => {
    if (!hasChange.value && hasInit.value) {
      nextTick(() =>
        getTinymce()
          ?.get(tinymceId.value)
          .setContent(newValue || '')
      )
    }
  }
)

onMounted(() => {
  init()
})

const init = () => {
  // dynamic load tinymce from cdn
  load(tinymceCDN, err => {
    if (err) {
      console.warn(err)
      return
    }
    initTinymce()
  })
}

const initTinymce = () => {
  getTinymce()?.init({
    selector: `#${tinymceId.value}`,
    language: languageTypeList.value['zh'],
    width: props.width,
    height: props.height,
    body_class: 'panel-body ',
    object_resizing: false,
    toolbar: props.toolbar.length > 0 ? props.toolbar : toolbar,
    menubar: props.menubar,
    plugins: plugins,
    end_container_on_empty_block: true,
    init_instance_callback: (editor: Editor) => {
      if (props.modelValue) {
        editor.setContent(props.modelValue)
      }
      hasInit.value = true
      editor.on('NodeChange Change KeyUp SetContent', () => {
        hasChange.value = true
        emits('update:modelValue', editor.getContent())
      })
    },
    setup(editor: Editor) {
      editor.on('FullscreenStateChanged', (e: { state: boolean }) => {
        fullscreen.value = e.state
      })
    },
    // it will try to keep these URLs intact
    // https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_urls/
    // https://stackoverflow.com/questions/5196205/disable-tinymce-absolute-to-relative-url-conversions
    convert_urls: false
    // 整合七牛上传
    // images_dataimg_filter(img) {
    //   setTimeout(() => {
    //     const $image = $(img);
    //     $image.removeAttr('width');
    //     $image.removeAttr('height');
    //     if ($image[0].height && $image[0].width) {
    //       $image.attr('data-wscntype', 'image');
    //       $image.attr('data-wscnh', $image[0].height);
    //       $image.attr('data-wscnw', $image[0].width);
    //       $image.addClass('wscnph');
    //     }
    //   }, 0);
    //   return img
    // },
    // images_upload_handler(blobInfo, success, failure, progress) {
    //   progress(0);
    //   const token = _this.$store.getters.token;
    //   getToken(token).then(response => {
    //     const url = response.data.qiniu_url;
    //     const formData = new FormData();
    //     formData.append('token', response.data.qiniu_token);
    //     formData.append('key', response.data.qiniu_key);
    //     formData.append('file', blobInfo.blob(), url);
    //     upload(formData).then(() => {
    //       success(url);
    //       progress(100);
    //     })
    //   }).catch(err => {
    //     failure('出现未知问题，刷新页面，或者联系程序员')
    //     console.log(err);
    //   });
    // },
  })
}

onUnmounted(() => {
  destroyTinymce()
})

onDeactivated(() => {
  destroyTinymce()
})

const destroyTinymce = () => {
  const tinymce = getTinymce()?.get(tinymceId.value)

  if (fullscreen.value) {
    getTinymce()?.execCommand('mceFullScreen')
  }

  if (tinymce) {
    getTinymce()?.remove(tinymce)
  }
}

const setContent = (value: string) => {
  getTinymce()?.get(tinymceId.value).setContent(value)
}

const getContent = () => {
  getTinymce()?.get(tinymceId.value).getContent()
}

defineExpose({
  setContent,
  getContent,
  tinymceId
})
</script>

<style scoped lang="scss">
.tinymce-container {
  position: relative;
  line-height: normal;
}
.tinymce-container {
  ::v-deep {
    .mce-fullscreen {
      z-index: 10000;
    }
  }
}
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
.editor-custom-btn-container {
  position: absolute;
  right: 4px;
  top: 4px;
  /*z-index: 2005;*/
}
.fullscreen .editor-custom-btn-container {
  z-index: 10000;
  position: fixed;
}
.editor-upload-btn {
  display: inline-block;
}
</style>
