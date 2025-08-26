import { Link } from "react-router-dom";
import { menuLink } from "./navbar.config";
import { useTranslation } from "react-i18next";

export default function MenuBar() {
    const { t } = useTranslation()
    return (
        <ul className="flex items-center gap-[16px] ">
            {
                menuLink.map(({ id, linkName, slug }) => {
                    return <li key={id}> <Link className="text-[14px] leading-[20px] font-semibold hover:text-[crimson]" to={slug}>
                        {t(linkName)}
                    </Link></li>
                })
            }

        </ul>
    )
}
