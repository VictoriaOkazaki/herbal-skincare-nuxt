export const smoothScrollToSection = (elemId: string) => {
    const elemToScroll = document.getElementById(elemId);

    elemToScroll?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

export const scrollOnTopOfPage = (smooth: boolean = false) => {
    document.querySelector('body')?.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? 'smooth' : 'auto'
    });
}
