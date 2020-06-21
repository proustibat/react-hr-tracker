import moment from 'moment';
import { DataChartItemType } from './types';

export const filterOlderData = (
  data: DataChartItemType[],
  secondsRange: number,
) =>
  data.filter(item =>
    moment(item.time).isAfter(moment().subtract(secondsRange, 's')),
  );
