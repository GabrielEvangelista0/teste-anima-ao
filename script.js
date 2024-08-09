// Seleciona o botão com a classe 'btn' e armazena na variável 'btn'
const btn = document.querySelector(".btn");

// Seleciona o elemento com a classe 'cont' e armazena na variável 'cont'
const cont = document.querySelector(".cont");

// Seleciona todos os elementos com a classe 'hidden' e armazena numa NodeList chamada 'hidden'
const hidden = document.querySelectorAll('.hidden');
let i = 0;

// Cria uma instância do IntersectionObserver, que observa a visibilidade dos elementos na viewport
const observer = new IntersectionObserver((entries) => {
    // Itera sobre cada entrada observada
    entries.forEach((entry) => {
        // Verifica se o elemento está na viewport
        if (entry.isIntersecting) {
            // Adiciona a classe 'mostrar' ao elemento que está visível
            entry.target.classList.add('mostrar');
        } else {
            // Remove a classe 'mostrar' do elemento que não está visível
            entry.target.classList.remove('mostrar');
        }
    });
});

// Adiciona um ouvinte de eventos ao botão que incrementa 'i' e altera o conteúdo de 'cont' quando clicado
btn.addEventListener('click', () => {
    i++;
    cont.innerHTML = `${i}`; // Atualiza o conteúdo do elemento 'cont' com o novo valor de 'i'
    // Alterna a classe 'blue' em todos os elementos com a classe 'hidden'
    document.querySelector("body").classList.toggle("blue")
    //hidden.forEach(e => e.classList.toggle('blue'));
    console.log(hidden);
});

// Observa todos os elementos com a classe 'hidden' usando o IntersectionObserver
hidden.forEach((e) => observer.observe(e));
