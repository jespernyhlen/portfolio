import Navbar from './components/Navbar';

async function App() {
    const template = document.createElement('template');

    template.innerHTML = `
    <div class="content-wrapper">
      ${Navbar()}
    </>
  `;
    // Return a new node from template
    return template.content.cloneNode(true);
}

export default App;
