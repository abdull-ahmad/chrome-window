import styles from '../styles/AddressBar.module.css';
import { FaArrowLeft, FaArrowRight, FaRedo, FaLock, FaStar, FaEllipsisV, FaSearch } from 'react-icons/fa';

function AddressBar() {
  return (
    <div className={styles.addressBar}>
      <div className={styles.controls}>
        <FaArrowLeft />
        <FaArrowRight />
        <FaRedo />
      </div>
      <div className={styles.urlBar}>
        <FaSearch className={styles.searchIcon} />
        <span>https://example.com</span>
      </div>
      <div className={styles.actions}>
        <FaStar />
        <FaEllipsisV />
      </div>
    </div>
  );
}

export default AddressBar;