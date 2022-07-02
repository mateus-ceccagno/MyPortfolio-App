import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trajectory',
  templateUrl: './trajectory.component.html',
  styleUrls: ['./trajectory.component.scss']
})
export class TrajectoryComponent implements OnInit {

  timeline = [
    {
      heading: "Desenvolvedor em Banrisul Consórcio",
      duration: "2021",
      subtitle: "Trabalho remoto. Porto Alegre - RS",
      content: "Construção de novo projeto. Experiência com SCRUM, gerenciamento de sessão e Design System.",
      class1: "mar-right",
      class2: "prt_about_learnbox_left"
    },
    {
      heading: "Ciência da Computação - IFSC",
      duration: "2020",
      subtitle: "Lages - SC",
      content: "Estágio supervisionado. Estudos matutinos. Previsão de conclusão em dezembro de 2023.",
      class1: "mar-left",
      class2: "prt_about_learnbox_right"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
