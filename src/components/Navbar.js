import navLogo from '../images/nav-logo.png';
import { language } from '../constants';

const inEnglish = language === 'english';

const navItems = {
    home: inEnglish ? 'Home' : 'Hem',
    about: inEnglish ? 'About' : 'Om mig',
    info: inEnglish ? 'Background' : 'Bakgrund',
    portfolio: inEnglish ? 'Portfolio' : 'Portfolio',
    footer: inEnglish ? 'Contact' : 'Kontakt',
};

const navLinks = () => {
    let allLinks = [];

    for (var key in navItems) {
        if (navItems.hasOwnProperty(key)) {
            let itemRef = navItems[key];

            allLinks.push(
                `<li><a class="${
                    key === 'home' ? 'active' : ''
                }" href="#${key}">${itemRef}</a></li>`
            );
        }
    }
    return allLinks.join('');
};

const Navbar = () => {
    const template = `
        <nav id="navbar" class="navbar">
          <div class="navbar__desktop">
            <a class="nav__logo__link logo" href="">
              <img class="navbar__logo" src="${navLogo}" alt="Website Logo">
            </a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu navbar__links">
                ${navLinks()}
            </ul>
          </div>
        </nav>
  `;
    return template;
};

export default Navbar;
