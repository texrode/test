import { FormFeedback } from "@/widgets/FormFeedback/FormFeedback";
import styles from "./styles.module.scss";

export const DisscusProject = () => {
  return (
    <section id="contactus" data-title="Контакты" className={styles.section}>
      <p className={styles.title}>Contacts</p>
      <div className={styles.form_block}>
        <div className={styles.left_block}>
          <p className={styles.left_title}>Давайте поработаем</p>
          <p className={styles.left_subtitle}>
            Разрабатываем сервисы и информационные системы, сопровождаем ПО,
            внедряем корпоративные решения и формируем
            выделенную аутстаф-команду под управление заказчика.
          </p>
        </div>
        <FormFeedback />
      </div>
    </section>
  );
};
