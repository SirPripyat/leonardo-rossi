'use client';

import React from 'react';
import './Tabs.scss';
import useTabs from './useTabs';

type TabsProps = {
  items: {
    id: number;
    name: string;
    children: React.ReactNode;
  }[];
};

export default function Tabs({ items }: TabsProps) {
  const { activeTab, thisTabIsActive, setActiveTabOnClick } = useTabs();

  return (
    <div className="technologies-tabs">
      <div className="technologies-tabs__tabs-top">
        {items.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => setActiveTabOnClick(id)}
            className={`tabs-top__tabs ${thisTabIsActive(id)}`}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="technologies-tabs__tabs-content">
        {items.map(
          ({ id, children }) =>
            activeTab === id && (
              <React.Fragment key={id}>{children}</React.Fragment>
            ),
        )}
      </div>
    </div>
  );
}
