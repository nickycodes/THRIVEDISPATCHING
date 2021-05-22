/*Selectors*/
let dropDownButton = document.querySelector('#dropdown-button');
let dropDownMenu = document.querySelector(".dropdown");
let dropDownContent = document.querySelector(".dropdown-content");
let hamburgerButton = document.querySelector("#hamburger-button");
let englishButton = document.querySelector(".english-button");

/*Language Sections */
let firstHeader = document.querySelector('#first-header');
let firstParagraph = document.querySelector('#first-paragraph');
let secondHeader = document.querySelector('#second-header');
let secondParagraph = document.querySelector("#second-paragraph");
let thirdHeader = document.querySelector("#third-header");
let thirdParagraph = document.querySelector("#third-paragraph");
let fourthHeader = document.querySelector('#fourth-header');

let monday = document.querySelector("#monday");
let tuesday = document.querySelector("#tuesday");
let wednesday = document.querySelector("#wednesday");
let thursday = document.querySelector("#thursday");
let friday = document.querySelector("#friday");
let saturday = document.querySelector("#saturday");
let sunday = document.querySelector("#sunday");

let aboutMain = document.querySelector('#aboutMain');
let servicesMain = document.querySelector('#servicesMain');
let goalsMain = document.querySelector('#goalsMain');
let hoursMain = document.querySelector('#hoursMain');
let contactMain = document.querySelector('#contactMain');
let subscribeMain = document.querySelector('#subscribeMain');
let englishMain = document.querySelector('#englishMain');

let servicesHamburger = document.querySelector('#servicesHamburger');
let goalsHamburger = document.querySelector('#goalsHamburger');
let hoursHamburger = document.querySelector('#hoursHamburger');
let contactHamburger = document.querySelector('#contactHamburger');
let englishHamburger = document.querySelector('#englishHamburger');
let subscribeHamburger = document.querySelector('#subscribeHamburger');

let contactHeader = document.querySelector('.contact-header');



const translations = {
    "menuItems": ["Sobre Nosotros", "Contacto", "Suscribete", "Ingles","Horas de operacion"],
    "headers": ["Tipos de cargas", "Nuestras metas", "Hablamos tu idioma", ],
    "paragraphs": ["Nos apasiona ayudar a nuestros clientes crecer el negocio que han construido. Permítanos ayudarte a navegar el mundo de la logística con confianza.", "En Thrive hacemos todo lo posible para ayudarte a encontrar las cargas que necesitas. Ofrecemos asistencia encontrando cargas para: Hotshots, Power- Only,  Carhaulers, Dry Vans y Reefers.",
    "Estamos en una industria diversa y reconocemos la imporancia de poder brindar servicio en diferentes idiomas. Por eso nuestro equipo cuenta con hablantes de Inglés y Español que estan listos para ayudar que tu negocio prospere."],
    "hours": ["Lunes - 9:00 am - 5:00pm", "Martes - 9:00 am - 5:00pm", "Miercoles - 9:00 am - 5:00pm", "Jueves  - 9:00 am - 5:00pm", "Viernes - 9:00 am - 5:00pm", "Sabado - 9:00 am - 5:00pm", "Domingo - 9:00 am - 5:00pm"],
    "contact": "Comunicate con nosotros",
}


/*Event Handlers*/
dropDownButton.addEventListener('click', function openMenu(){
    dropDownContent.classList.toggle('dropdown-open');
});

hamburgerButton.addEventListener('click', function openHamburger() {
    let hamburgerContainer = document.querySelector('.hamburger-container');
    hamburgerContainer.classList.toggle('hamburger-container-open');
});

document.querySelectorAll('.spanish-button').forEach(item => {item.addEventListener('click', function translate() {
    firstHeader.innerHTML = translations["headers"][0];
    firstParagraph.innerHTML = translations["paragraphs"][1];
    secondHeader.innerHTML = translations["headers"][1];
    secondParagraph.innerHTML = translations["paragraphs"][0];
    thirdHeader.innerHTML = translations["headers"][2];
    thirdParagraph.innerHTML = translations["paragraphs"][2];
    
    monday.innerHTML = translations["hours"][0];
    tuesday.innerHTML = translations["hours"][1];
    wednesday.innerHTML = translations["hours"][2];
    thursday.innerHTML = translations["hours"][3];
    friday.innerHTML = translations["hours"][4];
    saturday.innerHTML = translations["hours"][5];
    sunday.innerHTML = translations["hours"][6];

    aboutMain.innerHTML = translations["menuItems"][0];
    servicesMain.innerHTML = "Servicitos";
    goalsMain.innerHTML = 'Metas';
    contactMain.innerHTML = translations["menuItems"][1];
    subscribeMain.innerHTML = translations["menuItems"][2];
    englishMain.innerHTML = translations["menuItems"][3];
    hoursMain.innerHTML = translations["menuItems"][4];
    
    servicesHamburger.innerHTML = "Servicitos";
    hoursHamburger.innerHTML = translations["menuItems"][4];
    goalsHamburger.innerHTML = 'Metas';
    contactHamburger.innerHTML = translations["menuItems"][1];
    subscribeHamburger.innerHTML = translations["menuItems"][2];
    englishHamburger.innerHTML = translations["menuItems"][3];

    contactHeader.innerHTML = translations["contact"];


});})

document.querySelectorAll('.english-button').forEach(item => {item.addEventListener('click', function refresh() {
    location.reload()
    return false;
});})

