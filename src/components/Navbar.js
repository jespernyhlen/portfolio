import navLogo from '../images/nav-logo.png';

const Navbar = () => {
    const template = `
    <nav class="navbar">
        <div class="navbar__desktop">
            <a class="nav__logo__link">
                <img class="navbar__logo" src="${navLogo}">
            </a>
            <div class="navbar__links">
                <ul>
                    <li><a class="active" href="#example">Nav1</a></li>
                    <li><a href="#example2">Nav2</a></li>
                    <li><a href="#example3">Nav3</a></li>
                    <li><a href="#example4">Nav4</a></li>
                    <li><a href="#example5">Nav5</a></li>
                </ul>
            </div>
        </div>
        <div class="navbar__mobile"></div>
    </nav>
  `;

    return template;
};

export default Navbar;
