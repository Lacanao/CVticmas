// Document
const d = document;

// Botones

const btnAbout = d.querySelector('.btnAbout')
const btnExperience = d.querySelector('.btnExperience')
const btnEducation = d.querySelector('.btnEducation')
const btnContact = d.querySelector('.btnContact')

//Secciones

const aboutMe = d.querySelector('.containerAboutMe')
const experience = d.querySelector('.containerExperience')
const education = d.querySelector('.containerEducation')
const contact = d.querySelector('.containerContact')

//Enlaces

const mail = d.querySelector('.sendMail')
const wsp = d.querySelector('.sendWsp')

//MediaQuery

const mql = window.matchMedia('(min-width: 1024px)');
const mql2 = window.matchMedia('(max-width: 1024px)');