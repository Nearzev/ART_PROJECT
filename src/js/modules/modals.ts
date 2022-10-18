import {closeModalWindow} from "./closeModal"; 
export const modals = () => {
    let btnPressed = false;
    interface IBindModal {
        triggerSelector: string,
        modalSelector: string,
        closeSelector: string,
        destroy?: boolean
    }
    const bindModal = ({triggerSelector, modalSelector, closeSelector, destroy = false}:IBindModal) =>{
        const triggers  = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector) as HTMLDivElement;
        const close = document.querySelector(closeSelector) as HTMLButtonElement;
        const windows: NodeListOf<HTMLElement> = document.querySelectorAll('[data-modal]');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    trigger.remove();
                }

                windows.forEach(window => {
                    closeModalWindow(window);
                    window.classList.add('animated', 'fadeIn');
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(window => {
                closeModalWindow(window);
            });

            closeModalWindow(modal);
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(window => {
                    closeModalWindow(window);
                });

                closeModalWindow(modal);
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.style.display == 'block') {
                closeModalWindow(modal);
            }
        });
    }  

    const showModalByTime = ((selector: string , time: number) => {
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(modalWindow => {
                if (getComputedStyle(modalWindow).display !== 'none') {
                    display = 'block;'
                }
            });

            if (!display) {
                const modal = document.querySelector(selector) as HTMLDivElement;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }, time);
    });

    const openByScroll = (selector: string) => {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight
                >= document.documentElement.scrollHeight)) {
                    const giftTrigger = document.querySelector(selector) as HTMLElement;
                    giftTrigger.click();
            }
        });
    };
    
    openByScroll('.fixed-gift');
    bindModal({
        triggerSelector: '.button-design', 
        modalSelector: '.popup-design', 
        closeSelector: '.popup-design .popup-close'
    });  
    bindModal({
        triggerSelector: '.button-consultation', 
        modalSelector: '.popup-consultation', 
        closeSelector: '.popup-consultation .popup-close'
    }); 
    bindModal({
        triggerSelector: '.fixed-gift', 
        modalSelector: '.popup-gift', 
        closeSelector: '.popup-gift .popup-close',
        destroy: true
    }); 
    showModalByTime('.popup-consultation', 60000);
};                            

