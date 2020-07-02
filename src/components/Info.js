import profileImage from '../images/profileimage.png';

const sectionInfo = {
    subTitle: 'Välkommen till sidan',
    title:
        'Lorem ipsum<span class="text__highlight"><br>dolo sit ame</span> ornare<br>consecte adipiscing.',
    textContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis, lectus ac sollicitudin bibendum non, massa sem volutpat ex, eget iaculis urna arcu sed odio. Donec porta aliquet est eget placerat. Morbi a tincidunt arcu. Pellentesque ut erat hendrerit leo blandit gravida. Phasellus ac augue nunc. Aenean nulla tortor, non condimentum nec.',
    textSubContent:
        'Maecenas commodo posuere egestas. Maecenas placerat justo nunc, sit amet malesuada ex viverra quis. Duis pharetra dolor vitae rhoncus. Vivamus dolor id est porta, ut laoreet eros ultrices. Sed nec ipsum.',
};

const Info = () => {
    const template = `
    <header id="info" class="container__wrapper">
        <div class="container">
            <div class="row">
                <div class="content__col col__6">
                    <span class="section__subtitle">${sectionInfo.subTitle}</span>
                    <h2>${sectionInfo.title}</h2>
                    
                </div>
                <div class="text__content col__6">
                <p>${sectionInfo.textContent}</p>
                <p>${sectionInfo.textSubContent}</p>
                </div>
            </image>
        </div>
        
    </header>
  `;

    return template;
};

export default Info;
