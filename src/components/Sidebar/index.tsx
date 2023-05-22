import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

import { Avatar } from "../Avatar";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1582647509711-c8aa8a8bda71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
      />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/thiagolbf.png" />

        <strong>Thiago Barcelos</strong>
        <span>Engineering and Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
