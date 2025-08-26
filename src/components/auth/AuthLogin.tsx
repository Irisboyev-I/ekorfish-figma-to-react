import { type AppDispatch } from "@/app/store"
import { setAuthTabs } from "@/featerues/authTabsSlice"
import { setToken } from "@/featerues/authTokenSlice"
import { useLoginMutation } from "@/services/auth.services"
import { LucideEye, LucideEyeClosed } from "lucide-react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

function AuthLogin() {
    const [show, setShow] = useState(false)
    const [login] = useLoginMutation()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch<AppDispatch>()

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const { data } = await login({ username, password })
            if (data) {
                dispatch(setToken({ accessToken: data?.accessToken, refreshToken: data?.refreshToken }))
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="mt-[30px]">
            <form action="">
                <div className="">
                    <input className="py-[21px] px-[16px] border-[1px] border-[#DDE1E6] w-full mb-[10px] rounded-[10px] bg-[#F4F7FB] placeholder:font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[130%] leading-[130%] placeholder:text-[#70798E] text-[#70798E]" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Телефон, email или логин" />
                </div>
                <div className="w-full relative">
                    <input onChange={(e) => setPassword(e.target.value)} type={show ? "text" : "password"} placeholder="Пароль" className="py-[21px] px-[16px] border-[1px] border-[#DDE1E6] w-full mb-[10px] rounded-[10px] bg-[#F4F7FB] placeholder:font-medium placeholder:text-[14px] text-[14px] placeholder:leading-[130%] leading-[130%] placeholder:text-[#70798E] text-[#70798E]" />
                    <span className="absolute right-0 bottom-[-20px] hover:opacity-[.8]"><Link to={'/'}>Забыли пароль?</Link></span>
                    <span className="absolute right-5 top-[45%] cursor-pointer translate-y-[-50%]" onClick={() => setShow((prev) => !prev)}>{show ? <LucideEye /> : <LucideEyeClosed />}</span>
                </div>
                <button onClick={handleLogin} className="mt-[40px] w-full bg-[#FFED32] rounded-[10px] text-[#203686] cursor-pointer font-semibold leading-[110%] text-[14px] py-[23px] hover:opacity-[.8]">Войти</button>
                <button className="mt-[20px] w-full rounded-[10px] text-[#203686] cursor-pointer border-2 border-gray-300 font-semibold leading-[110%] text-[14px] py-[23px] hover:opacity-[.8]" >Купить без регистрации</button>
            </form>
            <button className="absolute bottom-[20px] px-[10px] py-[15px] bg-gray-200 border-2 border-gray-300 rounded-xl cursor-pointer hover:bg-gray-300" onClick={() => dispatch(setAuthTabs('register'))}>Register</button>
        </div>
    )
}

export default AuthLogin