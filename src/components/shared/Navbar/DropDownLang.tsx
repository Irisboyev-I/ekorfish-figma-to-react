
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Languages } from "lucide-react"
import { langList } from "./navbar.config"
export default function DropDownLang() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={cn("text-white !h-auto mt-[7px] cursor-pointer hover:text-[crimson] outline-0")}><Languages /></DropdownMenuTrigger>
            <DropdownMenuContent className={cn('bg-[#203686] border-none rounded-[0] p-0')} sideOffset={20}>
                {
                    langList.map(({ id, flag, lang }) => {
                        return <DropdownMenuItem key={id} className={cn(`flex items-center gap-[10px] justify-center py-[12px] text-white text-[16px] cursor-pointer hover:opacity-[.5] font-semibold !hover:rounded-0 focus:bg-transparent`)}>
                            <img className="w-[40px] h-[25px]" src={flag} alt={lang} />
                            {lang}
                        </DropdownMenuItem>
                    })
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
