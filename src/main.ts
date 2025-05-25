import './style.css'
import { charmander, charizard } from './bases/03-classes';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>
      Oi ${charmander.name}
    </h1>
    <img src="${charmander.imageUrl}">
  </div>

  <div>
    <h1>
      Oi ${charizard.name}
    </h1>
    <img src="${charizard.imageUrl}">
  </div>
`