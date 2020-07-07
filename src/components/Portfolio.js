import portfolioImg1 from '../images/portfolio-movies.png';
import portfolioImg2 from '../images/portfolio-cafe.png';
import portfolioImg3 from '../images/portfolio-phone.png';

const sectionInfo = {
    subTitle: 'Portfolio',
    title: 'Exempel på tidigare <span class="text__highlight">projekt</span>.',
    textContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis, lectus ac sollicitudin bibendum non, massa sem volutpat ex, eget iaculis urna arcu sed odio. Donec porta aliquet est eget placerat. Morbi a tincidunt arcu. Pellentesque ut erat hendrerit leo blandit gravida. Phasellus ac augue nunc. Aenean nulla tortor, non condimentum nec.',
    textSubContent:
        'Maecenas commodo posuere egestas. Maecenas placerat justo nunc, sit amet malesuada ex viverra quis. Duis pharetra dolor vitae rhoncus. Vivamus dolor id est porta, ut laoreet eros ultrices. Sed nec ipsum.',
};

const Portfolio = () => {
    const template = `
    <section id="portfolio" class="container__wrapper">
        <div class="container">
            <div class="row center__text">
                <div class="content__col center__margin fade-in">
                    <span class="section__subtitle">${sectionInfo.subTitle}</span>
                    <h2 class="no__border">${sectionInfo.title}</h2>
                </div>
            </div>
            <div class="row center__text">
                <div class="portfolio__item col__4 fade-in-up">
                    <img class="portfolio__image" src="${portfolioImg1}">
                    <div class="portfolio__content">
                        <span class="section__subtitle">${sectionInfo.subTitle}</span>
                        <h3>${sectionInfo.title}</h3>
                        <div class="category__tag__wrapper">
                            <span class="category__tag">JavaScript</span><span class="category__tag">HTML</span><span class="category__tag">CSS</span>
                        </div>
                        <p>Maecenas commodo posuere egestas. Maecenas placerat justo nunc, sit amet malesuada ex viverra quis. Duis pharetra dolor vitae rhoncus. Vivamus dolor id est porta, ut laoreet eros ultrices. Sed nec ipsum.</p>
                    </div>
                   
                </div>
                <div class="portfolio__item col__4 fade-in">
                    <img class="portfolio__image" src="${portfolioImg2}">
                    <div class="portfolio__content">
                        <span class="section__subtitle">${sectionInfo.subTitle}</span>
                        <h3>${sectionInfo.title}</h3> 
                        <div class="category__tag__wrapper">
                            <span class="category__tag">JavaScript</span><span class="category__tag">HTML</span><span class="category__tag">CSS</span>
                        </div>
                        <p>Maecenas commodo posuere egestas. Maecenas placerat justo nunc, sit amet malesuada ex viverra quis. Duis pharetra dolor vitae rhoncus. Vivamus dolor id est porta, ut laoreet eros ultrices. Sed nec ipsum.</p>
                    </div>
                </div>
                <div class="portfolio__item col__4 fade-in-up">
                    <img class="portfolio__image" src="${portfolioImg3}">
                    <div class="portfolio__content">
                        <span class="section__subtitle">${sectionInfo.subTitle}</span>
                        <h3>${sectionInfo.title}</h3> 
                        <div class="category__tag__wrapper">
                            <span class="category__tag">JavaScript</span><span class="category__tag">HTML</span><span class="category__tag">CSS</span>
                        </div>
                        <p>Maecenas commodo posuere egestas. Maecenas placerat justo nunc, sit amet malesuada ex viverra quis. Duis pharetra dolor vitae rhoncus. Vivamus dolor id est porta, ut laoreet eros ultrices. Sed nec ipsum.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  `;

    return template;
};

export default Portfolio;
