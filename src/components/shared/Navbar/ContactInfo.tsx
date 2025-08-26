import TelegramIcon from "@/components/icons/TelegramIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ContactInfo() {
    const { t } = useTranslation()
    return (
        <ul className="flex gap-[10px] items-center">
            <li><Link to={'/'}><TelegramIcon /></Link> </li>
            <li><Link to={'/'}><WhatsAppIcon /></Link> </li>
            <li className="ml-[10px] group">
                <Link className="text-[18px] group-hover:text-[crimson] leading-[100%] font-bold " to={'/'}>
                    8 (495) 637-82-28
                    <span className="group-hover:text-[crimson] uppercase block text-[10px] font-semibold text-[#70798e]">{t('call')}</span>
                </Link>
            </li>
        </ul>
    )
}
