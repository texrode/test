import { DeadLineSection } from '@/components/DeadLinesSection/DeadLineSection';
import { DescriptionCaseSection } from '@/components/DescriptionCaseSection/DescriptionCaseSection';
import { DisscusProject } from '@/components/DisscusProject/DisscusProject';
import { LaunchSection } from '@/components/LaunchSection/LaunchSection';
import { MainSectionCase } from '@/components/MainSectionCase/MainSectionCase';
import { TeamSection } from '@/components/TeamSection/TeamSection';
import styles from "./styles.module.scss"
import { DEAD_LINE_LIST, TCARD_STACK_DATA, TCARD_TEAM_DATA } from './tcard.data';

export default function TCardPage() {
  return (
    <>
    <MainSectionCase imgLink={"/img/cases-back/tcardBack.webp"} title="T -Card" descp='Мы создали полноценное приложение для Работодателя и Сотрудника прямо в Telegram, где каждая сторона может найти то, что ей нужно. Введение продуктовых команд в приложении позволяет снизить затраты и ускорить запуск проектов.'/>
    <LaunchSection hrefMain={{link: 'href="https://t.me/toolsdev_work', title: "Telegram канал"}} countSection={"01"} imgPath={'/img/tcardqr.webp'}>
      Отсканируйте приложение и запустите его прямо в Telegram<br /> Никаких скачиваний, всё просто!
    </LaunchSection>
    <DescriptionCaseSection
    countSection='02'
    imgSrc={"/img/cases-phone/TCardCase.webp"}
    secondDescp={"Мы - практичное решение, которое упрощает процесс поиска работы в IT-сфере. Больше не нужно переключаться между разными платформами и приложениями — все сотрудничество теперь в Telegram."} 
    mainDescp={<>Высоконагруженное приложение для поиска работы, разработанное на базе <span className={styles.specialText}>Telegram Mini Apps</span></>}/>
    <TeamSection countSection='03' stack={TCARD_STACK_DATA} team={TCARD_TEAM_DATA}/>
    <DeadLineSection countSection='04'  deadlineList={DEAD_LINE_LIST} imagesCarusel={["/img/cases-carusel/tcCar1.webp", "/img/cases-carusel/tcCar2.webp", "/img/cases-carusel/tcCar3.webp", "/img/cases-carusel/tcCar4.webp", "/img/cases-carusel/tcCar5.webp", "/img/cases-carusel/tcCar1.webp", "/img/cases-carusel/tcCar2.webp"]}/>
    <DisscusProject/>
    </>
  );
}