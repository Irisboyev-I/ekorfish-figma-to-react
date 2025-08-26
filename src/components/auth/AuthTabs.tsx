import { useParams } from "react-router-dom"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import AuthLogin from "@/components/auth/AuthLogin";
import AuthRegister from "@/components/auth/AuthRegister";
import { styles } from "@/styles/styles";
import UserIcon from "../icons/UserIcon";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";

function AuthTabs() {
    const { t } = useTranslation()
    const activeTabs = useSelector((state: RootState) => state.authTabs.activeTabs)

    return (
        <Sheet>
            <SheetTrigger className={`${styles.navBtnParent}`}>
                <UserIcon />
                <span className={`${styles.navBtnText}`}>{t('vxod')}</span>
            </SheetTrigger>
            <SheetContent className="p-[20px]">
                {
                    activeTabs === 'login' && <div className="">
                        <SheetHeader className="m-[0] p-[0]">
                            <SheetTitle className="font-semibold text-[40px] mb-[30px] leading-[100%] text-[#203686]">Вход</SheetTitle>
                            <SheetDescription>
                                <button className="hover:bg-black hover:text-white cursor-pointer transition-[.66s] mb-[24px] w-full text-center py-[23px] border-[1px] border-[#DDE1E6] rounded-[10px] font-semibold text-[#203686] text-[14px] leading-[110%]">Войти с аккаунтом Google</button>
                                <div className="flex items-center h-[28px] text-gray-500">
                                    <div className="flex-grow border-t border-gray-300"></div>
                                    <span className="mx-3">ИЛИ</span>
                                    <div className="flex-grow border-t border-gray-300"></div>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                        <AuthLogin />
                    </div>
                }

                {
                    activeTabs === 'register' && <div className="">
                        <SheetHeader>
                            <SheetTitle className="font-semibold text-[40px] leading-[100%] text-[#203686]">Регистрация</SheetTitle>
                        </SheetHeader>
                        <AuthRegister />
                    </div>
                }
            </SheetContent>
        </Sheet>
    )
}

export default AuthTabs