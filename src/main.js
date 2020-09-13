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
        var anchors = document.querySelectorAll('.navbar__links > li > a');

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
                if (!previousRefElement.classList.contains('active')) {
                    removeActiveClass(anchors);
                    previousRefElement.classList.add('active');
                }

                break;
            }
        }
    }
    window.onscroll = onScroll;

    window.addEventListener('scroll', () => {
        let position = window.scrollY;
        var navbar = document.getElementById('navbar');

        if (position >= 40) {
            navbar.classList.add('scrolled__navbar');
        } else {
            navbar.classList.remove('scrolled__navbar');
        }
    });

    let siteSections = ['home', 'about', 'info', 'portfolio', 'footer'];

    let navlinks = document.querySelectorAll('.navbar__links > li');
    navlinks.forEach(function (link, index) {
        link.firstChild.addEventListener('click', function (e) {
            e.preventDefault();
            // let headerHeight = 80; /* PUT HEADER HEIGHT HERE */
            // let buffer = 40; /* MAY NOT BE NEEDED */

            let headerHeight = 80; /* PUT HEADER HEIGHT HERE */
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
    const fadersDown = document.querySelectorAll('.fade-in-down');
    const fadersLeft = document.querySelectorAll('.fade-in-left');
    const fadersRight = document.querySelectorAll('.fade-in-right');
    const fadersLeftReveal = document.querySelectorAll('.fade-in-left-reveal');
    const fadersRightReveal = document.querySelectorAll(
        '.fade-in-right-reveal'
    );

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

    fadersDown.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersLeft.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersRight.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersLeftReveal.forEach((fader) => {
        appearOnScroll.observe(fader);
    });

    fadersRightReveal.forEach((fader) => {
        appearOnScroll.observe(fader);
    });
};
// Load app
app();
