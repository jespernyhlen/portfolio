import { language } from '../constants';

const sectionInfo = {
    swedish: {
        subTitle: 'Min bakgrund',
        title:
            'Erfarenhet genom <span class="text__highlight"><br>utbildning</span> samt <br>egna projekt.',
        textContent:
            'För att fördjupa mig i branschen tog jag våren 2020 ut min högskoleexamen i programvaruteknik, med inriktning webbprogrammering. Detta efter två års studier på Blekinge Tekniska Högskola. Webbtjänster utvecklades på både klient- och serversidan och innefattade kurser i bland annat HTML, CSS, Python, PHP, JavaScript, databaser, NodeJS, SQL, Docker, testning, Git, öppen källkod och diverse utvecklingsverktyg.',
        textSubContent:
            'Med det ökade intressat har kunskapen utökats och även skapat en erfarenhet med bland annat SASS/LESS, React/React Native, Gatsby, Google AMP, Wordpress och utveckling via headless CMS. Men i tillägg till min nuvarande kunskap ser jag fram emot nya utmaningar och fortsatt utveckling.',
    },
    english: {
        subTitle: 'My background',
        title:
            'Experience through <span class="text__highlight"><br>education</span> and <br>own projects',
        textContent:
            'To immerse myself in the industry, I took my college degree in software engineering in the spring of 2020, with a focus on web programming. This after two years of studies at Blekinge Institute of Technology. Web services were developed on both the client and server side and included courses in HTML, CSS, Python, PHP, JavaScript, databases, NodeJS, SQL, Docker, testing, Git, open source and various development tools.',
        textSubContent:
            'With the increased interest, the knowledge has been expanded and also created an experience with, among others, SASS / LESS, React / React Native, Gatsby, Google AMP, Wordpress and development via headless CMS. But in addition to my current knowledge, I look forward to new challenges and continued development. ',
    },
};

const Info = () => {
    const template = `
    <section id="info" class="container__wrapper">
        <div class="container">
            <div class="row">
                <div class="content__col col__6">
                    <span class="section__subtitle fade-in-left">${sectionInfo[language].subTitle}</span>
                    <h2 class="fade-in-left">${sectionInfo[language].title}</h2>
                    
                </div>
                <div class="text__content col__6 fade-in-right">
                    <p>${sectionInfo[language].textContent}</p>
                    <p>${sectionInfo[language].textSubContent}</p>
                </div>
            </image>
        </div>
        
    </section>
  `;

    return template;
};

export default Info;
