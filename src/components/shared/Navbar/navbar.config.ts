import { Lang, type IMenuList, type Languages } from "@/types";

export const menuLink: IMenuList[] = [
    {
        id: 0,
        linkName: 'delivery',
        slug: '/delivery'
    },
    {
        id: 1,
        linkName: 'price',
        slug: '/price'
    },
    {
        id: 2,
        linkName: 'production',
        slug: '/produce'
    },
    {
        id: 3,
        linkName: 'pay',
        slug: '/pay'
    },
    {
        id: 4,
        linkName: 'contacts',
        slug: '/contact'
    },
    {
        id: 5,
        linkName: 'abt',
        slug: '/about'
    },
]

export const langList = [
    {
        id: 1,
        lang: "Русский",
        flag: "https://flagcdn.com/w320/ru.png",
        code: "ru", 
    },
    {
        id: 2,
        lang: "English",
        flag: "https://flagcdn.com/w320/us.png",
        code: "en", 
    },
]