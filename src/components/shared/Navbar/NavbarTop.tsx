import { styles } from "@/styles/styles";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import ContactInfo from "./ContactInfo";

export default function NavbarTop() {
  return (
    <div className="w-full bg-white py-[16px] md:py-[22px]">
      <div className={`${styles.container} items-center justify-between`}>
        <Logo textStyle="text-[12px] hidden md:block leading-[14px] font-medium max-w-[148px]" />
        <MenuBar />
        <ContactInfo />
      </div>
    </div>
  )
}
