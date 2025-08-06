import { useState } from 'react';

const useTabs = () => {
  const [tabs] = useState(['Tab 1', 'Tab 2']);
  const [activeTab, setActiveTab] = useState(0);

  return { tabs, activeTab, setActiveTab };
};

export default useTabs;
