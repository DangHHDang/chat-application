import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-channel',
  templateUrl: './create-channel.component.html',
  styleUrls: ['./create-channel.component.css']
})
export class CreateChannelComponent implements OnInit {

  channelForm! : FormGroup;
  submitted: boolean = false;
  constructor(public fb: FormBuilder,private _router: Router,private cd: ChangeDetectorRef,private toastr: ToastrService) { }


  ngOnInit(): void {
    this.initForm()
  }

  // for easy accessing of form controls
  get f() {
    return this.channelForm.controls;
  }

  initForm(){
    this.channelForm = this.fb.group({
      name: ['',Validators.required],
      type: ['',[Validators.required,]]
    })
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.channelForm.controls[control].hasError(error);
  }

  create(){
    this.submitted = true;
    if(!this.channelForm.invalid){
      this.toastr.success('Hello world!', 'Toastr fun!');
      console.log("Submit form", console.log(this.channelForm.value));
    }
  }
  cancel(){
    this._router.navigate(['/','channels']);
  }



}
