import portfolioImg1 from '../images/portfolio-marene-small.png';
import portfolioImg2 from '../images/portfolio-movies1-small.png';

const projects = {
    header: {
        subTitle: 'Portfolio',
        title: 'Publicerade <span class="text__highlight">webbplatser</span>.',
    },
    marene: {
        subTitle: 'Projekt',
        title: 'B & B - Villa Marene',
        textContent:
            'Webbplats under uppbyggnad för uthyrning av rum till deras bed & breakfast villa. Uppbyggd för att underhållas genom Contentful headless CMS. Webbutveckling, UX/design och drift.',
        websiteLink: 'https://vigorous-wright-19f5cd.netlify.app/',
        githubLink: 'https://github.com/jespernyhlen/villamarene-v1',
    },
    moviesnow: {
        subTitle: 'Projekt',
        title: 'Movies Now',
        textContent:
            'Webbplats för att enkelt finna information om existerande och kommande filmer. Byggd med React och kommunicerar genom Axios med The Movie Database API (TMDb). Webbutveckling, UX/design och drift.',
        websiteLink: 'https://movies-now.jespernyhlenjs.me/',
        githubLink: 'https://github.com/jespernyhlen/MoviesNow',
    },
};

const Portfolio = () => {
    const template = `
    <section id="portfolio" class="container__wrapper">
        <div class="container">
            <div class="row center__text">
                <div class="content__col center__margin fade-in">
                    <span class="section__subtitle">${projects.header.subTitle}</span>
                    <h2 class="no__border">${projects.header.title}</h2>
                </div>
            </div>
            <div class="row center__text">
                <div class="portfolio__item col__6 fade-in-up">
                    <div class="image__container">
                        <div class="image__container__inner">
                            <img class="portfolio__image" src="${portfolioImg1}" alt="Portfolio projekt första">
                        </div>
                        <div class="portfolio__content">
                            <span class="section__subtitle">${projects.marene.subTitle}</span>
                            <h3>${projects.marene.title}</h3>
                            <div class="category__tag__wrapper">
                                <span>Gatsby</span><span>Contentful</span><span>GraphQL</span><span>JavaScript</span><span>CSS</span>
                            </div>
                            <p>${projects.marene.textContent}</p>
                            <div class="portfolio__btn__container">
                                <a href="${projects.marene.websiteLink}" aria-label="website ${projects.marene.title}" rel="noopener noreferrer" target="_blank" class="portfolio__btn">Visa Webbplats <span>&#8594;</span></a>
                           </div>
                        </div>
                    </div>
                </div>
                <div class="portfolio__item col__6 fade-in-up">
                    <div class="image__container">
                        <div class="image__container__inner">
                            <img class="portfolio__image" src="${portfolioImg2}" alt="Portfolio projekt första">
                        </div>
                        <div class="portfolio__content">
                            <span class="section__subtitle">${projects.moviesnow.subTitle}</span>
                            <h3>${projects.moviesnow.title}</h3>
                            <div class="category__tag__wrapper">
                                <span>React</span><span>Axios</span><span>API</span><span>JavaScript</span><span>CSS</span>
                            </div>
                            <p>${projects.moviesnow.textContent}</p>
                            <div class="portfolio__btn__container">
                                <a href="${projects.moviesnow.websiteLink}" aria-label="website ${projects.moviesnow.title}" rel="noopener noreferrer" target="_blank" class="portfolio__btn">Visa Webbplats <span>&#8594;</span></a>
                                <a href="${projects.moviesnow.githubLink}" aria-label="github ${projects.moviesnow.title}" rel="noopener noreferrer" target="_blank" class="portfolio__btn">Visa Github <span>&#8594;</span></a>
                           </div>
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

{
    /* <div class="portfolio__overlay">
    <h3>${projects.marene.title}</h3>
    <div class="portfolio__btn__container">
        <a href="${projects.marene.websiteLink}" rel="noopener noreferrer" target="_blank" class="portfolio__btn">Visa Webbplats</a>
    </div>
</div>
  <div class="portfolio__overlay">
  <h3>${projects.moviesnow.title}</h3>
  <div class="portfolio__btn__container">
      <a href="${projects.moviesnow.websiteLink}" rel="noopener noreferrer" target="_blank" class="portfolio__btn">Visa Webbplats</a>
  </div>
</div> */
}
