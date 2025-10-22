import { DeadLineSection } from '@/components/DeadLinesSection/DeadLineSection';
import { DescriptionCaseSection } from '@/components/DescriptionCaseSection/DescriptionCaseSection';
import { DisscusProject } from '@/components/DisscusProject/DisscusProject';
import { MainSectionCase } from '@/components/MainSectionCase/MainSectionCase';
import { TeamSection } from '@/components/TeamSection/TeamSection';
import styles from "./styles.module.scss"
import { DEAD_LINE_LIST, SEREBR_STACK_DATA, SEREBR_TEAM_DATA } from './serebr.data';

export default function SerebrPage() {
  return (
    <>
    <MainSectionCase imgLink={"/img/cases-back/serebrBack.webp"} variant='serebr' title="Серебренников" descp='Мы создали нативное мобильное приложения для IOS/Android, которое позволяет записываться на прием в стоматологическую клинику и реализовали реферально - бонусную систему'/>
    <DescriptionCaseSection
    countSection='01'
    imgSrc={"/img/cases-phone/serebCase.webp"}
    secondDescp={"Снижение нагрузки на Call центр, удержание клиентов и привлечение новых за счет реферально - бонусной системы, интеграция с системами IDENT, DentalPro"} 
    mainDescp={<>Приложение способствовало удобству записи в стоматологию,<span className={styles.specialText}>повысило</span> лояльность и доверие клиентов</>}/>
    <TeamSection countSection='02' stack={SEREBR_STACK_DATA} team={SEREBR_TEAM_DATA}/>
    <DeadLineSection countSection='03' deadlineList={DEAD_LINE_LIST} imagesCarusel={["/img/cases-carusel/serebrCar1.webp", "/img/cases-carusel/serebrCar2.webp", "/img/cases-carusel/serebrCar4.webp", "/img/cases-carusel/serebrCar1.webp", "/img/cases-carusel/serebrCar2.webp", "/img/cases-carusel/serebrCar3.webp"]}/>
    <DisscusProject/>
    </>
  );
}