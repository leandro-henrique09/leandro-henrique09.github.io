const secoes = document.querySelectorAll('section');

const observer = new IntersectionObserver((elementos) => {
    elementos.forEach((elemento) => {
        if (elemento.isIntersecting) {
            elemento.target.classList.add('opacity-ligado');
        } else {
            elemento.target.classList.remove('opacity-ligado');
        }
    });
});

secoes.forEach((secao) => {
    observer.observe(secao);
});