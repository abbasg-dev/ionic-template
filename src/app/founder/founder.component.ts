import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-founder',
  templateUrl: './founder.component.html',
  styleUrls: ['./founder.component.scss'],
})
export class FounderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  backgroundImage = 'Snowflake.png';
  founderImage = 'user-photo.png';
  founderName = 'John Doe';
  founderDescription = 'CEO at Crios.com';
  founderTitle = 'Template is awesome';
  founderBio =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel leo efficitur, venenatis est ut, tincidunt nibh. Suspendisse lobortis lectus vel imperdiet ullamcorper.';
}
