import styles from "@/styles/home.module.css";
import Navbar from "@/components/navbar/navbar";
import Questions from "@/components/questions/questions";

export default function Home() {
  return (
    <div className={styles.body}>
      <Navbar />
      <Questions />
    </div>
  );
}
