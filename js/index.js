const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAV SECTION
let navs = document.querySelectorAll("nav a");
for (let i = 0; i < navs.length; i++) { //probably better to do this with forEach, but not sure how.
  navs[i].textContent = siteContent["nav"][`nav-item-${i+1}`];
}

//CTA SECTION
let topHeadline = document.querySelector(".cta-text h1");
topHeadline.textContent = siteContent['cta']['h1'];

let buttonText = document.querySelector('.cta-text button');
buttonText.textContent = siteContent['cta']['button'];

let heroImage = document.querySelector('.cta img');
heroImage.src = siteContent['cta']['img-src'];

//TOP CONTENT SECTION
let topCon = document.querySelectorAll('.top-content .text-content'); //there's gotta be a better way to do this
topCon[0].firstChild.textContent = siteContent['main-content']['features-h4']
topCon[0].lastChild.textContent = siteContent['main-content']['features-content']
topCon[1].firstChild.textContent = siteContent['main-content']['about-h4']
topCon[1].lastChild.textContent = siteContent['main-content']['about-content']

//MIDDLE IMAGE section
document.querySelector('#middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

//BOTTOM CONTENT
let botCon = document.querySelectorAll('.bottom-content .text-content');
botCon[0].firstChild.textContent = siteContent['main-content']['services-h4']
botCon[0].lastChild.textContent = siteContent['main-content']['services-content']
botCon[1].firstChild.textContent = siteContent['main-content']['product-h4']
botCon[1].lastChild.textContent = siteContent['main-content']['product-content']
botCon[2].firstChild.textContent = siteContent['main-content']['vision-h4']
botCon[2].lastChild.textContent = siteContent['main-content']['vision-content']

//CONTACT section
