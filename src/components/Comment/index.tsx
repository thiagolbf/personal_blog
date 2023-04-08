import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";

import { useState } from "react";

interface CommentProps {
  content: string;
  deleteComment: (content: string) => void;
}

export const Comment = ({ content, deleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/thiagolbf.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Barcelos</strong>
              <time title="04 de Abril às 06:35h" dateTime="2023-04-04">
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={() => deleteComment(content)}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={() => handleLikeComment()}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
