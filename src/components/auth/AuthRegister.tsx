import { setAuthTabs } from "@/featerues/authTabsSlice"
import { useState } from "react"
import { useDispatch } from "react-redux"

function AuthRegister() {
    const [face, setFace] = useState("FIZ")
    const dispatch = useDispatch()

    return (
        <div>
            <div className="group w-full flex gap-[16px] mb-[20px]">
                <button onClick={() => setFace("FIZ")} className={face === "FIZ" ? "bg-[#203686] py-[23px] w-[100%] cursor-pointer hover:opacity-[.8] border-[1px] text-[#FFFF] text-[14px] font-semibold leading-[110%] rounded-[10px]" : "bg-gray-100 py-[23px] w-[100%] cursor-pointer hover:bg-gray-50 border-[1px] border-[#DDE1E6] text-[#203686] text-[14px] font-semibold leading-[110%] rounded-[10px]"}>Физ. лицо</button>
                <button onClick={() => setFace("YUR")} className={face === "YUR" ? "bg-[#203686] py-[23px] w-[100%] cursor-pointer hover:opacity-[.8] border-[1px] text-[#FFFF] text-[14px] font-semibold leading-[110%] rounded-[10px]" : "bg-gray-100 py-[23px] w-[100%] cursor-pointer hover:bg-gray-50 border-[1px] border-[#DDE1E6] text-[#203686] text-[14px] font-semibold leading-[110%] rounded-[10px]"}>Юр. лицо</button>
            </div>
            <form action="">
                <input className="py-[21px] px-[16px] border-[1px] border-[#DDE1E6] w-full mb-[10px] rounded-[10px] bg-[#F4F7FB] placeholder:font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[130%] leading-[130%] placeholder:text-[#70798E] text-[#70798E]" type="text" placeholder="Имя" />
                <input className="py-[21px] px-[16px] border-[1px] border-[#DDE1E6] w-full mb-[10px] rounded-[10px] bg-[#F4F7FB] placeholder:font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[130%] leading-[130%] placeholder:text-[#70798E] text-[#70798E]" type="text" placeholder="Фамилия" />
                <input className="py-[21px] px-[16px] border-[1px] border-[#DDE1E6] w-full mb-[10px] rounded-[10px] bg-[#F4F7FB] placeholder:font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[130%] leading-[130%] placeholder:text-[#70798E] text-[#70798E]" type="email" placeholder="Email" />
                <input className="py-[21px] px-[16px] border-[1px] border-[#DDE1E6] w-full mb-[10px] rounded-[10px] bg-[#F4F7FB] placeholder:font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[130%] leading-[130%] placeholder:text-[#70798E] text-[#70798E]" type="text" placeholder="Телефон" />
                <div className="flex items-center gap-[10px]">
                    <input type="checkbox" />
                    <span className="font-medium text-[12px] leading-[16px] text-[#70798E]">Я согласен(а) получать рассылку (новости, акции, скидки)*</span>
                </div>
                <div className="flex items-center gap-[10px] mt-[20px]">
                    <input type="checkbox" />
                    <span className="font-medium text-[12px] leading-[16px] text-[#70798E]">Подтверждаю своё согласие на обработку и хранение моих персональных данных в соответствии с пользовательским соглашением</span>
                </div>
                <button className="mt-[20px] w-full bg-[#FFED32] rounded-[10px] text-[#203686] cursor-pointer font-semibold leading-[110%] text-[14px] py-[23px] hover:opacity-[.8]">Зарегистрироваться</button>
                <button className="border-none bg-transparent mt-5 cursor-pointer group" onClick={() => dispatch(setAuthTabs('login'))}>Already have accoun? <span className="group-hover:text-[green]">Login</span></button>
            </form>
        </div>
    )
}

export default AuthRegister
