<template>
  <div :id="`echarts-comp-${uuid}`">
     <slot></slot>
  </div>
</template>
<script setup lang="ts" name="MyCharts">
import { defineProps, onMounted, watch, ref ,onUnmounted} from 'vue'
import * as echarts from 'echarts'
import { Utils } from '../../utils/index'
import { merge } from 'lodash'
import { lineAndBarOption, pieOption, colors, lineOption, barOption, linesOption, normalBarOption } from './defaultOption'
const props = defineProps({
  smooth: {
    type: Boolean,
    default: () => true
  },
  chartsType: {
    type: String,
    default: () => ''
  },
  seriesData: {
    type: Array,
    default: () => []
  },
  extraOption: {
    type: Object,
    default: () => { }
  },
  timeType: {
    type: String,
    default: () => ''
  },
  noIndicator: {
    type: String,
    default: () => ''
  },
  isCurrent: {
    type: Boolean,
    default: false
  }
})
const uuid = ref(Utils.getUuid())



let myChart: any
const initCharts = (): void => {
  const chartDom: any = document.getElementById(`echarts-comp-${uuid.value}`)
  myChart = echarts.init(chartDom,'',{renderer: 'svg'})
}
onMounted(() => {
  initCharts()
  windowResize()
})

const assembleDataToOption = () => {
  let chartsTypeOption
  switch (props.chartsType) {
    case 'pie':
      chartsTypeOption = pieOption
      break
    case 'lineAndBar':
      chartsTypeOption = lineAndBarOption
      break
    case 'line':
      chartsTypeOption = lineOption
      break
    case 'lines':
      chartsTypeOption = linesOption
      break
    case 'bar':
      chartsTypeOption = barOption
      break
    case 'normalBar':
      chartsTypeOption = normalBarOption
      break
  }
  return merge(
    {},
    chartsTypeOption,
    { color: colors },
    {
      // legend: { formatter },
      series: props.seriesData
    },
    props.extraOption
  )
}

const updateChartView = () => {
  myChart.setOption(assembleDataToOption(), true)
}

const windowResize = () => {
    window.addEventListener("resize", Utils.debounce(()=>resizeEvent(),300,false));
}

//使用requestAnimationFrame监听浏览器窗口变化
const resizeEvent = () => {
  window.requestAnimationFrame(() => {
    myChart.resize();
  })
}

onUnmounted(() => {
    //移除窗口变化事件
    window.removeEventListener("resize",Utils.debounce(()=>resizeEvent(),300,false));
    //清空图表实例
    myChart.dispose()
    myChart = null
})

watch(
  () => props.seriesData,
  () => {
    updateChartView()
  }
)
</script>
<style lang="scss" scoped>
</style>
