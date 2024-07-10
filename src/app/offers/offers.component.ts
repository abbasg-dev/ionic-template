import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() content1_padding?: string;
  @Input() content2_padding?: string;
  @Input() image_1?: string;
  @Input() image_2?: string;
  @Input() image_width?: string;
  @Input() image_height?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() color?: string;
  @Input() display?: string;
  @Input() background_color?: string;
  @Input() content_padding?: string;
  @Input() background_1?: string;
  @Input() background_2?: string;
  @Input() background1_position?: string;
  @Input() background2_position?: string;
}
