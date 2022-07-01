import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.scss']
})
export class FundamentalsComponent implements OnInit {
  fundamentalsSection = {
    title: "Habilidades",
    subTitle: "MEUS PRINCÍPIOS FUNDAMENTAIS E TECNOLÓGICOS",
    fundamentals: [
      "⚡ Estruturas de dados adequadas às especificações",
      "⚡ Sólidos conceitos de REST e de Microsserviços",
      "⚡ Single Page Application (SPA) quando viável",
      "⚡ Pesquisas e planejamento são fundamentais para o desenvolvimento"
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
