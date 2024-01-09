"use client";

import { useState } from "react";

export default function useTabs() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const thisTabIsActive = (key: number) =>
    activeTab === key && "tabs-top__tab-active";

  const setActiveTabOnClick = (key: number) => setActiveTab(key);

  return {
    activeTab,
    thisTabIsActive,
    setActiveTabOnClick,
  };
}
