const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = 'https://drive.google.com/file/d/1dMdqVqaQmouYGDZHc9gp__vSWTb-De7y/view?usp=sharing';
        a.download = 'Teramia-pre-alpha.apk';
        a.click();
    })
});