import {
  Component,
  OnDestroy,
} from '@angular/core';
import { SpinnerHandlerService } from '../core/services/spinner/spinner-handler.service';

@Component({
  selector: 'app-spinner',
  template: `<div class="spinner-container" *ngIf="spinnerActive">
  <mat-spinner></mat-spinner>
</div>`,
styles: [
  `.spinner-container {
    background-color: rgba(0,0,0, 0.1);
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 10000
  }`
  ]
})
export class SpinnerComponent{
  spinnerActive: boolean = true;

  constructor(
    public spinnerHandler: SpinnerHandlerService
  ) {
    this.spinnerHandler.showSpinner.subscribe(this.showSpinner.bind(this));
  }

  showSpinner = (state: boolean): void => {
    this.spinnerActive = state;
  };
}
