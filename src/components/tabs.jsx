import styles from '../styles/Tabs.module.css';
import useTabs from '../hooks/usetab';
import { FaChrome, FaPlus } from 'react-icons/fa';

function Tabs() {
  const { tabs, activeTab, setActiveTab } = useTabs();

  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`${styles.tab} ${activeTab === index ? styles.active : ''}`}
          onClick={() => setActiveTab(index)}
        >
          <span style={{ paddingLeft: '8px', paddingRight: '4px', verticalAlign: 'middle', display: 'inline-block' }}>
            <FaChrome size={16} />
          </span>
          <span style={{ marginLeft: '8px' }}>New Tab</span>
        </div>
      ))}
      {/* + icon after second tab */}
      {tabs.length >= 2 && (
        <div className={styles.addTab} title="New tab">
          <FaPlus size={16} />
        </div>
      )}
    </div>
  );
}

export default Tabs;