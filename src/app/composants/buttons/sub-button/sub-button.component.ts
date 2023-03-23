import { ThrowStmt } from '@angular/compiler';
import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sub-button',
  templateUrl: './sub-button.component.html',
  styleUrls: ['./sub-button.component.scss']
})
export class SubButtonComponent implements AfterContentInit {

  @Input() iconName;
  @Input() selectedRubrique;
  @Input() subRub;
  @Input() myRubrique;
  @Input() mySubRub;
  @Output() changeSubRubEvent = new EventEmitter<number>();
  iconPath: string;
  icon2Path: string;
  subButtonStyle: string;

  subButtonStyle$ = new Subject();
  currentSubButtonStyle: string;

  constructor() { }

  ngAfterContentInit(): void {
    this.iconPath = "../../../../assets/images/sub-icons/" + this.iconName + ".png";
    this.icon2Path = "../../../../assets/images/sub-icons/" + this.iconName + "2.png";
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setSubButtonStyle();
  }
  
  // this.currentLeftPos = 0;
  //   this.diapoLeftPos$.next(this.currentLeftPos + "%");

  setSubButtonStyle(): void {
    if (this.selectedRubrique !== this.myRubrique) {
      this.currentSubButtonStyle = "sub-button hide-sub-button";
    } else {
      if (this.subRub === this.mySubRub) {
        this.currentSubButtonStyle = "sub-button" + " " + this.iconName + " " + "sub-button-selected";
      } else {
        this.currentSubButtonStyle = "sub-button" + " " + this.iconName;
      }
    }
    this.subButtonStyle$.next(this.currentSubButtonStyle);
  }

  changeSubRub() {
    this.changeSubRubEvent.emit(this.mySubRub);
  }

}
