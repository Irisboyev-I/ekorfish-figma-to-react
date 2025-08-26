import DotsIcon from "@/components/icons/DotsIcon"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

export default function CatlogBar() {
    const { t } = useTranslation()
    return (
        <div>
            <Button className={cn('flex items-center justify-center bg-transparent border-0 text-white cursor-pointer hover:bg-transparent gap-[17px] group')}>
                <DotsIcon />
                <span className="group-hover:text-[crimson] text-[16px] leading-[120%] font-semibold">{t('catalog')}</span>
            </Button>
        </div>
    )
}
