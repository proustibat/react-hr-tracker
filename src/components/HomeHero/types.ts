import { MouseEvent, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type HandleTogglePauseOptions = {
  forcePlay?: boolean;
  forceStop?: boolean;
};

export type HandleTogglePauseArgs = HandleTogglePauseOptions | MouseEvent;

export type DataChartItemType = {
  time: number;
  hr: number;
};

export type TagInfoType = {
  tagName: string;
  url?: string;
  icon?: IconDefinition;
};
export type TagElementType = {
  url?: string;
  children: ReactNode;
};
