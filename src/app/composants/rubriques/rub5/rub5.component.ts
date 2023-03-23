import { Component, Input, OnInit } from '@angular/core';
import { ViewerService } from 'src/app/services/services';

@Component({
  selector: 'app-rub5',
  templateUrl: './rub5.component.html',
  styleUrls: ['./rub5.component.scss']
})
export class Rub5Component {

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
