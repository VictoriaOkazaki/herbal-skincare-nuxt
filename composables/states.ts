import { IAboutAdvantage, IAboutInfo, IBlog, ICartGood, IGood, ISocialMedia } from "~~/types"

export const useBlogs = () => useState<IBlog[]>('blogs', () => {
    return [
        { "id": 1, "date": "17 October, 2022", "src": "/images/blog/blog-1.jpg", "title": "how to eat healthy and live not to eat", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" },
        { "id": 2, "date": "12 October, 2022", "src": "/images/blog/blog-2.jpg", "title": "our new office in south carolina", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"},
        { "id": 3, "date": "5 October, 2022", "src": "/images/blog/blog-3.jpg", "title": "which kinds of coffee is good for health", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"},
        { "id": 4, "date": "28 September, 2022", "src": "/images/blog/blog-4.jpg", "title": "this plant is something fantastic", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" },
        { "id": 5, "date": "17 October, 2022", "src": "/images/blog/blog-1.jpg", "title": "how to eat healthy and live not to eat", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" },
        { "id": 6, "date": "12 October, 2022", "src": "/images/blog/blog-2.jpg", "title": "our new office in south carolina", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"},
        { "id": 7, "date": "5 October, 2022", "src": "/images/blog/blog-3.jpg", "title": "which kinds of coffee is good for health", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"},
        { "id": 8, "date": "28 September, 2022", "src": "/images/blog/blog-4.jpg", "title": "this plant is something fantastic", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" },
        { "id": 9, "date": "17 October, 2022", "src": "/images/blog/blog-1.jpg", "title": "how to eat healthy and live not to eat", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" },
        { "id": 10, "date": "12 October, 2022", "src": "/images/blog/blog-2.jpg", "title": "our new office in south carolina", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"},
        { "id": 11, "date": "5 October, 2022", "src": "/images/blog/blog-3.jpg", "title": "which kinds of coffee is good for health", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"},
        { "id": 12, "date": "28 September, 2022", "src": "/images/blog/blog-4.jpg", "title": "this plant is something fantastic", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" }
    ]
})

export const useBlog = (id: number): IBlog | undefined => {
    const blogs = useBlogs()
    return blogs.value.find(blog => blog.id === id)
}

export const useCart = () => useState<ICartGood[]>('cart', () => {
    return []
})

export const useGoods = () => useState<IGood[]>('goods', () => {
    return [
        { "id": 1, "filter": "bath", "src": "/images/goods/good-1.png", "title": "body spray", "price": 15 },
        { "id": 2, "filter": "bath", "src": "/images/goods/good-2.png", "title": "bar soap", "price": 8 },
        { "id": 3, "filter": "decor", "src": "/images/goods/good-3.png", "title": "cosmetic powder", "price": 30 },
        { "id": 4, "filter": "bath", "src": "/images/goods/good-4.png", "title": "hand cream", "price": 12 },
        { "id": 5, "filter": "antiage", "src": "/images/goods/good-5.png", "title": "face serum", "price": 15 },
        { "id": 6, "filter": "decor", "src": "/images/goods/good-6.png", "title": "lipstick", "price": 6 },
        { "id": 7, "filter": "bath", "src": "/images/goods/good-7.png", "title": "shower gel", "price": 14 },
        { "id": 8, "filter": "decor", "src": "/images/goods/good-8.png", "title": "mascara", "price": 21 },
        { "id": 9, "filter": "bath", "src": "/images/goods/good-9.png", "title": "anti-akne serum", "price": 29 },
        { "id": 10, "filter": "bath", "src": "/images/goods/good-10.png", "title": "moisturizer", "price": 18 },
        { "id": 11, "filter": "decor", "src": "/images/goods/good-11.png", "title": "cosmetic bag", "price": 57 },
        { "id": 12, "filter": "bath", "src": "/images/goods/good-12.png", "title": "body lotion", "price": 14 },
        { "id": 13, "filter": "antiage", "src": "/images/goods/good-13.png", "title": "anti-age serum", "price": 22 },
        { "id": 14, "filter": "bath", "src": "/images/goods/good-14.png", "title": "body wash", "price": 13 },
        { "id": 15, "filter": "bath", "src": "/images/goods/good-15.png", "title": "shampoo", "price": 14 },
        { "id": 16, "filter": "decor", "src": "/images/goods/good-16.png", "title": "lipstick", "price": 9 },
        { "id": 17, "filter": "bath", "src": "/images/goods/good-17.png", "title": "body oil", "price": 27 },
        { "id": 18, "filter": "bath", "src": "/images/goods/good-18.png", "title": "botanical shampoo", "price": 29 },
        { "id": 19, "filter": "bath", "src": "/images/goods/good-19.png", "title": "bamboo shampoo", "price": 32 },
        { "id": 20, "filter": "antiage", "src": "/images/goods/good-20.png", "title": "energy cream", "price": 28 },
        { "id": 21, "filter": "bath", "src": "/images/goods/good-21.png", "title": "special shampoo", "price": 51 },
        { "id": 22, "filter": "bath", "src": "/images/goods/good-22.png", "title": "body milk", "price": 14 },
        { "id": 23, "filter": "bath", "src": "/images/goods/good-23.png", "title": "surface cleaner", "price": 5 },
        { "id": 24, "filter": "antiage", "src": "/images/goods/good-24.png", "title": "facial tonic", "price": 34 },
        { "id": 25, "filter": "decor", "src": "/images/goods/good-25.png", "title": "cosmetic brush", "price": 3 },
        { "id": 26, "filter": "decor", "src": "/images/goods/good-26.png", "title": "mascara", "price": 15 },
        { "id": 27, "filter": "decor", "src": "/images/goods/good-27.png", "title": "mascara", "price": 21 },
        { "id": 28, "filter": "decor", "src": "/images/goods/good-28.png", "title": "lipstick", "price": 18 },
        { "id": 29, "filter": "antiage", "src": "/images/goods/good-29.png", "title": "mask cream", "price": 47 },
        { "id": 30, "filter": "decor", "src": "/images/goods/good-30.png", "title": "lipstick", "price": 16 },
        { "id": 31, "filter": "antiage", "src": "/images/goods/good-31.png", "title": "anti-wrinkle cream", "price": 56 },
        { "id": 32, "filter": "decor", "src": "/images/goods/good-32.png", "title": "vampire lipstick", "price": 32 },
        { "id": 33, "filter": "antiage", "src": "/images/goods/good-33.png", "title": "face serum", "price": 49 },
        { "id": 34, "filter": "decor", "src": "/images/goods/good-34.png", "title": "tonic", "price": 12 },
        { "id": 35, "filter": "antiage", "src": "/images/goods/good-35.png", "title": "face gel serum", "price": 39 },
        { "id": 36, "filter": "decor", "src": "/images/goods/good-36.png", "title": "gift box", "price": 62 },
        { "id": 37, "filter": "decor", "src": "/images/goods/good-37.png", "title": "moisturizing tonic", "price": 26 },
        { "id": 38, "filter": "decor", "src": "/images/goods/good-38.png", "title": "laque", "price": 8 },
        { "id": 39, "filter": "antiage", "src": "/images/goods/good-39.png", "title": "anti-age cream", "price": 43 }
    ]
})

export const useSocialMedia = () => useState<ISocialMedia[]>('social', () => {
    return [
        { "href": "https://twitter.com", "src": "/images/contacts/twitter.svg", "alt": "twitter" },
        { "href": "https://pinterest.com", "src": "/images/contacts/pinterest.svg", "alt": "pinterest" },
        { "href": "https://facebook.com", "src": "/images/contacts/facebook.svg", "alt": "facebook" },
        { "href": "https://instagram.com", "src": "/images/contacts/instagram.svg", "alt": "instagram" }
    ]
})

export const useAboutInfo = () => useState<IAboutInfo[]>('about-info', () => {
    return [
        { "src": "/images/about/info-1.jpg", "text": "We produce our cosmetic from natural herbal components" },
        { "src": "/images/about/info-2.jpg", "text": "Our products are friendly to all the types of skin" },
        { "src": "/images/about/info-3.jpg", "text": "We recycle used materials including plastics" },
        { "src": "/images/about/info-4.jpg", "text": "There are 500+ reception points for packaging in 30 cities" }
    ]
})

export const useAboutAdvantages = () => useState<IAboutAdvantage[]>('about-advantage', () => {
    return [
        { "src": "/images/about/adv-1.svg", "text": "animal cruelty free", "alt": "animal cruelty free" },
        { "src": "/images/about/adv-2.svg", "text": "plant based", "alt": "plant based" },
        { "src": "/images/about/adv-3.svg", "text": "ready for recycling", "alt": "ready for recycling" },
        { "src": "/images/about/adv-4.svg", "text": "gender neutral", "alt": "gender neutral" }
    ]
})
