import profileImage from '../images/profileimage.png';
import { language } from '../constants';

const sectionInfo = {
    swedish: {
        subTitle: 'Om Jesper Nyhlén',
        title:
            'Intresse av <br> <span class="text__highlight">moderna lösningar </span><br>för webbsidor<br> och applikationer.',
        contentText:
            'Med stor målmedvetenhet och engagemang för problemlösning är mitt stora mål att ständigt utvecklas personligt och givetvis som utvecklare. Mitt fokus ligger på frontend såväl som backend-utveckling vilket resulterar i att jag ser mig själv som en väldigt flexibel utvecklare med en vilja att ständigt söka ny information och utöka min kunskap inom yrket.',
    },
    english: {
        subTitle: 'About Jesper Nyhlén',
        title:
            'Interest in <br> <span class="text__highlight">modern solutions </span><br>for websites and applications.',
        contentText:
            'With great determination and commitment to problem solving, my big goal is to constantly develop personally and of course as a developer. My focus is on frontend as well as backend development, which results in me seeing myself as a very flexible developer with a desire to constantly seek new information and expand my knowledge in the profession. ',
    },
};

const About = () => {
    const template = `
    <section id="about" class="container__wrapper">
        <div class="container">
            <div class="row">
                <div class="content__col col__6">
                    <span class="section__subtitle fade-in-left">${sectionInfo[language].subTitle}</span>
                    <h2 class=" fade-in-left">${sectionInfo[language].title}</h2>
                    <p class=" fade-in-left">${sectionInfo[language].contentText}</p>
                </div>
                <div class="image__col col__6 fade-in-right">
                    <img class="profile__image" src="${profileImage}" alt="Profilbild">
                </div>
            </image>
        </div>
        <div class="background__split">
        </div>
    </section>
  `;

    return template;
};

export default About;
