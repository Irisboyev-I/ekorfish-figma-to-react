import SearchIcon from "@/components/icons/SearchIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Search() {
    return (
        <form className="w-[375px] relative">
            <Input className={cn(`w-full focus-visible:ring-0 bg-white h-[40px] px-[40px] rounded-[8px]`)} />
            <Button className={cn(`absolute  !cursor-pointer group top-[50%] left-[15px] translate-y-[-50%] !p-0  !h-auto bg-transparent hover:bg-transparent   `)}>
                <SearchIcon />
            </Button>
        </form>
    )
}
