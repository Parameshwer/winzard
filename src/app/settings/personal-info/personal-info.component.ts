import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatchPassword } from '../../shared/validators/validate-password';
import { SharedService } from '../../shared/shared.service';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  submitted: boolean = false;
  personalInfo: FormGroup;
  personalInfoData: any;
  userInfo: any
  hide: boolean = true;
  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private shared: SharedService,
    private cd: ChangeDetectorRef) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')).data.user;
    console.log(this.userInfo, 'user')
  }

  ngOnInit() {
    this.personalInfo = this.fb.group({
      oldPassword: [''],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      file: [null],
      empId: this.userInfo.id
    }, { validators: MatchPassword })
    this.getPersonelInfo();
  }

  getPersonelInfo() {
    this.shared.getPersonelInfo({ empId: this.userInfo.id }).subscribe(res => {
      console.log(res);
      if (res && res.success) {
        this.personalInfoData = res.data[0];
      }
    })
  }

  /*########################## File Upload ########################*/
  @ViewChild('fileInput', { static: true }) el: ElementRef;
  imageUrl: any = '';
  editFile: boolean = true;
  removeUpload: boolean = false;

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.personalInfo.patchValue({
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
  // removeUploadedFile() {
  //   let newFileList = Array.from(this.el.nativeElement.files);
  //   this.imageUrl = '';
  //   this.editFile = true;
  //   this.removeUpload = false;
  //   this.personalInfo.patchValue({
  //     file: [null]
  //   });
  // }

  // Submit Registration Form
  // onFormSubmit() {
  //   this.submitted = true;
  //   if (!this.personalInfo.valid) {
  //     alert('Please fill all the required fields to create a super hero!')
  //     return false;
  //   } else {
  //     console.log(this.personalInfo.value)
  //   }
  // }
  onFormSubmit() {
    console.log(this.personalInfo);
    if (this.personalInfo.get('confirmPassword').errors && this.personalInfo.get('confirmPassword').errors.MatchPassword) {
      this.auth.openConfirmDialog('Password & confirm password does not match', "error");
      return;
    }
    if(this.personalInfo.invalid){
      this.auth.openConfirmDialog('Please enter all fields', "error");
      return;
    }
    this.submitted = true;
    this.shared.getUpdatePersonelInfo(this.personalInfo.value)
      .subscribe(response => {
        console.log(response)
      });
  }

  getName(name) {
    if (name) {
      const list = String(name).split(" ");
      return list.map(x => x.substring(0, 1));
    }
    return '';
  }
}
