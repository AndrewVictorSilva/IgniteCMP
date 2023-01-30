import { CloudArrowUp } from "phosphor-react";
import styles from "./../styles/Header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <CloudArrowUp size={48} color="#ffffff" />
      </header>
    </>
  );
}
