const btn = document.querySelector(".btn")
const cont = document.querySelector(".cont")
const hidden = document.querySelectorAll('.hidden')
let i = 0


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar')

        } else {
            entry.target.classList.remove('mostrar')
        }
    })
})



btn.addEventListener('click', () => {
    i++
    cont.innerHTML = `${i}`
    hidden.forEach(e => e.classList.toggle('blue'))
    console.log(hidden)
    
})


hidden.forEach((e) => observer.observe(e))