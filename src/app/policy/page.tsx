import styles from "./page.module.scss";
import { AnimationBack } from "@/widgets/AnimationBack/AnimationBack";
import { POLICY_DATA } from "./policy.data";

export default function PrivacyPage() {
  return (
    <>
      <AnimationBack />
      <h1 className={styles.title}>Политика обработки персональных данных</h1>
      <div className={styles.divider} />
      <div className={styles.policy}>
        {POLICY_DATA.map((section, i) => (
          <section
            id={"policy" + i}
            data-title={section.title}
            className={styles.policySection}
            key={i}
          >
            <h2>{section.title}</h2>
            <ol>
              {section.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </>
  );
}
