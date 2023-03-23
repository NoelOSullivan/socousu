import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { DiapoService } from 'src/app/services/services';

@Component({
  selector: 'app-diaporama',
  templateUrl: './diaporama.component.html',
  styleUrls: ['./diaporama.component.scss']
})
export class DiaporamaComponent implements OnInit {

  @Input() diapoData;
  @Input() selectedRubrique;

  diapoInfo: any;
  manageDiapoSubscription: Subscription;

  diapoLeftPos$ = new Subject();
  currentLeftPos: number;

  activeDiapo: number;

  animateScroll$ = new Subject();
  animateScroll: boolean;

  diapoHolderWidth$ = new Subject();
  currentDiapoHolderWidth: number;

  showDescription: boolean = false;
  description: string;

  constructor(private diapoService: DiapoService) { }

  ngOnInit() {
    this.activeDiapo = 1;
    this.currentLeftPos = 0;
    this.diapoLeftPos$.next(this.currentLeftPos + "%");

    this.manageDiapoSubscription = this.diapoService.diapoDirection.subscribe(direction => {
      switch (direction) {
        case "back":
          if (this.activeDiapo !== 1) {
            this.activeDiapo -= 1;
            this.currentLeftPos = (this.activeDiapo - 1) * -100;
            this.changeDiapo();
          }
          break;
        case "forward":
          if (this.activeDiapo !== this.diapoInfo.length) {
            this.activeDiapo += 1;
            this.currentLeftPos = (this.activeDiapo - 1) * -100;
            this.changeDiapo();
          }
          break;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.diapoData && changes.diapoData.currentValue) {
      this.diapoInfo = changes.diapoData.currentValue;
      this.changeAnimateScrollState(false);
      this.activeDiapo = 1;
      this.currentLeftPos = (this.activeDiapo - 1) * -100;
      this.changeDiapo();
      this.changeAnimateScrollState(true)
      this.currentDiapoHolderWidth = 0;
      this.diapoHolderWidth$.next((this.diapoData.length * 100) + "%");
      this.diapoService.setTotalDiapo(this.diapoData.length);
    }
    if (changes.selectedRubrique) {
      this.showDescription = changes.selectedRubrique.currentValue || undefined;
    }
  }

  changeDiapo(): void {
    this.diapoService.setActiveDiapo(this.activeDiapo);
    this.diapoLeftPos$.next(this.currentLeftPos + "%");
    this.description = this.diapoInfo[this.activeDiapo-1].description;
  }

  changeAnimateScrollState(state: boolean) {
    this.animateScroll$.next(state);
  }
}
