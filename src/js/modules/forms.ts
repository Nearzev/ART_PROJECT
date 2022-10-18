// import {checkNumInputs} from './checkNumInputs';
import { closeModalWindow } from './closeModal';
export const forms = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const uploads: NodeListOf<HTMLFormElement> = document.querySelectorAll('[name="upload"]');


    // checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так',
        spinner: '../../assets/img/spinner.gif',
        ok: '../../assets/img/ok.png',
        fail: '../../assets/img/fail.png'
    };

    const path = {
        designer: '../../assets/server.php',
        question: '../../assets/question.php'
    }

    const postData = async (url: string, data: BodyInit) => {
        const res = await fetch(url, {
            method: "POST",
            body: data,
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(imput => {
            imput.value = '';
        });
        uploads.forEach(upload => {
            const uploadPrevElement: any = upload.previousElementSibling;
            uploadPrevElement.textContent = "Файл не выбран";
        })
    };

    uploads.forEach(upload => {
        upload.addEventListener('input', () => {
        const uploadPrevElement: any  = upload.previousElementSibling;
        const FileName = upload.files[0].name.split('.');
        const dots = FileName[0].length > 6 ? "..." : ".";
        const newFileName = `${FileName[0].substring(0, 6)}  ${dots} + ${FileName[1]}`;
        uploadPrevElement.textContent(newFileName);
        });
    });

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            const formParent = form.parentNode as HTMLElement;

            statusMessage.classList.add('status');
            formParent.appendChild(statusMessage);

            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                closeModalWindow(form);
            }, 5000);// import {checkNumInputs} from './checkNumInputs';
import { closeModalWindow } from './closeModal';
export const forms = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const uploads: NodeListOf<HTMLFormElement> = document.querySelectorAll('[name="upload"]');


    // checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так',
        spinner: '../../assets/img/spinner.gif',
        ok: '../../assets/img/ok.png',
        fail: '../../assets/img/fail.png'
    };

    const path = {
        designer: '../../assets/server.php',
        question: '../../assets/question.php'
    }

    const postData = async (url: string, data: BodyInit) => {
        const res = await fetch(url, {
            method: "POST",
            body: data,
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(imput => {
            imput.value = '';
        });
        uploads.forEach(upload => {
            const uploadPrevElement: any = upload.previousElementSibling;
            uploadPrevElement.textContent = "Файл не выбран";
        })
    };

    uploads.forEach(upload => {
        upload.addEventListener('input', () => {
        const uploadPrevElement: any  = upload.previousElementSibling;
        const FileName = upload.files[0].name.split('.');
        const dots = FileName[0].length > 6 ? "..." : ".";
        const newFileName = `${FileName[0].substring(0, 6)}  ${dots} + ${FileName[1]}`;
        uploadPrevElement.textContent(newFileName);
        });
    });

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            const formParent = form.parentNode as HTMLElement;

            statusMessage.classList.add('status');
            formParent.appendChild(statusMessage);

            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                closeModalWindow(form);
            }, 5000);

            const statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            const textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(form);
            const api =   form.closest('.popup-design') || form.classList.contains('calc__form') ? path.designer : path.question;

            postData(api, formData)
                .then(() => {
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
                        }, 5000);
                    });
            });
        });
};


            const statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            const textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(form);
            const api =   form.closest('.popup-design') || form.classList.contains('calc__form') ? path.designer : path.question;

            postData(api, formData)
                .then(() => {
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
                        }, 5000);
                    });
            });
        });
};
