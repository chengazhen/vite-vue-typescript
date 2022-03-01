<template>
  <div class="home">
    <h2>天气预报</h2>
    <div>
      <div>
        <i class="icon" :class="`qi-` + state.weather.icon"></i>
      </div>

      <span>
        天气:<strong>{{ state.weather.text }}</strong>
      </span>
      <br />
      <span>
        温度:<strong>{{ state.weather.temp }}</strong> ℃
      </span>
      <br />
      <span>
        风向:<strong>{{ state.weather.windDir }}</strong>
      </span>
      <br />
      <span>
        体感温度:<strong>{{ state.weather.feelsLike }}</strong>
      </span>
      <span>
        数据观测时间:<strong>{{ state.weather.obsTime }}</strong>
      </span>
      <br />
    </div>
    <ul>
      <li v-for="(item, index) in state.list" :key="index">
        <span>{{ item.name }}</span>
        <span>
          <a target="_blank" :href="item.fxLink">点击查看当地天气</a>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getTop, getWeather } from '@/api'
import { onMounted, reactive } from 'vue'
import { getData } from '@/api/response'

interface itemType {
  name: string
  id: string
  fxLink: string
}

interface weather {
  temp?: string
  text?: string
  feelsLike?: string
  windDir?: string
  obsTime?: string
  icon?: string
}

interface stateType {
  list: itemType[]
  weather: weather
}

const state: stateType = reactive({
  list: [],
  weather: {}
})

// if ('geolocation' in navigator) {
//   navigator.geolocation.getCurrentPosition(function (position) {
//     console.log(position)
//   })
// } else {
//   console.log(23424)

//   /* 地理位置服务不可用 */
// }

onMounted(async () => {
  try {
    const { data } = await getData({ location: '116.41,39.92' })
    if (data.code === '200') {
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
  // try {
  //   const { data } = await getTop({ range: 'cn' })
  //   if (data.code === '200') {
  //     state.list = data.topCityList
  //     console.log(state)
  //   }
  // } catch (error) {
  //   console.log(error)
  // }
  // try {
  //   const { data } = await getWeather<{ now: weather; code: string }>({
  //     location: '116.41,39.92'
  //   })
  //   if (data.code === '200') {
  //     state.weather = data.now
  //   }
  // } catch (error) {
  //   console.log(error)
  // }
})
</script>

<style lang="scss" scoped>
.home {
  padding-left: 45%;
  text-align: left;
}
.icon {
  font-size: 32px;
}
</style>
