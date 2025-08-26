export interface IMenuList {
    id: number,
    linkName: string,
    slug: string
}

export type Languages = {
    id: number,
    lang: string,
    flag: string
}

export enum Lang {
    "ru" = "RU",
    "en" = "EN"
}