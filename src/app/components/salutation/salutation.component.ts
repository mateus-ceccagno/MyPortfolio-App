import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salutation',
  templateUrl: './salutation.component.html',
  styleUrls: ['./salutation.component.scss']
})
export class SalutationComponent implements OnInit {

  salutations= {
    username: "Mateus Prado Ceccagno",
    title: "Olá, sou Mateus",
    subTitle: "Um desenvolvedor apaixonado pelo que faz. Tenho experiência com desenvolvimento Web Full Stack utilizando .NET Core e Angular.",
    resumeLink: "https://doc-14-9o-docs.googleusercontent.com/docs/securesc/gtc2f9k5ck3dri7ithkoh84ai8hu9g76/0b2ih2e39etvasnqn64ejhuuvv4lv73l/1656646500000/09992258239371819601/09992258239371819601/1ul67c0WZBUq51NyvA6uXwYBEzXi1sSBT?e=download&ax=ACxEAsap_teXFLagkPEe5S4EquCGJbxhMP7LBjcyKPRBYihrbt8Pm4Sf_MMIcqP0Yn_U_TWHPbzLHH1x_s8t2rSzT1-n_7YEig63CQM7LU4-Pc3UlHVQS8NchKn1wYX5lzK1htWAQv8s-9nD2AFeGh0_hX4gpUUQKvWr81ofq-f6kAiYYwYgRaIA-GRrvm92uEDnNNHqT0fISULxCkMVvlS-4h3jZXQCJDEKjlB-cmjm9aIXYvVE8HrTVsUQj7dbxZpBCnOVNsSn3QSyB7yvt3AFj3lig00Orh--AvBJayxsEAOWTHYsfn1TG6IpZqVsNGV7rAl3MGQkhgs97KKcMlxJBofPNp_I68hK0TqY8UeakTrCkHn-nTU2Ioau3lljQalH9d_EdMKnTjwABmX6AsdIKhV_zHRtPXTNBpe79RoyezUdWJOWnt8KenfOTO485kV5Q7XfmD3iRelNHzjOeVS0pkWSDnz0G-VZk92CwF43l61_6B5cVgP0_IEdYEmTdRIcef2H58M8oayWlEk5b-2W6twWaxufmulYcRH8rvd1eKgCoKGypb6cD2v2bWfcTM-47c3ott1N_5nlpmyURqiP6KR3ZMzQGgAfAMprpfbBfdkTEqP1JhOphJeI0nOJrTIXM57bInM1P24SIZg-M33OxRx3YzrqTkENMEUnooiUJXufIDw7KZy8XBhBkO_80Bwcwe2iMJs1d5k7ETuXeLlDxrntpTuaywZAncSaIcLlWEbAMtPFNjj7&uuid=7707cf87-56a8-46c2-906d-c8a05bbc3d90&authuser=0&nonce=n1kk9cc2v34hc&user=09992258239371819601&hash=5g8o8hmsiq37hrnh282qrodct6s0si43"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
