import { getLogByMonthUsingPost } from '@/services/access_control_system/adminController';
import { Chart } from '@antv/g2';
import React, { useEffect, useState } from 'react';

const MyChartComponent: React.FC = () => {
  const [logData, setLogData] = useState<API.LogVO | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  //@ts-ignore
  const getLog = async (month) => {
    const res = await getLogByMonthUsingPost({ thisDay: month });
    //@ts-ignore
    setLogData(res.data);
    setIsDataLoaded(true); // 标记数据已加载
  };

  useEffect(() => {
    console.log(new Date());
    getLog(new Date());
  }, []);

  useEffect(() => {
    if (isDataLoaded && logData) {
      const data = [
        //@ts-ignore
        {
          item: '异常出入',
          count: logData.abnormalNum,
          //@ts-ignore
          percent: logData.abnormalNum / (logData.normalAccessNum + logData.abnormalNum),
        },
        //@ts-ignore

        {
          item: '正常出入',
          count: logData.normalAccessNum,
          //@ts-ignore
          percent: logData.normalAccessNum / (logData.normalAccessNum + logData.abnormalNum),
        },
      ];

      const chart = new Chart({
        container: 'pie',
        autoFit: true,
      });

      chart.coordinate({ type: 'theta', outerRadius: 0.8 });

      chart
        .interval()
        .data(data)
        .transform({ type: 'stackY' })
        .encode('y', 'percent')
        .encode('color', 'item')
        .legend('color', { position: 'bottom', layout: { justifyContent: 'center' } })
        .label({
          position: 'outside',
          //@ts-ignore
          text: (datum) => `${datum.item}: ${(datum.percent * 100).toFixed(2)}%`,
        })
        .tooltip((datum) => ({
          name: datum.item,
          value: `：${datum.count}次`,
        }));

      chart.title({ title: '异常出入和正常出入占比' });
      chart.render();
    }
    const lineData: any[] = [];

    if (logData?.checkInNum) {
      // 遍历logData.checkInNum，构建data数组
      Object.entries(logData.checkInNum).forEach(([date, checkInCount]) => {
        lineData.push({ day: date, type: '签到次数', count: checkInCount });
      });
      //@ts-ignore
      Object.entries(logData.checkOutNum).forEach(([date, checkOutOut]) => {
        lineData.push({ day: date, type: '签退次数', count: checkOutOut });
      });

      const lineChart = new Chart({
        container: 'line',
        autoFit: true,
      });

      lineChart
        .data(lineData)
        .encode('x', 'day')
        .encode('y', 'count')
        .encode('color', 'type')
        .scale('x', {
          range: [0, 1],
        })
        .scale('y', {
          nice: true,
        })
        //@ts-ignore
        .axis('y', { labelFormatter: (d) => d });

      lineChart.line().encode('shape', 'smooth');

      lineChart.point().encode('shape', 'point').tooltip(false);

      lineChart.title({ title: '累计签到签退次数' });

      lineChart.render();
    }
  }, [isDataLoaded, logData]); // 添加依赖项，确保当logData变化时重新渲染图表

  return (
    <div>
      <div>
        <div id="pie" style={{ height: '400px' }} />
        <div id="line" style={{ height: '400px' }} />
      </div>
    </div>
  );
};

export default MyChartComponent;
