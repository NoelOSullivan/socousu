import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewerService } from 'src/app/services/services';


@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  constructor(private viewerservice: ViewerService) { }
  
  manageViewerSubscription: Subscription;
  activeRubrique: number;

  ngOnInit(): void {
    this.manageViewerSubscription = this.viewerservice.currentViewerState.subscribe(rubrique => {
      this.activeRubrique = rubrique;
    });
  }
}
