export interface ILink {
    title: string,
    href: string
}

export interface IBlog {
    id: number | string,
    date: string,
    src: string,
    title: string,
    text: string
}

export interface IGood {
    id: number | string,
    filter: string,
    src: string,
    title: string,
    price: number
}

export interface ICartGood extends IGood {
    volume: string,
    type: string,
    count: number
}

export interface ISocialMedia {
    src: string,
    href: string,
    alt: string
}

export interface IAboutInfo {
    src: string,
    text: string
}

export interface IAboutAdvantage {
    src: string,
    text: string,
    alt: string
}
