import profileImage from '../images/profileimage.png';

const sectionInfo = {
    subTitle: 'Selected Works',
    title:
        '<span class="text__highlight">Check out</span> the<br>latest projects<br>we completed',
    contentText:
        'Our team works on a wide variety of web design & development projects every day. We deliver quality solutions for your websites that are based on our boundless creativity and your needs.',
};

const About = () => {
    const template = `
    <header id="about" class="container__wrapper">
        <div class="container">
            <div class="row">
                <div class="content__col col__6">
                    <span class="section__subtitle">${sectionInfo.subTitle}</span>
                    <h2>${sectionInfo.title}</h2>
                    <p>${sectionInfo.contentText}</p>
                </div>
                <div class="image__col col__6">
                    <img class="profile__image" src="${profileImage}">
                </div>
            </image>
        </div>
        <div class="background__split">
        </div>
    </header>
  `;

    return template;
};

export default About;
