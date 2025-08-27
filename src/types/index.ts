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

interface PhoneInputProps {
  control: any
  errors: any
  t: (key: string) => string
  styles: { input: string }
}