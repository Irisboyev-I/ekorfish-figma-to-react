import { useTranslation } from "react-i18next"
import { langList } from "./navbar.config"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"
import { cn } from "@/lib/utils"

export default function DropDownLang() {
  const { i18n } = useTranslation()

  const handleChangeLang = (code: string) => {
    i18n.changeLanguage(code)
    localStorage.setItem("lang", code)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "text-white !h-auto mt-[7px] cursor-pointer hover:text-[crimson] outline-0"
        )}
      >
        <Languages />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className={cn("bg-[#203686] border-none rounded-[0] p-0")}
        sideOffset={20}
      >
        {langList.map(({ id, flag, lang, code }) => (
          <DropdownMenuItem
            key={id}
            onClick={() => handleChangeLang(code)}
            className={cn(
              "flex items-center gap-[10px] justify-center py-[12px] text-white text-[16px] cursor-pointer hover:opacity-[.5] font-semibold !hover:rounded-0 focus:bg-transparent"
            )}
          >
            <img className="w-[40px] h-[25px]" src={flag} alt={lang} />
            {lang}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
