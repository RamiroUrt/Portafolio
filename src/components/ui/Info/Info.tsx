import ItemContact from "../Item/ItemContact"
import Title from "../Title/Title"
import LocationIcon from '../../../assets/icons/Svg/LocationIcon'
import MailIcon from "../../../assets/icons/Svg/MailIcon"
import WhatssapIcon from "../../../assets/icons/Svg/WhatssapIcon"
import { useTranslation } from "react-i18next"



const Info = () => {

  const { t } = useTranslation();

  return (
    <section className="info-body">
        <Title text={t('sidebar.contact')} />
        <div className="item-content icon-dark gap-2 flex flex-col justify-center">
            <ItemContact 
            text={"urteaga********@gmail.com"}
             icon={<MailIcon/>}
             type='email'/>
            <ItemContact 
            text={"Maggiolo - Santa Fe"} 
            icon={<LocationIcon/>}
            type='location'/>
            <ItemContact 
            text={"Whatsapp"} 
            icon={<WhatssapIcon/>}
            type='link'/>
        </div>
    </section>
  )
}

export default Info