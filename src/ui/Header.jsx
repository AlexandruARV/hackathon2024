import AppNav from "./AppNav";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div>Logo</div>
      <AppNav />
    </div>
  );
}

export default Header;
