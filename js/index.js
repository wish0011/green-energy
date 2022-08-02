// references
let buttons = document.querySelectorAll('.controls button');
let dc = document.querySelector('.dynamic-content');

// resources
let stock = {
    c1: {
        headingContent: 'Solar Panels',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi. Laoreet suspendisse interdum consectetur libero. Et malesuada fames ac turpis egestas sed tempus urna et.',
        imageSrc: './img/solar-panels.jpg',
        imageAlt: 'Photo of solar panels'
        },
    c2: {
        headingContent: 'Wind Turbines',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi. Laoreet suspendisse interdum consectetur libero. Et malesuada fames ac turpis egestas sed tempus urna et.',
        imageSrc: './img/wind-turbine.jpg',
        imageAlt: 'Photo of wind turbines'
    },
    c3: {
        headingContent: 'Hydroelectric Power',
        bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet commodo nulla facilisi. Laoreet suspendisse interdum consectetur libero. Et malesuada fames ac turpis egestas sed tempus urna et.',
        imageSrc: './img/hydro-electric.jpg',
        imageAlt: 'Photo of hydroelectric dam'
    },
}



// Load your images on page-load
function preloader() {
    const imagesList = [
        "./img/solar-panels.jpg",
        "./img/wind-turbine.jpg",
        "./img/hydro-electric.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    

window.addEventListener("load", preloader);

dc.innerHTML = `<h1>${stock.c1.headingContent}</h1> <img src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}"> <p>${stock.c1.bodyText}</p>`;



function displayContent(ev) {
    let currentBtn = ev.target;
    // console.log(currentBtn.textContent);
    if (currentBtn.textContent === 'SOLAR') {
        dc.innerHTML = `<h1>${stock.c1.headingContent}</h1> <img src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}"> <p>${stock.c1.bodyText}</p>`;
    } else if (currentBtn.textContent === 'WIND') {
        dc.innerHTML = `<h1>${stock.c2.headingContent}</h1> <img src="${stock.c2.imageSrc}" alt="${stock.c2.imageAlt}"> <p>${stock.c2.bodyText}</p>`;
    } else {
        dc.innerHTML = `<h1>${stock.c3.headingContent}</h1> <img src="${stock.c3.imageSrc}" alt="${stock.c3.imageAlt}"> <p>${stock.c3.bodyText}</p>`;
    }
};


for (let button of buttons) {
    button.addEventListener('click', displayContent);
};



