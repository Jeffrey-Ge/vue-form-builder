const lineAndBarOption = {
    title: {
      show: false
    },
    grid: {
      x: 50,
      x2: 40,
      y: 65,
      y2: 50,
      borderWidth: 1
    },
    // toolbox: {
    //   feature: {
    //     saveAsImage: {
    //       show: true,
    //       icon: `image:///src/assets/images/saveCharts.svg`, // 内部相对路径
    //       title: '',
    //       type: 'png',
    //       backgroundColor: '#03102B',
    //       pixelRatio: 1,
    //     }
    //   },
    //   itemSize: 29
    // },
    tooltip: {
      // axisPointer: {
      //   type: 'cross',
      //   crossStyle: {
      //     color: 'red'
      //   }
      // },
      show: true,
      trigger: 'axis',
      showDelay: 0,//显示延时，添加显示延时可以避免频繁切换
      hideDelay: 50,//隐藏延时
      transitionDuration: 0,//动画变换时长
      backgroundColor: 'rgba(0,0,0,0.65)',//背景颜色（此时为默认色）
      padding: [12, 15, 13, 15],    // [5, 10, 15, 20] 内边距
      textStyle: {
        fontSize: '18',
        color: "white" //设置文字颜色
      },
      extraCssText: 'border:1px solid rgba(255,255,255,0.35);',
      formatter: function (params:any, ticket:any, callback:any) {
        let tip = params[0].name + "<br/><div style='height:10px'></div>";
        tip += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:8px;height:8px;background-color:#4DFFFF;"></span>${params[0].seriesName}：<span style="color:#4DFFFF;font-size: 20px">${params[0].value||''}</span>`;//鼠标悬浮显示的字符串内容
        if (params[1]) {
          tip += `<br/><div style='margin-top:5px'></div><span style="display:inline-block;margin-right:5px;border-radius:10px;width:8px;height:8px;background-color:#FFD93F;"></span>${params[1].seriesName}：<span style="color:#FFD93F; font-size: 20px">${params[1].value||''}</span>`;//鼠标悬浮显示的字符串内容
        }
        return tip
      }
    },
    legend: {
      bottom: 0,
      left: 'center',
      textStyle: {
        color: '#CFDDFF',
        fontSize: 12
      }
    },
    xAxis: [
      {
        type: 'category',
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          textStyle: {
            color: '#CFDDFF',
            fontSize: 14,
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '',
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#CFDDFF',
            fontSize: 12,
          }
        },
        axisLine: { show: true },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            width: 1,
            color: ['rgba(207,221,255,0.3)'],
          },
        }
      },
      {
        type: 'value',
        name: '',
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#CFDDFF',
            fontSize: 12,
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            type: 'dashed'
          }
        }
      }
    ],
    series: []
  }
  
  const pieOption = {
    tooltip: {
      trigger: 'item',
      showDelay: 0, //显示延时，添加显示延时可以避免频繁切换
      hideDelay: 50, //隐藏延时
      transitionDuration: 0, //动画变换时长
      backgroundColor: 'rgba(0,0,0,0.65)', //背景颜色（此时为默认色）
      padding: [12, 15, 13, 15], // [5, 10, 15, 20] 内边距
      textStyle: {
        fontSize: '18',
        color: 'white' //设置文字颜色
      },
      extraCssText: 'border:1px solid rgba(255,255,255,0.35);'
    },
    series: [
      {
        type: 'pie',
        radius: [70, 100],
        center: ['50%', '45%'],
        itemStyle: {
          borderWidth: 2,
          borderColor: 'rgba(0,0,0,0.5)',
        },
        labelLine: {
          normal: {
            // length:10,  // 改变标示线的长度
            lineStyle: {
              color: '#fff' // 改变标示线的颜色
            }
          }
        },
        label: {
          normal: {
            textStyle: {
              fontSize: '16',
              color: '#fff'  // 改变标示文字的颜色
            },
            alignTo: 'edge',
            formatter: '{b}\n {per|{d} %}',
            minMargin: 5,
            edgeDistance: 5,
            lineHeight: 30,
            rich: {
              per: {
                fontSize: 18,
                color: '#CFDDFF'
              }
            }
          }
        },
        labelLayout: function (params:any) {
          const isLeft = params.labelRect.x;
          const points = params.labelLinePoints;
          // Update the end point.
          points[2][0] = isLeft
            ? params.labelRect.x
            : params.labelRect.x + params.labelRect.width;
          return {
            labelLinePoints: points
          };
        },
        data: [] // 这里在使用的时候会被业务数据替换
      }
    ]
  }
  
  const liquidFillOption = {
    grid: {
      top: '5px',
      left: '5px',
      right: '5px',
      bottom: '5px'
    },
    series: [
      {
        type: 'liquidFill',
        data: [0.56, 0.52, 0.533],
        radius: '90%',
        color: ['rgba(0, 242, 254, 0.77)', 'rgba(0, 144, 255, 1)'],
        itemStyle: {
          opacity: 0.6
        },
        outline: {
          show: true,
          borderDistance: 0,
          itemStyle: {
            color: 'none',
            borderColor: '#294D99',
            borderWidth: 1,
            shadowBlur: 20,
            shadowColor: 'rgba(0, 0, 0, 0.25)'
          }
        },
        label: {
          show: true,
          // color: '#294D99',
          color: '#fff',
          insideColor: '#fff',
          fontSize: 18,
          fontWeight: 'normal',
          align: 'center',
          baseline: 'middle',
          position: 'inside'
        },
        backgroundStyle: {
          color: 'rgba(25, 144, 255, 0.2)'
        },
        emphasis: {
          itemStyle: {
            opacity: 0.9
          }
        }
      }
    ]
  }
  
  
  const lineOption = {
    tooltip: {  // tooltip 用于控制鼠标滑过或点击时的提示框（下一章展开讲）
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器配置项。  
        type: 'line', // 'line' 直线指示器  'shadow' 阴影指示器  'none' 无指示器  'cross' 十字准星指示器。 
        axis: 'auto', // 指示器的坐标轴。   
        snap: true, // 坐标轴指示器是否自动吸附到点上  
      },
      showContent: true,
      backgroundColor: 'rgba(0,0,0,0.65)',//背景颜色（此时为默认色）
      showDelay: 0,//显示延时，添加显示延时可以避免频繁切换
      hideDelay: 50,//隐藏延时
      transitionDuration: 0,//动画变换时长
      padding: [12, 15, 13, 15],    // [5, 10, 15, 20] 内边距
      textStyle: {
        fontSize: '14',
        color: "white" //设置文字颜色
      },
      extraCssText: 'border:1px solid rgba(255,255,255,0.35);',
      formatter: function (params:any, ticket:any, callback:any) {
        let tip = params[0].name + "<br/><div style='height:10px'></div>";
        tip += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:8px;height:8px;background-color:#4DFFFF;"></span>增长率：<span style="color:#fff;font-size: 14px">${params[0].value}%</span>`;//鼠标悬浮显示的字符串内容
        return tip
      }
    },
  
    legend: {
      bottom: 0,
      left: 'center',
      textStyle: {
        color: '#CFDDFF',
        fontSize: 12
      }
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: { // X 轴颜色配置
          color: '#CFDDFF',
          width: 1
        }
      },
      axisLabel: {
        textStyle: {
          color: '#CFDDFF',
          fontSize: 16
        }
      },
      axisTick: {
        show: false
      },
    }],
    yAxis: {
      type: 'value',
      axisLine: {
        show: true,
        formatter: "{value} %",
        lineStyle: { // y 轴颜色配置
          color: '#CFDDFF',
          width: 1
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          width: 1,
          color: ['rgba(207,221,255,0.3)'],
        },
      },
      axisLabel: {
        textStyle: {
          color: '#CFDDFF',
          fontSize: 16
        },
        formatter: '{value} %',
      },
    },
    series: []
  }
  
  
  const linesOption = {
    title: {
      show: false
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      showDelay: 0,//显示延时，添加显示延时可以避免频繁切换
      hideDelay: 50,//隐藏延时
      transitionDuration: 0,//动画变换时长
      backgroundColor: 'rgba(0,0,0,0.65)',//背景颜色（此时为默认色）
      padding: [12, 15, 13, 15],    // [5, 10, 15, 20] 内边距
      textStyle: {
        fontSize: '18',
        color: "white" //设置文字颜色
      },
      extraCssText: 'border:1px solid rgba(255,255,255,0.35);',
    },
    legend: {
      bottom: 0,
      left: 'center',
      textStyle: {
        color: '#CFDDFF',
        fontSize: 12
      }
    },
    xAxis: [
      {
        type: 'category',
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          textStyle: {
            color: '#CFDDFF',
            fontSize: 14,
          }
        },
      }
    ],
    yAxis: {
      type: 'value',
      name: '',
      axisLine: {
        show: true,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          width: 1,
          color: ['rgba(207,221,255,0.3)'],
        },
      },
      axisLabel: {
        textStyle: {
          color: '#CFDDFF',
          fontSize: 12
        }
      },
    },
    series: []
  }
  
  const barOption = {
    tooltip: {
      // axisPointer: {
      //   type: 'cross',
      //   crossStyle: {
      //     color: 'red'
      //   }
      // },
      show: true,
      trigger: 'axis',
      showDelay: 0,//显示延时，添加显示延时可以避免频繁切换
      hideDelay: 50,//隐藏延时
      transitionDuration: 0,//动画变换时长
      backgroundColor: 'rgba(0,0,0,0.65)',//背景颜色（此时为默认色）
      padding: [12, 15, 13, 15],    // [5, 10, 15, 20] 内边距
      textStyle: {
        fontSize: '18',
        color: "white" //设置文字颜色
      },
      extraCssText: 'border:1px solid rgba(255,255,255,0.35);',
      formatter: function (params:any, ticket:any, callback:any) {
        let tip = params[0].name + "<br/><div style='height:10px'></div>";
        tip += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:8px;height:8px;background-color:#4DFFFF;"></span>${params[0].data.name}：<span style="color:#4DFFFF;font-size: 20px">${params[0].value}</span>`;//鼠标悬浮显示的字符串内容
        return tip
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false,
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
          color: '#CFDDFF',
          fontSize: 16,
        }
      },
      axisLine: { show: false },
    },
    series: []
  }
  
  const normalBarOption = {
    grid: {
      x: 45,
      x2: 54,
      y: 55,
      y2: 55,
      borderWidth: 1
    },
    xAxis: [
      {
        type: 'category',
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          textStyle: {
            color: '#CFDDFF',
            fontSize: 14,
          },
          // interval: 0, rotate: 20 
        },
  
      }
    ],
    series: []
  }
  const colors = ['#0084FF', '#1CB1E6', '#4DFFFF', '#F8E768', '#1625FF', '#1A5DFF']
  
  export { lineAndBarOption, pieOption, colors, lineOption, linesOption, barOption, liquidFillOption, normalBarOption }
  