import { DeadLineSection } from '@/components/DeadLinesSection/DeadLineSection';
import { DescriptionCaseSection } from '@/components/DescriptionCaseSection/DescriptionCaseSection';
import { DisscusProject } from '@/components/DisscusProject/DisscusProject';
import { LaunchSection } from '@/components/LaunchSection/LaunchSection';
import { MainSectionCase } from '@/components/MainSectionCase/MainSectionCase';
import { TeamSection } from '@/components/TeamSection/TeamSection';
import styles from "./styles.module.scss"
import { DEAD_LINE_LIST, STACK_DATA, TEAM_DATA } from './page.data';

export default function RunningClub() {
  return (
    <>
    <MainSectionCase imgLink={"/img/108/main.webp"} variant='serebr' title="108 Running Club" descp='Мы разработали систему автоматической обработки тренировочных файлов формата .fit, которые используют спортивные часы и трекеры (Garmin, Wahoo и др.), извлечении ключевых параметров тренировки и последующем создании персонализированных карточек в визуально привлекательной форме.'/>
    <LaunchSection hrefMain={{link: "https://t.me/Running_club_Bot", title: "Запустить"}} countSection='01'>Запустите приложение прямо в Telegram<br/>Никаких скачиваний, все просто!</LaunchSection>
    <DescriptionCaseSection 
    countSection='02'
    imgSrc={"/img/108/descp.webp"}
    secondDescp={"Проект оказался особенно востребован среди бегунов, велосипедистов и триатлетов — спортсмены получили удобный способ делиться результатами в социальных сетях, создавая визуально привлекательный контент без необходимости использовать сторонние редакторы."} 
    mainDescp={<>Количество сессий в боте выросло в <span className={styles.specialText}>5 раз</span> в течение первой недели после запуска</>}/>
    <TeamSection countSection='03' stack={STACK_DATA} team={TEAM_DATA}/>
    <DeadLineSection countSection='04' deadlineList={DEAD_LINE_LIST} imagesCarusel={["/img/108/carusel1.webp", "/img/108/carusel2.webp", "/img/108/carusel3.webp", "/img/108/carusel1.webp", "/img/108/carusel2.webp", "/img/108/carusel3.webp"]}/>
    <DisscusProject/>
    </>
  );
}