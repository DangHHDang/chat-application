import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CHANNEL_DATA } from 'src/app/shared/constants/channel.constant';
import { Channel } from 'src/app/shared/models/channel.model';

@Component({
  selector: 'app-edit-channel',
  templateUrl: './edit-channel.component.html',
  styleUrls: ['./edit-channel.component.css']
})
export class EditChannelComponent implements OnInit {

  channelForm!: FormGroup;
  submitted: boolean = false;
  $destroy = new Subject<void>();
  channels : Channel[] = CHANNEL_DATA
  constructor(
    public fb: FormBuilder, 
    private _router: Router, 
    private cd: ChangeDetectorRef,
    private router: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.initForm()
  }

  // for easy accessing of form controls
  get f() {
    return this.channelForm.controls;
  }

  initForm() {
    this.channelForm = this.fb.group({
      name: ['',Validators.required],
      type: ['',[Validators.required,]],
    })
    this.router.params
    .pipe(takeUntil(this.$destroy))
    .subscribe(params => {
      const id = params['id']
      const channel = this.channels.find(channel => channel.id == id)
      this.channelForm.patchValue({
        name: channel?.name,
        type: channel?.type,
      })
    })
  }

  ngOnDestroy(){
    this.$destroy.next();
    this.$destroy.complete()
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.channelForm.controls[control].hasError(error);
  }

  create() {
    this.submitted = true;
    if (!this.channelForm.invalid) {
      console.log("Submit form", console.log(this.channelForm.value));
    }
  }
  cancel() {
    this._router.navigate(['/', 'channels']);
  }
}
