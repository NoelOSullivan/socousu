import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DiapoService } from 'src/app/services/services';

@Component({
  selector: 'app-button-right',
  templateUrl: './button-right.component.html',
  styleUrls: ['./button-right.component.scss']
})
export class ButtonRightComponent implements OnInit {

  activeDiapoSubscription: Subscription;
  activeDiapo: number;
  totalDiapoSubscription: Subscription;
  totalDiapo: number;

  constructor(private diapoService: DiapoService) { }

  ngOnInit(): void {
    this.activeDiapoSubscription = this.diapoService.activeDiapo.subscribe(activeDiapo => {
      this.activeDiapo = activeDiapo;
      console.log("this.activeDiapo", this.activeDiapo);
    });
    this.totalDiapoSubscription = this.diapoService.totalDiapo.subscribe(totalDiapo => {
      this.totalDiapo = totalDiapo;
      console.log("this.totalDiapo", this.totalDiapo);
    });
  }

  diapoForward() {
    this.diapoService.manageDiapo("forward");
  }

}
