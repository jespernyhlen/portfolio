const sectionInfo = {
    subTitle: 'Min bakgrund',
    title:
        'Erfarenhet genom <span class="text__highlight"><br>utbildning</span> samt <br>egna projekt.',
    textContent:
        'För att fördjupa mig i branschen tog jag våren 2020 ut min högskoleexamen i programvaruteknik, med inriktning webbprogrammering. Detta efter två års studier på Blekinge Tekniska Högskola. Webbtjänster utvecklades på både klient- och serversidan och innefattade kurser i bland annat HTML, CSS, Python, PHP, JavaScript, databaser, NodeJS, SQL, Docker, testning, Git, öppen källkod och diverse utvecklingsverktyg.',
    textSubContent:
        'Med det ökade intressat har kunskapen utökats och även skapat en erfarenhet med bland annat SASS/LESS, React/React Native, Gatsby, Google AMP, Wordpress och utveckling via headless CMS. Men i tillägg till min nuvarande kunskap ser jag fram emot nya utmaningar och fortsatt utveckling.',
};

const Info = () => {
    const template = `
    <section id="info" class="container__wrapper">
        <div class="container">
            <div class="row">
                <div class="content__col col__6">
                    <span class="section__subtitle fade-in-left">${sectionInfo.subTitle}</span>
                    <h2 class="fade-in-left">${sectionInfo.title}</h2>
                    
                </div>
                <div class="text__content col__6 fade-in-right">
                    <p>${sectionInfo.textContent}</p>
                    <p>${sectionInfo.textSubContent}</p>
                </div>
            </image>
        </div>
        
    </section>
  `;

    return template;
};

export default Info;

