let active = document.querySelector('ul');
let btn1 = document.querySelector('#nav-btn')
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
let e = document.querySelector('#e')
let usa = document.querySelector('#usa')
let uzb = document.querySelector('#uzb')
btn1.addEventListener('click', () => {
    active.classList.toggle('active')
})
let btn = document.getElementById('sun')
btn.addEventListener('click', () => {
    let mood = document.getElementById('mood');
    btn.classList.toggle('fa-moon')
    if (btn.classList.toggle("fa-sun")) {
        mood.href = './style.css';
    }
    else {
        mood.href = './white.css'
    }
});

a.addEventListener('click', () => {
    active.classList.toggle('active')
})
b.addEventListener('click', () => {
    active.classList.toggle('active')
})
c.addEventListener('click', () => {
    active.classList.toggle('active')
})
d.addEventListener('click', () => {
    active.classList.toggle('active')
})
e.addEventListener('click', () => {
    active.classList.toggle('active')
})
uzb.addEventListener("click", () => {
    window.location.href = "Uzbek.html"
})
usa.addEventListener("click", () => {
    window.location.href = "index.html"
})
let text = document.querySelector(".sec-text")
let textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web developer"
    }, 0)
    setTimeout(() => {
        text.textContent = "Student"
    }, 4000)
    setTimeout(() => {
        text.textContent = "Blogger"
    }, 8000)
}
textLoad();
setInterval(textLoad, 12000)