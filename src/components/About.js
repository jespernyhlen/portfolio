import profileImage from '../images/profileimage.png';

const sectionInfo = {
    subTitle: 'Om jesper Nyhlén',
    title:
        'Intresse av <br> <span class="text__highlight">moderna lösningar </span><br>för webbsidor<br> och applikationer.',
    contentText:
        'Med stor målmedvetenhet och engagemang för problemlösning är mitt stora mål att ständigt utvecklas personligt och givetvis som utvecklare. Mitt fokus ligger på frontend såväl som backend-utveckling vilket resulterar i att jag ser mig själv som en väldigt flexibel utvecklare med en vilja att ständigt söka ny information och utöka min kunskap inom yrket.',
};

const About = () => {
    const template = `
    <section id="about" class="container__wrapper">
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
    </section>
  `;

    return template;
};

export default About;
