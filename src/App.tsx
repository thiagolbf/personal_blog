import "./global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/thiagolbf.png",
      name: "Thiago Barcelos",
      role: "Engineering and Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz      no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "github.com/thiagolbf" },
    ],
    publishAt: new Date("2023-07-04 08:11"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/megaman.png",
      name: "Megaman",
      role: "Megaman",
    },
    content: [
      { type: "paragraph", content: "Olá" },
      {
        type: "paragraph",
        content: "Novo post de outro usuário",
      },
      { type: "link", content: "github.com/megaman" },
    ],
    publishAt: new Date(),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((value, index) => {
            return (
              <Post
                key={value.id}
                author={value.author}
                content={value.content}
                publishAt={value.publishAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
