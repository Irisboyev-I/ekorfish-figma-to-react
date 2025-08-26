import { styles } from "@/styles/styles";
import CatlogBar from "./CatlogBar";
import Search from "./Search";
import NavBtnGroup from "./NavBtnGroup";

export default function NavbarBottom() {
  return (
    <div className="w-full py-[12px] bg-[#203686] ">
      <div className={`${styles.container} items-center justify-between`}>
        <div className="flex items-center gap-[30px]">
          <CatlogBar />
          <Search />
        </div>
        <NavBtnGroup />
      </div>
    </div>
  )
}
