window.addEventListener('DOMContentLoaded', () => {
    aboutMe.classList.remove('inactive')
    experience.classList.remove('inactive')
    education.classList.remove('inactive')
    contact.classList.remove('inactive')
})

window.addEventListener('DOMContentLoaded', () => {
    if (mql2.matches) {
        aboutMe.classList.remove('inactive')
        experience.classList.add('inactive')
        education.classList.add('inactive')
        contact.classList.add('inactive')
    }
})


mql.addEventListener('change', () => {
    if (mql.matches) {
        aboutMe.classList.remove('inactive')
        experience.classList.remove('inactive')
        education.classList.remove('inactive')
        contact.classList.remove('inactive')
    }
})

mql2.addEventListener('change', () => {
    if (mql2.matches) {
        aboutMe.classList.remove('inactive')
        experience.classList.add('inactive')
        education.classList.add('inactive')
        contact.classList.add('inactive')
    }
})

btnAbout.addEventListener('click', () => {
    aboutMe.classList.remove('inactive')
    experience.classList.add('inactive')
    education.classList.add('inactive')
    contact.classList.add('inactive')

})

btnExperience.addEventListener('click', () => {
    aboutMe.classList.add('inactive')
    experience.classList.remove('inactive')
    education.classList.add('inactive')
    contact.classList.add('inactive')


})

btnEducation.addEventListener('click', () => {
    aboutMe.classList.add('inactive')
    experience.classList.add('inactive')
    education.classList.remove('inactive')
    contact.classList.add('inactive')

})

btnContact.addEventListener('click', () => {
    aboutMe.classList.add('inactive')
    experience.classList.add('inactive')
    education.classList.add('inactive')
    contact.classList.remove('inactive')

})



