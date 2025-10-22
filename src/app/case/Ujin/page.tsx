import { DeadLineSection } from '@/components/DeadLinesSection/DeadLineSection';
import { DescriptionCaseSection } from '@/components/DescriptionCaseSection/DescriptionCaseSection';
import { DisscusProject } from '@/components/DisscusProject/DisscusProject';
import { MainSectionCase } from '@/components/MainSectionCase/MainSectionCase';
import { TeamSection } from '@/components/TeamSection/TeamSection';
import styles from "./styles.module.scss"
import { DEAD_LINE_LIST, STACK_DATA, TEAM_DATA } from './page.data';

export default function UjinPage() {
  return (
    <>
    <MainSectionCase imgLink={"/img/cases-back/ujinBack.webp"} variant='serebr' title="Easy Pass" descp='Сервис для поиска ближайших спортивных объектов и мероприятий с возможностью оформления пропуска через систему Ujin. Выбор спортивных объектов и мероприятий, запись на тренировки и участие в мероприятиях, оформление пропуска для въезда и гостей - все в 1 приложении'/>
    <DescriptionCaseSection
    countSection='01'
    imgSrc={"/img/ujin/descp.webp"}
    secondDescp={"Снижение нагрузки на Call центр, удержание клиентов и привлечение новых за счет реферально - бонусной системы, интеграция с системами IDENT, DentalPro"} 
    mainDescp={<>
      Результатом нашей работы стал полноценный сервис, который интегрирован с собственной
      <span className={styles.specialText}> OS UJIN</span> заказчика.
      <br />
      <span style={{ display: 'block', marginTop: '1em' }}>
       На данный момент приложение запущено и тестируется в пилотном режиме в Жилых Комплексах города Москва!
      </span>
    </>}/>
    <TeamSection countSection='02' stack={STACK_DATA} team={TEAM_DATA}/>
    <DeadLineSection countSection='03' deadlineList={DEAD_LINE_LIST} imagesCarusel={["/img/ujin/carusel1.webp", "/img/ujin/carusel2.webp", "/img/ujin/carusel3.webp", "/img/ujin/carusel4.webp", "/img/ujin/carusel5.webp", "/img/ujin/carusel6.webp", "/img/ujin/carusel7.webp", "/img/ujin/carusel8.webp", "/img/ujin/carusel9.webp"]}/>
    <DisscusProject/>
    </>
  );
}