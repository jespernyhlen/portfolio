import navLogo from '../images/nav-logo.png';

const Navbar = () => {
    const template = `
    <nav class="navbar">
        <div class="navbar__desktop">
            <a class="nav__logo__link">
                <img class="navbar__logo" src="${navLogo}" alt="Sidans logo">
            </a>
            <div class="navbar__links">
                <ul>
                    <li><a class="active" href="#home">Hem</a></li>
                    <li><a href="#about">Om mig</a></li>
                    <li><a href="#info">Bakgrund</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#footer">Kontakt</a></li>
                </ul>
            </div>
        </div>
        <div class="navbar__mobile"></div>
    </nav>
  `;

    return template;
};

export default Navbar;
