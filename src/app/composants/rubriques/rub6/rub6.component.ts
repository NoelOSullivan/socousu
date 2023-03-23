import { Component, Input, OnInit } from '@angular/core';
import { ViewerService } from 'src/app/services/services';

@Component({
  selector: 'app-rub6',
  templateUrl: './rub6.component.html',
  styleUrls: ['./rub6.component.scss']
})
export class Rub6Component implements OnInit {

  constructor(private viewerService:ViewerService) { }

  @Input() activeRubrique;
  @Input() rubrique;

  ngOnInit(): void {
  }

  clickRub(): void {
    this.viewerService.manageViewer(this.rubrique);
  }

  getMenuItemStyle(): string {
    return this.viewerService.getMenuItemStyle(this.rubrique);
  }
}
