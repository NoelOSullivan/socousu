import { Component, Input, OnInit } from '@angular/core';
import { ViewerService } from 'src/app/services/services';

@Component({
  selector: 'app-rub3',
  templateUrl: './rub3.component.html',
  styleUrls: ['./rub3.component.scss']
})
export class Rub3Component {

  constructor(private viewerService:ViewerService) { }

  @Input() activeRubrique;
  @Input() rubrique;

  clickRub(): void {
    this.viewerService.manageViewer(this.rubrique);
  }

  getMenuItemStyle(): string {
    return this.viewerService.getMenuItemStyle(this.rubrique);
  }
}
