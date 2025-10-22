import { DeadLineSection } from '@/components/DeadLinesSection/DeadLineSection';
import { DescriptionCaseSection } from '@/components/DescriptionCaseSection/DescriptionCaseSection';
import { DisscusProject } from '@/components/DisscusProject/DisscusProject';
import { LaunchSection } from '@/components/LaunchSection/LaunchSection';
import { MainSectionCase } from '@/components/MainSectionCase/MainSectionCase';
import { TeamSection } from '@/components/TeamSection/TeamSection';
import styles from "./styles.module.scss"
import { DEAD_LINE_LIST, GUTENTAG_STACK_DATA, GUTENTAG_TEAM_DATA } from './GutenTag.data';

export default function TCardPage() {
  return (
    <>
    <MainSectionCase imgLink={"/img/cases-back/gutenTagBack.webp"} title="Guten Tag" descp='Проект находится в активной стадии разработки Cледите за обновлениями на сайте!'/>
    <TeamSection countSection='01' stack={GUTENTAG_STACK_DATA} team={GUTENTAG_TEAM_DATA}/>
    <DeadLineSection countSection='02' deadlineList={DEAD_LINE_LIST} imagesCarusel={["/img/cases-carusel/gtCar1.webp"]}/>
    <DisscusProject/>
    </>
  );
}