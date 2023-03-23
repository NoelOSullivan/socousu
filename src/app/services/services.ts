import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ViewerService {

  private viewerState = new BehaviorSubject(undefined);
  currentViewerState = this.viewerState.asObservable();

  constructor() { }

  manageViewer(rubrique: number) {
    this.viewerState.next(rubrique);
  }

  getMenuItemStyle(rubrique): string {
    if (this.viewerState.getValue() === undefined) {
      return 'active-menu-item';
    } else {
      if (this.viewerState.getValue() === rubrique) {
        return 'title'
      } else {
        return 'hide-menu-item'
      }
    }
  }
}

export class DiapoService {

  private diapoDirectionSubject = new BehaviorSubject(undefined);
  diapoDirection = this.diapoDirectionSubject.asObservable();

  private activeDiapoSubject = new BehaviorSubject(undefined);
  activeDiapo = this.activeDiapoSubject.asObservable();

  private totalDiapoSubject = new BehaviorSubject(undefined);
  totalDiapo = this.totalDiapoSubject.asObservable();

  constructor() { }

  manageDiapo(direction: string) {
    this.diapoDirectionSubject.next(direction);
  }

  setActiveDiapo(activeDiapo: number) {
    this.activeDiapoSubject.next(activeDiapo);
  }

  setTotalDiapo(totalDiapo: number) {
    this.totalDiapoSubject.next(totalDiapo);
  }
  

}