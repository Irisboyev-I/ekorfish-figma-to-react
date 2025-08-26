import BagIcon from "@/components/icons/BagIcon";
import FavoritesIcon from "@/components/icons/FavoritesIcon";
import { styles } from "@/styles/styles";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DropDownLang from "./DropDownLang";
import AuthTabs from "@/components/auth/AuthTabs";

export default function NavBtnGroup() {
    const { t } = useTranslation()
    return (
        <ul className="flex items-center gap-[40px]">
            <li>
                <Link className={`${styles.navBtnParent}`} to={'/'}>
                    <FavoritesIcon />
                    <span className={`${styles.navBtnBadge}`}>0</span>
                    <span className={`${styles.navBtnText}`}>{t('favorite')}</span>
                </Link>
            </li>
            <li>
                <Link to={'/'} className={`${styles.navBtnParent}`}>
                    <BagIcon />
                    <span className={`${styles.navBtnBadge}`}>0</span>
                    <span className={`${styles.navBtnText}`}>10 000,00 ₽</span>
                </Link>
            </li>
            <li>
                <DropDownLang />
            </li>
            <li>
                <AuthTabs />
            </li>
        </ul>
    )
}
