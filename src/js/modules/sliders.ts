interface ISliders {
    slidesSelector: string,
    pos: string,
    prev: string,
    next: string,
}
export const sliders = ({slidesSelector, pos, prev, next}: ISliders) => {
    let slideIndex = 1;
    const slides: NodeListOf<HTMLElement> = document.querySelectorAll(slidesSelector);
    let paused = 0;

    const showSlides = (n: number) => {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((slide) => {
            slide.classList.add('animated');
            slide.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = 'block';
    };

    showSlides(slideIndex);

    const changeSlides = (n: number) => {
        showSlides(slideIndex = slideIndex + n);
    }

    try{
        const prevButton = document.querySelector(prev) as HTMLElement;
        const nextButton = document.querySelector(next) as HTMLElement;

        prevButton.addEventListener('click', () => {
            changeSlides(-1);
            slides[slideIndex - 1].classList.remove('slideInRight');
            slides[slideIndex - 1].classList.add('slideInLeft');
        });

        nextButton.addEventListener('click', () => {
            changeSlides(1);
            slides[slideIndex - 1].classList.remove('slideInLeft');
            slides[slideIndex - 1].classList.add('slideInRight');
        });
    } catch (err) {

    }

    const activateAnimation = () => {
        if (pos === 'vertical' ) {
            paused = setInterval(() => {
                changeSlides(1)
                slides[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(() => {
                changeSlides(1)
            }, 3000);
        }
    } 
    
    activateAnimation();

    const slidesParent = slides[0].parentNode as HTMLElement;
    slidesParent.addEventListener('mouseenter', () => {
        clearInterval(paused);
    }) 

    slidesParent.addEventListener('mouseleave', () => {
        activateAnimation();
    })
};