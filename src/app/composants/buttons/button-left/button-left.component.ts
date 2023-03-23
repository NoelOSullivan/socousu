import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DiapoService } from 'src/app/services/services';

@Component({
  selector: 'app-button-left',
  templateUrl: './button-left.component.html',
  styleUrls: ['./button-left.component.scss']
})
export class ButtonLeftComponent implements OnInit {

  activeDiapoSubscription: Subscription;
  activeDiapo: number;

  constructor(private diapoService: DiapoService) { }

  ngOnInit(): void {
    this.activeDiapoSubscription = this.diapoService.activeDiapo.subscribe(activeDiapo => {
      this.activeDiapo = activeDiapo;
    });
  }

  diapoBack() {
    this.diapoService.manageDiapo("back");
  }

}
