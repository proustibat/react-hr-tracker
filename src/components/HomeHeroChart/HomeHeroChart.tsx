import React from 'react';
import moment from 'moment';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  LabelList,
} from 'recharts';
import CustomTooltip from './CustomTooltip';

import { DataChartItemType } from '../HomeHero/types';

type HomeHeroChartProps = {
  data: DataChartItemType[];
  className?: string;
};

const HomeHeroChart = ({ data, className }: HomeHeroChartProps) => {
  return (
    <div className={`home-hero-chart ${className}`}>
      <ResponsiveContainer
        aspect={16 / 9}
        width="100%"
        debounce={50}
        minHeight={0}
        minWidth={0}
      >
        <ScatterChart>
          <CartesianGrid strokeDasharray="1 3" />
          <XAxis
            dataKey="time"
            domain={[
              data.length > 0 ? data[0].time : 'auto',
              data.length > 0
                ? moment(data[0].time)
                    .add(HomeHeroChart.maxRangeLengthSeconds, 's')
                    .toDate()
                    .getTime()
                : 'auto',
            ]}
            name="Time"
            tickFormatter={unixTime => moment(unixTime).format('HH:mm:ss')}
            type="number"
            interval="preserveStartEnd"
            stroke="#dbdbdb"
            tickCount={HomeHeroChart.maxRangeLengthSeconds}
            minTickGap={HomeHeroChart.maxRangeLengthSeconds}
          />
          <YAxis
            dataKey="hr"
            type="number"
            name="Hear Rate"
            unit="bpm"
            domain={[40, 180]}
            stroke="#dbdbdb"
            tickCount={14}
          />

          <Tooltip content={CustomTooltip} />

          <Scatter
            isUpdateAnimationActive={false}
            isAnimationActive={false}
            data={data}
            line={{ stroke: '#dbdbdb' }}
            lineJointType="linear"
            lineType="joint"
          >
            <LabelList
              dataKey="hr"
              position="top"
              className="home-hero-chart__label"
            />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

HomeHeroChart.maxRangeLengthSeconds = 10;

export default HomeHeroChart;
