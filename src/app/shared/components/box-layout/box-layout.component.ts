import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-layout',
  templateUrl: './box-layout.component.html',
  styleUrls: ['./box-layout.component.scss']
})
export class BoxLayoutComponent implements OnInit {
  @Input() background: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
