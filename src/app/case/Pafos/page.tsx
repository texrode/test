import { DeadLineSection } from '@/components/DeadLinesSection/DeadLineSection';
import { DescriptionCaseSection } from '@/components/DescriptionCaseSection/DescriptionCaseSection';
import { DisscusProject } from '@/components/DisscusProject/DisscusProject';
import { MainSectionCase } from '@/components/MainSectionCase/MainSectionCase';
import { TeamSection } from '@/components/TeamSection/TeamSection';
import { DEAD_LINE_LIST, STACK_DATA, TEAM_DATA } from './page.data';

export default function SerebrPage() {
  return (
    <>
    <MainSectionCase imgLink={"/img/cases-back/pafosBack.webp"} variant='serebr' title="Pafos" descp='Мы разработали систему генерации кодов, для защиты продукции клиента от подделки. Генерация поддерживает бесконечное количество кодов, и управляется отдельно с защищенной админ панели.'/>
    <DescriptionCaseSection
    countSection='01'
    imagesCarusel={["/img/pafos/pafosCarusel.webp", "/img/pafos/pafosCarusel2.webp", "/img/pafos/pafosCarusel.webp", "/img/pafos/pafosCarusel2.webp", "/img/pafos/pafosCarusel.webp", "/img/pafos/pafosCarusel2.webp"]}
    imageBottomPath='/img/pafos/pafosCarusel2.webp'
    imageRigthPath='/img/pafos/pafosCarusel.webp'
    secondDescp={"Наша система генерирует уникальные коды, которые могут быть модерированы и управляются с Админ панели. Система является высоконагруженной и выдерживает миллионы генераций, что является важным для заказчика."} 
    mainDescp={<>Приложение способствовало уменьшению количества подделок продукции</>}/>
    <TeamSection countSection='02' stack={STACK_DATA} team={TEAM_DATA}/>
    <DeadLineSection countSection='03' imgPath='/img/pafos/pafosCarusel.webp' deadlineList={DEAD_LINE_LIST}/>
    <DisscusProject/>
    </>
  );
}