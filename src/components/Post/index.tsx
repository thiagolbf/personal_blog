import styles from "./Post.module.css";

import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";

interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Content[];
  publishAt: Date;
}

interface Content {
  type: string;
  content: string;
}

export const Post = ({ author, content, publishAt }: PostProps) => {
  // const publishedDateFormated = new Intl.DateTimeFormat("pt-Br", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // }).format(publishAt);

  const [comments, setComments] = useState([1, 2]);

  const publishedDateFormated = format(publishAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setComments([...comments, comments.length]);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormated} dateTime={publishAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((value) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
};
