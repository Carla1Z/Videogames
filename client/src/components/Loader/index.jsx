import React from "react";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div class={styles.loader}>
      <div class={styles.scanner}>
        <span>Cargando...</span>
      </div>
    </div>
  );
}
