import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems = [
    {label: 'Pagina Inicial', link: '/home'},
    {label: 'Produtos', link: '/Products'},
    {label: 'Sobre nós', link: '/about'},
    {label: 'Contacto', link: '/contact'}
      // Adicione mais itens conforme necessário
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
