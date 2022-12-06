import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ROOM_DATA } from 'src/app/shared/constants/room.constan';
import { Room } from 'src/app/shared/models/room.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  @ViewChild('fileInput') el!: ElementRef;
  roomForm!: FormGroup;
  submitted: boolean = false;
  editFile: boolean = true;
  removeUpload: boolean = false;
  userId !: number
  $destroy = new Subject<void>();
  rooms : Room[] = ROOM_DATA
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
    return this.roomForm.controls;
  }

  initForm() {
    this.roomForm = this.fb.group({
      name: ['',Validators.required],
      type: ['',[Validators.required,]],
      status : [''],
      file: ['']
    })
    this.router.params
    .pipe(takeUntil(this.$destroy))
    .subscribe(params => {
      const id = params['id']
      const room = this.rooms.find(room => room.id == id)
      this.roomForm.patchValue({
        name: room?.name,
        type: room?.type,
        status : room?.status,
        file: room?.thumbnail
      })
      this.imageUrl = room?.thumbnail
    })
  }

  ngOnDestroy(){
    this.$destroy.next();
    this.$destroy.complete()
  }

  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.roomForm.controls[control].hasError(error);
  }

  create() {
    this.submitted = true;
    if (!this.roomForm.invalid) {
      console.log("Submit form", console.log(this.roomForm.value));
    }
  }
  cancel() {
    this._router.navigate(['/', 'rooms']);
  }

  uploadFile(event: any) {
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
