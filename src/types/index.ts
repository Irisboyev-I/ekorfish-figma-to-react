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

export interface PhoneInputProps {
    control: any
    errors: any
    t: (key: string) => string
    styles: { input: string }
}

export interface AssortimentItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface DeliveryFeature {
    id: number;
    text: string;
}

export interface DeliveryData {
    slug: string;
    title: string;
    description: string[];
    features: DeliveryFeature[];
    image: string;
}