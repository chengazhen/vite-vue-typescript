import { getTinymce } from './getTinymce'
type func = (p: string | null | Error, p2: HTMLElement) => void

let callbacks: Array<func> | null = []

type callBackFunc = (p: string | null | Error, p2: HTMLElement) => void

function loadedTinymce() {
  // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2144
  // check is successfully downloaded script
  return getTinymce()
}

const dynamicLoadScript = (src: string, callback: callBackFunc) => {
  const existingScript: HTMLElement | null = document.getElementById(src)
  const cb = callback

  if (!existingScript) {
    const script: HTMLScriptElement = document.createElement('script')
    script.src = src // src url for the third-party library being loaded.
    script.id = src
    document.body.appendChild(script)
    callbacks?.push(cb)
    const onEnd = 'onload' in script ? stdOnEnd : ieOnEnd
    onEnd(script)
  }

  if (existingScript && cb) {
    if (loadedTinymce()) {
      cb(null, existingScript)
    } else {
      callbacks?.push(cb)
    }
  }

  function stdOnEnd(script: HTMLScriptElement) {
    script.onload = function () {
      // this.onload = null here is necessary
      // because even IE9 works not like others
      this.onerror = this.onload = null
      if (callbacks) {
        for (const cb of callbacks) {
          cb(null, script)
        }
      }

      callbacks = null
    }
    script.onerror = function () {
      this.onerror = this.onload = null
      cb(new Error('Failed to load ' + src), script)
    }
  }

  function ieOnEnd(script: HTMLScriptElement) {
    document.onreadystatechange = function () {
      if (this.readyState !== 'complete' && this.readyState !== 'loading')
        return
      this.onreadystatechange = null
      if (callbacks) {
        for (const cb of callbacks) {
          cb(null, script) // there is no way to catch loading errors in IE8
        }
      }

      callbacks = null
    }
  }
}

export default dynamicLoadScript
