import React from 'react';
import { createMarkup } from '../../utils';

export type MainSectionProps = {
  title: string;
  subtitle?: never;
  children?: React.ReactNode;
};

const MainSection = ({
  title,
  subtitle = null as never,
  children,
}: MainSectionProps) => (
  <section className="section container">
    <div className="content">
      <h1 className="title is-size-3">{title}</h1>
      {subtitle && (
        <h2
          className="subtitle is-size-4"
          dangerouslySetInnerHTML={createMarkup(subtitle)}
        />
      )}
      {children && <div className="content is-size-5">{children}</div>}
    </div>
  </section>
);

export default MainSection;
