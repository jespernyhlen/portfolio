import Navbar from './components/Navbar';
import Header from './components/Header';

async function App() {
    const template = document.createElement('template');

    template.innerHTML = `
    <div class="content-wrapper">
      ${Navbar()}
      ${Header()}
    </>
  `;
    // Return a new node from template
    return template.content.cloneNode(true);
}

export default App;
