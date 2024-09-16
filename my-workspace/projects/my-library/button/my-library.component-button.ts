import { Component } from '@angular/core';

@Component({
  selector: 'lib-my-library-button',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-red-500 text-red p-4 rounded-lg">
  <h1 class="text-xl font-bold">Componente con Tailwind CSS..</h1>
  <p>Este componente usa clases de Tailwind CSS embebidas...</p>
</div>
  `,
  styles: ``
})
export class MyLibraryButtonComponent {

}
