import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-component',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  services = [
    {
      logo: 'assets/images/c1.png',
      name: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      logo: 'assets/images/c2.png',
      name: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      logo: 'assets/images/c3.png',
      name: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      logo: 'assets/images/c4.png',
      name: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
}
