<template>
  <MyCharts
  :series-data="seriesData" :extra-option="extraOption" chartsType="lineAndBar"
      :style="{ width: '100%', height: '280px', backgroundColor: 'black' }"
  ></MyCharts>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { reactive, toRefs, onMounted } from 'vue'
interface IState {
  seriesData: object[]
  extraOption: {}
}

const state = reactive<IState>({
  seriesData: [],
  extraOption: {}
})
onMounted(() => {
	state.seriesData = [
    {
      name: `经开区累计`,
      type: 'bar',
      barWidth: 34,
      data: [1,2,3],
      itemStyle: {
        normal: {
          label: {
            show: true,
            position: 'top',
            offset: [0, -15],
            textStyle: {
              fontSize: '14',
              color: '#4DFFFF'
            }
          },
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(77, 255, 255, 0.9)' },
            { offset: 1, color: 'rgba(0, 219, 255, 0.2)' }
          ])
        }
      },
    //   markPoint: {
    //     data: markPointData
    //   }
    },
    {
      name: '经开区累计增速（%）',
      type: 'line',
      symbol: 'circle',
      symbolSize: 4, //拐点大小
      yAxisIndex: 1,
      data: [20,30,40],
      itemStyle: {
        normal: {
          color: '#FFD93F', //改变折线点的颜色,
          borderColor: '#FFD93F', //图形的描边颜色
          lineStyle: {
            color: '#FFD93F' //改变折线颜色
          }
        }
      },
      emphasis: {
        // 鼠标移上去的时候，拐点的颜色和样式
        itemStyle: {
          color: '#092143', //颜色
          borderColor: '#FFD93F', //图形的描边颜色
          borderWidth: 2 // 描边的线宽
        }
      }
    }
	]
	state.extraOption = {
    legend: {
      data: [`经开区累计`, '经开区累计增速（%）']
    },
    xAxis: [
      {
        data: [2019,2020,2021]
      }
    ]
  }
})
const handleClick = () => {
  alert(1)
}
const {
  seriesData,
  extraOption
} = toRefs(state)
</script>
