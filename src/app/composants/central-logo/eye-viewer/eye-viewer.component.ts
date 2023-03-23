import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-eye-viewer',
  templateUrl: './eye-viewer.component.html',
  styleUrls: ['./eye-viewer.component.scss']
})
export class EyeViewerComponent {

  @Input() diapoData;
  @Input() selectedRubrique;

  constructor() { }

}
