import { DeadLineSection } from '@/components/DeadLinesSection/DeadLineSection';
import { DescriptionCaseSection } from '@/components/DescriptionCaseSection/DescriptionCaseSection';
import { DisscusProject } from '@/components/DisscusProject/DisscusProject';
import { MainSectionCase } from '@/components/MainSectionCase/MainSectionCase';
import { TeamSection } from '@/components/TeamSection/TeamSection';
import { DEAD_LINE_LIST, STACK_DATA, TEAM_DATA } from './page.data';

export default function TestPapasPage() {
  return (
    <>
    <MainSectionCase imgLink={"/img/test-papos/main.webp"} variant='serebr' title="Test Papas" descp='Мы разработали платформу для отправки заявок на тестирование разных платежных систем со всего мира, включающие в себя: Платежные системы, Дизайн и кастомные заявки. Вся система интегрирована с CRM Zoho'/>
    <DescriptionCaseSection
    countSection='01'
    variant='papos'
    imagesCarusel={["/img/test-papos/carusel1.webp", "/img/test-papos/carusel2.webp", "/img/test-papos/carusel3.webp", "/img/test-papos/carusel1.webp", "/img/test-papos/carusel2.webp", "/img/test-papos/carusel3.webp"]}
    imageBottomPath='/img/test-papos/carusel2.webp'
    imageRigthPath='/img/test-papos/carusel1.webp'
    secondDescp={"Наша система может отправлять до 10 заявок одновременно для 1 пользователя. Это позволяет обрабатывать большее количество заявок и положительно влияет на бизнес клиента."} 
    mainDescp={<>Приложение способствовало снижению нагрузки на входящие заявки компании</>}/>
    <TeamSection countSection='02' stack={STACK_DATA} team={TEAM_DATA}/>
    <DeadLineSection countSection='03' imgPath='/img/test-papos/carusel3.webp' deadlineList={DEAD_LINE_LIST}/>
    <DisscusProject/>
    </>
  );
}