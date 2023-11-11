import styles from "./page.module.css";
import Project from "../components/projects/Index";

interface ProjectItem {
  title1: string;
  title2: string;
  src: string;
}

const Home: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      title1: "Adiwarna",
      title2: "Bentala",
      src: "Picture01.jpg",
    },
    {
      title1: "Binar",
      title2: "Renjana",
      src: "Picture02.jpg",
    },
    {
      title1: "Aksa Cakrawala",
      title2: "Nirmala",
      src: "Picture03.jpg",
    },
    {
      title1: "Nayanika",
      title2: "Esa Dikara",
      src: "Picture04.jpg",
    },
    {
      title1: "Binar",
      title2: "Binar",
      src: "Picture05.jpg",
    },
  ];

  return (
    <>
      <main className={styles.main}>
        <div className={styles.gallery}>
          <p>Beautiful Indonesian Words</p>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
