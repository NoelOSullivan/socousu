import { Component, Input, OnInit } from '@angular/core';
import { ViewerService } from 'src/app/services/services';

@Component({
  selector: 'app-rub1',
  templateUrl: './rub1.component.html',
  styleUrls: ['./rub1.component.scss']
})
export class Rub1Component {

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
