import EChartsReact from "echarts-for-react";
import * as echarts from "echarts";

const StatisticsChart = () => {
  const option = {
    color: ["var(--orange)"], /* to change dot color  */

    toolbox: {
      /* for download image and give symbol of dwnld on page */
      feature: {
        saveAsImage: {},
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgba(0, 0, 0, 0.59)",
      borderWidth: 0,
    },
    grid: { /** for position */
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
        show: false,
    }, 
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],

    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],

    /* Data for Chart is random */

    series: [
      {
        type: "line",
        smooth: true,
        lineStyle: {
          /* Line gradients means colors to the line*/
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },

            {
              offset: 1,
              color: "#F450D3",
            },
          ]),

          width: 4 /* line width */,
        },

        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              color: "#FE4C00",
            },
            {
              offset: 1,
              color: "rgba(255,144,70,0.1)",
            },
          ]),
        },
        emphasis: {
            focus: "series",
        },
        showSymbol: false /* to remove dots on Line */,
        data: [28000, 19000, 32000, 18000, 41000, 30000, 26000],
      },
    ],
  };
  return <EChartsReact option={option} />;
};

export default StatisticsChart;
