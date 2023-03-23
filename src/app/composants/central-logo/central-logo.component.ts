import { Component, HostListener, OnInit } from '@angular/core';
import { ViewerService } from 'src/app/services/services';
import { Subscription } from 'rxjs';
import dataSet from '../../database/database.json';

@Component({
  selector: 'app-central-logo',
  templateUrl: './central-logo.component.html',
  styleUrls: ['./central-logo.component.scss']
})
export class CentralLogoComponent implements OnInit {

  constructor(private viewerservice: ViewerService) { }

  screenOrientation: string;
  rubrique: number;
  subRub: number;
  viewerOpen: boolean = false;
  manageViewerSubscription: Subscription;
  diapoData: [];

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.manageResize();
  }

  manageResize() {
    if (window.innerWidth >= window.innerHeight) {
      this.screenOrientation = "LANDSCAPE"
    } else {
      this.screenOrientation = "PORTRAIT"
    }
  }

  ngOnInit(): void {
    this.manageResize();
    console.log("dataSet", dataSet);
  }
  
  ngAfterViewInit(): void {
    this.manageViewerSubscription = this.viewerservice.currentViewerState.subscribe(rubrique => {
      if(this.rubrique !== rubrique) {
        this.rubrique = rubrique;
        this.toggleViewer();
        if(this.rubrique) {
          this.subRub = 1;
          this.initialiseSubRubrique();
        }
      }
    });
  }

  initialiseSubRubrique(): void {
    this.diapoData = dataSet.rubriques["rub" + this.rubrique]["subRub" + this.subRub];
  }

  toggleViewer(): void {
    this.viewerOpen = !this.viewerOpen;
  }

  changeSubRubEvent(event) {
    this.subRub = event;
    this.diapoData = dataSet.rubriques["rub" + this.rubrique]["subRub" + this.subRub];
  }

  manageLogoSize(): string {
    if (this.screenOrientation === "LANDSCAPE") {
      if (this.viewerOpen) {
        return 'central-logo-landscape-zoom transition-zoom'
      } else {
        return 'central-logo-landscape transition-zoom';
      }
    } else {
      if (this.viewerOpen) {
        return 'central-logo-portrait-zoom';
      } else {
        // console.log("XXX");
        return 'central-logo-portrait';
      }
    }
  }

  manageLogoOpacity(): string {
    if (this.viewerOpen) {
      return 'hide';
    }
  }

  manageImageControls(): string {
    if (this.viewerOpen) {
      return 'show-image-controls';
    } else {
      return 'hide-image-controls';
    }
  }

}
