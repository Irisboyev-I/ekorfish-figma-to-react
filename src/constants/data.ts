import baliq from "@/assets/images/baliq.png";
import baliq1 from "@/assets/images/baliq(1).jpg";
import baliq2 from "@/assets/images/baliq(2).jpg";
import baliq3 from "@/assets/images/baliq(3).jpg";
import krevetki from "@/assets/images/krevetki.png";
import file from "@/assets/images/file.png";
import fasovanniy from "@/assets/images/fasovanniy-baliq.png";
import frukti from "@/assets/images/frukti.png";
import moloko from "@/assets/images/moloko.png";
import spec from "@/assets/images/specii.png";
import masla from "@/assets/images/masla.png";
import sous from "@/assets/images/sous.png";
import gruzovoy from "@/assets/images/gruzovoy.png";
import type { AssortimentItem, DeliveryData } from "@/types";

export const assortimentData: {
    top: AssortimentItem[];
    middle: AssortimentItem[];
    bottom: AssortimentItem[];
} = {
    top: [
        {
            id: 1,
            title: "Свежемороженая рыба",
            description: "Собственного производства и со всего мира",
            image: baliq,
        },
        {
            id: 2,
            title: "Охлажденная рыба",
            description: "Со всего мира",
            image: baliq1,
        },
        {
            id: 3,
            title: "Замороженное мясо, птица",
            description: "Со всего мира",
            image: baliq2,
        },
        {
            id: 4,
            title: "Готовая продукция «Экор»",
            description: "Собственного производства и со всего мира",
            image: baliq3,
        },
    ],
    middle: [
        {
            id: 5,
            title: "Креветки и морепродукты",
            description: "Со всего мира",
            image: krevetki,
        },
        {
            id: 6,
            title: "Рыбное филе",
            description: "Собственного производства и со всего мира",
            image: file,
        },
        {
            id: 7,
            title: "Фасованная рыба",
            description: "Собственного производства",
            image: fasovanniy,
        },
        {
            id: 8,
            title: "Замороженные овощи и фрукты",
            description: "Со всего мира",
            image: frukti,
        },
    ],
    bottom: [
        {
            id: 9,
            title: "Масло и молочная продукция",
            description: "Со всего мира",
            image: moloko,
        },
        {
            id: 10,
            title: "Бакалея и специи",
            description: "Со всего мира",
            image: spec,
        },
        {
            id: 11,
            title: "Масла растительные",
            description: "Со всего мира",
            image: masla,
        },
        {
            id: 12,
            title: "Майонезы и соусы",
            description: "Со всего мира",
            image: sous,
        },
    ],
};

export const deliveryData: DeliveryData = {
    slug: "Доставка",
    title: "Эффективная доставка",
    description: [
        "Наша служба доставки предлагает гибкие условия. Мы гарантируем быструю доставку в Москве и областях на следующий день после оформления заказа.",
        "Технология GPS обеспечивает точный мониторинг вашего заказа, позволяя вам всегда быть в курсе его местоположения на карте."
    ],
    features: [
        {
            id: 1,
            text: "Доставка от 50 кг по Москве и области"
        },
        {
            id: 2,
            text: "Доставляем на следующий день после заказа"
        },
        {
            id: 3,
            text: "GPS мониторинг ваших заказов"
        }
    ],
    image: gruzovoy
};