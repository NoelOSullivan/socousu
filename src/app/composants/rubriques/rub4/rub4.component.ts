import { Component, Input, OnInit } from '@angular/core';
import { ViewerService } from 'src/app/services/services';

@Component({
  selector: 'app-rub4',
  templateUrl: './rub4.component.html',
  styleUrls: ['./rub4.component.scss']
})
export class Rub4Component {

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
