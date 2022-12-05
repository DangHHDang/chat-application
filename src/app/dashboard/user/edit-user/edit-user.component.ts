import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ELEMENT_DATA } from 'src/app/shared/constants/user.constant';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnDestroy {

  @ViewChild('fileInput') el!: ElementRef;
  userForm!: FormGroup;
  submitted: boolean = false;
  editFile: boolean = true;
  removeUpload: boolean = false;
  userId !: number
  $destroy = new Subject<void>();
  users : User[] = ELEMENT_DATA
  imageUrl: any = 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light';
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
    return this.userForm.controls;
  }

  initForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      file: ['']
    })
    this.router.params
    .pipe(takeUntil(this.$destroy))
    .subscribe(params => {
      const id = params['id']
      const user = this.users.find(user => user.id == id)
      this.userForm.patchValue({
        name : user?.name,
        email : user?.email,
        file : user?.avatar
      })
      this.imageUrl = user?.avatar
      console.log(params)
    })
  }

  ngOnDestroy(){
    this.$destroy.next();
    this.$destroy.complete()
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.userForm.controls[control].hasError(error);
  }

  create() {
    this.submitted = true;
    if (!this.userForm.invalid) {
      console.log("Submit form", console.log(this.userForm.value));
    }
  }
  cancel() {
    this._router.navigate(['/', 'users']);
  }

  uploadFile(event: any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.userForm.patchValue({
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
    this.userForm.patchValue({
      file: [null]
    });
  }

}
