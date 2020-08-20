import './scss/app.scss';
import App from './App';
import smoothscroll from 'smoothscroll-polyfill';

const app = async () => {
    smoothscroll.polyfill();
    document.getElementById('app').appendChild(await App());
    function onScroll() {
        var removeActiveClass = function (elements) {
            for (var i = 0; i < elements.length; ++i) {
                elements[i].classList.remove('active');
            }
        };
        var anchors = document.querySelectorAll('.navbar__links > ul > li > a');
        var previousRefElement = null;
        for (var i = 0; i < anchors.length; ++i) {
            var currentRefElement = document.getElementById(
                anchors[i].getAttribute('href').substring(1)
            );
            var currentRefElementTop =
                currentRefElement.getBoundingClientRect().top - 180;
            if (currentRefElementTop <= 0) {
                previousRefElement = anchors[i];
                if (i == anchors.length - 1) {
                    removeActiveClass(anchors);
                    anchors[i].classList.add('active');
                }
            } else {
                removeActiveClass(anchors);
                previousRefElement.classList.add('active');
                break;
            }
        }
    }
    window.onscroll = onScroll;

    let siteSections = ['home', 'about', 'info', 'portfolio', 'footer'];

    let navlinks = document.querySelectorAll('.navbar__links > ul > li');
    navlinks.forEach(function (link, index) {
        link.firstChild.addEventListener('click', function (e) {
            e.preventDefault();
            // let headerHeight = 80; /* PUT HEADER HEIGHT HERE */
            // let buffer = 40; /* MAY NOT BE NEEDED */

            let headerHeight = 0; /* PUT HEADER HEIGHT HERE */
            let buffer = 0; /* MAY NOT BE NEEDED */

            let element = document.getElementById(siteSections[index]);

            const topOfElement =
                window.pageYOffset +
                element.getBoundingClientRect().top -
                headerHeight -
                buffer;
            window.scroll({ top: topOfElement, behavior: 'smooth' });
        });
    });

    let chain = Promise.resolve();
    function show(e) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                e.classList.add('appear');
                res();
            }, 150);
        });
    }

    const faders = document.querySelectorAll('.fade-in');
    const fadersUp = document.querySelectorAll('.fade-in-up');
    const fadersLeft = document.querySelectorAll('.fade-in-left');
    const fadersRight = document.querySelectorAll('.fade-in-right');

    const appearOptions = {
        threshold: 0,
        rootMargin: '0px 0px 0px 0px',
    };
    const appearOnScroll = new IntersectionObserver(function (
        entries,
        appearOnScroll
    ) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            } else {
                chain = chain.then(() => show(entry.target));
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

    faders.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersUp.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersLeft.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersRight.forEach((fader) => {
        appearOnScroll.observe(fader);
    });
};
// Load app
app();
