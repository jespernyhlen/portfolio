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
            // document
            //     .getElementById(siteSections[index])
            //     .scrollIntoView({ behavior: 'smooth', block: 'center' });
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
};
// Load app
app();
