import style from "./styles.module.scss"
import Image from "next/image"

export const CaseBack = ({imgLink}: {imgLink: string}) => {
  return <div className={style.container}>
    <Image src={imgLink} className={style.image_bg} alt={"back"} fill/>
  </div>
}