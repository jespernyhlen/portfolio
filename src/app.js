import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

async function App() {
    const template = document.createElement('template');

    template.innerHTML = `
    <div class="content-wrapper">
      ${Navbar()}
      ${Header()}
      ${About()}
    </>
  `;
    // Return a new node from template
    return template.content.cloneNode(true);
}

export default App;
