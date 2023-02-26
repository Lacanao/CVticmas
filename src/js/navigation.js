

aboutMe.addEventListener('click', () => {
    seccion1.classList.remove('inactive')

    seccion2.classList.add('inactive')
    seccion3.classList.add('inactive')
    seccion4.classList.add('inactive')
    aboutMe.setAttribute('style', 'color: #f2f2f2;')
    colorItem.setAttribute('style', 'background-color: #89b3d9;')
})

experience.addEventListener('click', () => {
    seccion1.classList.add('inactive')
    seccion2.classList.remove('inactive')
    seccion3.classList.add('inactive')
    seccion4.classList.add('inactive')
    aboutMe.setAttribute('style', 'color: #03178c;')
    colorItem.setAttribute('style', 'background-color: #f2f2f2;')

})

education.addEventListener('click', () => {
    seccion1.classList.add('inactive')
    seccion2.classList.add('inactive')
    seccion3.classList.remove('inactive')
    seccion4.classList.add('inactive')
    aboutMe.setAttribute('style', 'color: #03178c;')
    colorItem.setAttribute('style', 'background-color: #f2f2f2;')
})

contact.addEventListener('click', () => {
    seccion1.classList.add('inactive')
    seccion2.classList.add('inactive')
    seccion3.classList.add('inactive')
    seccion4.classList.remove('inactive')
    aboutMe.setAttribute('style', 'color: #03178c;')
    colorItem.setAttribute('style', 'background-color: #f2f2f2;')

})


