// Componente 1: Botón interactivo
class MyButton extends HTMLElement {
    connectedCallback() {
      this.innerHTML = '<button id="myButton">Haz clic</button>';
      this.querySelector('#myButton').addEventListener('click', () => {
        const customEvent = new CustomEvent('mi-evento', { detail: { nuevosDatos: 'Información actualizada' } });
        document.dispatchEvent(customEvent); // Despachar evento al documento
      });
    }
  }
  
  customElements.define('my-button', MyButton);
  
  // Componente 2: Mostrar información
  class InfoDisplay extends HTMLElement {
    connectedCallback() {
      this.innerHTML = '<div id="info"></div>';
      document.addEventListener('mi-evento', (event) => {
        console.log('Mensaje:', event.detail.nuevosDatos);
        this.querySelector('#info').textContent = 'Bienvenido: ' + event.detail.nuevosDatos;
      });
    }
  }
  
  customElements.define('info-display', InfoDisplay);
  