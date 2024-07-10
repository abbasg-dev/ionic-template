import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-item-component',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss'],
})
export class ServiceItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() service: any;
  @Input() serviceId?: number;
}
