import { useState } from 'react';

const useTabs = () => {
  const [tabs] = useState(['New Tab', 'New Tab']);
  const [activeTab, setActiveTab] = useState(0);

  return { tabs, activeTab, setActiveTab };
};

export default useTabs;
