import { Component, OnInit } from '@angular/core';
import { ViewerService } from 'src/app/services/services';

@Component({
  selector: 'app-button-close',
  templateUrl: './button-close.component.html',
  styleUrls: ['./button-close.component.scss']
})
export class ButtonCloseComponent implements OnInit {

  constructor(private viewerService: ViewerService) { }

  ngOnInit(): void {
  }

  clickClose(): void {
    this.viewerService.manageViewer(undefined);
  }

}
