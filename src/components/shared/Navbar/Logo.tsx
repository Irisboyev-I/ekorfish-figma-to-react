import LogoIcon from "@/components/icons/LogoIcon";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type Props = {
    textStyle: string
}

export default function Logo({ textStyle }: Props) {
    const { t } = useTranslation()
    return (
        <div className="flex items-center gap-[10px]">
            <Link className="hover:opacity-[.5]" to={'/'}>
                <LogoIcon />
            </Link>
            <p className={textStyle}>{t('logoTitle')}</p>
        </div>
    )
}
