const headerInfo = {
    title: '<span class="text__darkgrey">Jesper</span> Nyhlén',
    subTitle: 'Webbutvecklare',
};

const Header = () => {
    const template = `
    <header id="home" class="container__wrapper bg__image">
        <div class="container fade-in-up">
          <div class="header__title__wrapper">
            <div class="header__title__container">
              <h1 class="header__title">
                ${headerInfo.title}
              </h1>
            </div>
          </div>
          <div class="header__sub__title__wrapper">
            <div class="header__sub__title__container">
              <h5 class="header__sub__title">
                ${headerInfo.subTitle}
              </h5>
            </div>
          </div>
        </div>
    </header>
  `;

    return template;
};

export default Header;
