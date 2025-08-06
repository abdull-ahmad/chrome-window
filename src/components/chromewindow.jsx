import styles from "../styles/ChromeWindow.module.css";
import GoogleSearchBar from "./searchbar";
import TopBar from "./TopBar";
import WindowControls from "./WindowControls";

function ChromeWindow() {
  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <TopBar />
        <WindowControls />
      </div>
      <div className={styles.body}>
        <div className={styles.centerContent}>
          <img
            src="./google-logo.png"
            alt="Google"
            className={styles.googleLogo}
          />
          <GoogleSearchBar/>
        </div>
      </div>
    </div>
  );
}

export default ChromeWindow;
