import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CentralLogoComponent } from './composants/central-logo/central-logo.component';
import { SceneComponent } from './composants/scene/scene.component';
import { EyeViewerComponent } from './composants/central-logo/eye-viewer/eye-viewer.component';
import { DiaporamaComponent } from './composants/central-logo/eye-viewer/diaporama/diaporama.component';
import { ButtonLeftComponent } from './composants/buttons/button-left/button-left.component';
import { ButtonRightComponent } from './composants/buttons/button-right/button-right.component';
import { ButtonCloseComponent } from './composants/buttons/button-close/button-close.component';
import { SubButtonComponent } from './composants/buttons/sub-button/sub-button.component';
import { Rub1Component } from './composants/rubriques/rub1/rub1.component';
import { Rub2Component } from './composants/rubriques/rub2/rub2.component';
import { Rub3Component } from './composants/rubriques/rub3/rub3.component';
import { Rub4Component } from './composants/rubriques/rub4/rub4.component';
import { Rub5Component } from './composants/rubriques/rub5/rub5.component';
import { Rub6Component } from './composants/rubriques/rub6/rub6.component';
import { Rub7Component } from './composants/rubriques/rub7/rub7.component';
import { ViewerService } from './services/services';
import { DiapoService } from './services/services';

@NgModule({
  declarations: [
    AppComponent,
    CentralLogoComponent,
    SceneComponent,
    EyeViewerComponent,
    DiaporamaComponent,
    ButtonLeftComponent,
    ButtonRightComponent,
    ButtonCloseComponent,
    SubButtonComponent,
    Rub1Component,
    Rub2Component,
    Rub3Component,
    Rub4Component,
    Rub5Component,
    Rub6Component,
    Rub7Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [ViewerService, DiapoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
