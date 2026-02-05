// ============================================================
// Dynamic Web Landing Page - Data to HTML Generation
// ============================================================

// Initialize all sections when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderHero();
    renderServices();
    renderFacilities();
    renderSites();
    renderAdvantages();
    renderFooter();
});

// ============================================================
// HEADER
// ============================================================
function renderHeader() {
    const headerElement = document.querySelector('.header');
    
    headerElement.innerHTML = `
        <div class="header__logo">Easy Camper</div>
        <ul class="header__nav">
            <li><a href="#services" class="header__nav-link">Services</a></li>
            <li><a href="#facilities" class="header__nav-link">Facilities</a></li>
            <li><a href="#sites" class="header__nav-link">Sites</a></li>
            <li><a href="#advantages" class="header__nav-link">Advantages</a></li>
        </ul>
    `;
}

// ============================================================
// HERO SECTION
// ============================================================
function renderHero() {
    const heroElement = document.querySelector('.hero');
    
    heroElement.innerHTML = `
        <div class="hero__content">
            <img src="${hero.icon}" alt="Hero Icon" class="hero__icon">
            <h1 class="hero__headline">${hero.headline}</h1>
            <p class="hero__copy">${hero.copy}</p>
        </div>
        <img src="${hero.image}" alt="Hero Image" class="hero__image">
    `;
}

// ============================================================
// SERVICES SECTION
// ============================================================
function renderServices() {
    const servicesElement = document.querySelector('.services');
    
    const servicesHTML = services.map(service => `
        <div class="service-card">
            <img src="${service.illustration}" alt="${service.headline}" class="service-card__illustration">
            <h3 class="service-card__headline">${service.headline}</h3>
            <p class="service-card__text">${service.text}</p>
            <a href="#" class="service-card__link">${service.linktext}</a>
        </div>
    `).join('');
    
    servicesElement.innerHTML = `<div class="services__container">${servicesHTML}</div>`;
}

// ============================================================
// FACILITIES SECTION
// ============================================================
function renderFacilities() {
    const facilitiesElement = document.querySelector('.facilities');
    
    const facilitiesHTML = facilities.options.map(option => `
        <div class="facility-option">
            <img src="${option.icon}" alt="${option.headline}" class="facility-option__icon">
            <h3 class="facility-option__headline">${option.headline}</h3>
            <p class="facility-option__text">${option.text}</p>
        </div>
    `).join('');
    
    facilitiesElement.innerHTML = `
        <h2 class="facilities__headline">${facilities.headline}</h2>
        <div class="facilities__options">${facilitiesHTML}</div>
    `;
}

// ============================================================
// SITES SECTION
// ============================================================
function renderSites() {
    const sitesElement = document.querySelector('.sites');
    
    const placesHTML = sites.places.map(place => `
        <div class="place-card">
            <img src="${place.img}" alt="${place.name}" class="place-card__image">
            <div class="place-card__content">
                <h3 class="place-card__name">${place.name}</h3>
                <p class="place-card__city">${place.city}</p>
            </div>
        </div>
    `).join('');
    
    sitesElement.innerHTML = `
        <div class="sites__header">
            <h2 class="sites__headline">${sites.headline}</h2>
            <p class="sites__text">${sites.text}</p>
        </div>
        <div class="sites__places">${placesHTML}</div>
    `;
}

// ============================================================
// ADVANTAGES SECTION
// ============================================================
function renderAdvantages() {
    const advantagesElement = document.querySelector('.advantages');
    
    const advantagesHTML = advantages.map(advantage => `
        <div class="advantage-card">
            <img src="${advantage.icon}" alt="${advantage.headline}" class="advantage-card__icon">
            <h3 class="advantage-card__headline">${advantage.headline}</h3>
            <p class="advantage-card__text">${advantage.text}</p>
        </div>
    `).join('');
    
    advantagesElement.innerHTML = `
        <h2 class="advantages__headline">Our Advantages</h2>
        <div class="advantages__container">${advantagesHTML}</div>
    `;
}

// ============================================================
// FOOTER
// ============================================================
function renderFooter() {
    const footerElement = document.querySelector('.footer');
    
    const sectionsHTML = footer.sections.map(section => `
        <div class="footer__section">
            <h4 class="footer__section-title">${section.title}</h4>
            <ul class="footer__section-list">
                ${section.items.map(item => `
                    <li><a href="#" class="footer__section-link">${item}</a></li>
                `).join('')}
            </ul>
        </div>
    `).join('');
    
    const bottomLinksHTML = footer.bottomLinks.map(link => `
        <a href="#" class="footer__bottom-link">${link}</a>
    `).join('');
    
    footerElement.innerHTML = `
        <div class="footer__content">
            <div class="footer__info">
                <div class="footer__logo">${footer.logo}</div>
                <p class="footer__tagline">${footer.tagline}</p>
            </div>
            ${sectionsHTML}
        </div>
        <div class="footer__bottom">
            <p class="footer__copyright">${footer.copyright}</p>
            <div class="footer__bottom-links">${bottomLinksHTML}</div>
        </div>
    `;
}
