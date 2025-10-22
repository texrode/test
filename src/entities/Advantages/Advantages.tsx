import styles from "./styles.module.scss";

interface AdvantagesProps {
  text1: string;
  text2: string;
}

export const Advantages = ({ text1, text2 }: AdvantagesProps) => {
  return (
    <div className={styles.advantages}>
      <p className={styles.text1}>{text1}</p>
      <div className={styles.text2_block}>
        <p className={styles.text2}>{text2}</p>
      </div>
    </div>
  );
};
