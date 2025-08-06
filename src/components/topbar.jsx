import styles from '../styles/TopBar.module.css';
import Tabs from './Tabs';
import AddressBar from './AddressBar';

function TopBar() {
  return (
    <div className={styles.topBar}>
      <Tabs />
      <AddressBar />
    </div>
  );
}

export default TopBar;