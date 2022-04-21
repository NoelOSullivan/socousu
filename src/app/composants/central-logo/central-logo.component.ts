import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-central-logo',
  templateUrl: './central-logo.component.html',
  styleUrls: ['./central-logo.component.scss']
})
export class CentralLogoComponent implements OnInit {

  constructor() { }

  screenOrientation: string;
  zoomed: boolean = false;

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
  }

  toggleZoom(): void {
    this.zoomed = !this.zoomed;
  }

  manageLogoSize(): string {
    if (this.screenOrientation === "LANDSCAPE") {
      if (this.zoomed) {
        return 'central-logo-landscape-zoom transition-zoom'
      } else {
        return 'central-logo-landscape transition-zoom';
      }
    } else {
      if (this.zoomed) {
        return 'central-logo-portrait-zoom transition-zoom';
      } else {
        return 'central-logo-portrait transition-zoom';
      }
    }


  }

  manageLogoOpacity(): string {
    if(this.zoomed) {
      return 'hide';
    }
  }

}
