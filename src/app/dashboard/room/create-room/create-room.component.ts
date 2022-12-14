import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  @ViewChild('fileInput') el!: ElementRef;
  roomForm! : FormGroup;
  submitted: boolean = false;
  editFile: boolean = true;
  removeUpload: boolean = false;
  imageUrl: any = 'https://cdn.vuetifyjs.com/images/cards/girl.jpg';
  constructor(public fb: FormBuilder,private _router: Router,private cd: ChangeDetectorRef,private toastr: ToastrService) { }


  ngOnInit(): void {
    this.initForm()
  }

  // for easy accessing of form controls
  get f() {
    return this.roomForm.controls;
  }

  initForm(){
    this.roomForm = this.fb.group({
      name: ['',Validators.required],
      type: ['',[Validators.required,]],
      status : [''],
      file: ['']
    })
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.roomForm.controls[control].hasError(error);
  }

  create(){
    this.submitted = true;
    if(!this.roomForm.invalid){
      this.toastr.success('Hello world!', 'Toastr fun!');
      console.log("Submit form", console.log(this.roomForm.value));
    }
  }
  cancel(){
    this._router.navigate(['/','rooms']);
  }

  uploadFile(event:any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.roomForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();        
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.roomForm.patchValue({
      file: [null]
    });
  }

}
