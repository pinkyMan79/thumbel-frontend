import { Component, Inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserSiteEntity } from '../dto/user-reponse-info';
import { UserRegisterRequest } from '../dto/user-register-request';
import { HttpEventType } from '@angular/common/http';
import { fromEvent, first, mergeMap, finalize, takeUntil } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth: AuthService, @Inject(Document) private document: Document,){}

  user: UserSiteEntity | undefined

  form: any;

  public chooseAndUploadFile(): void {
    let fileInput = this.document.createElement('input');
    fileInput.type = 'file';
    fromEvent(fileInput, 'change')
      .pipe(
        first(),
        mergeMap(event => {
          const target = event.target as HTMLInputElement;
          const selectedFile = target.files[0];
          // formData обязательно в 2 строчки
          const uploadData = new FormData();
          uploadData.append('upload_file', selectedFile, selectedFile.name);
          // return this.http.post('http://localhost:8080/user/upload', uploadData, {
          //   reportProgress: true, // Без observe: 'events' не работает
          //   observe: 'events', // без reportProgress: true только HttpEventType.Sent и HttpEventType.Response
          // });
        }),
        finalize(() => {
          // должен быть удален, т.к. счетчик ссылок обнулится
          fileInput = null;
          console.log('fileInput = null');
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(
        event => {
          // console.log(event);
          switch (event.type) {
            case HttpEventType.Sent:
              console.log('Request sent!');
              break;
            case HttpEventType.ResponseHeader:
              console.log('Response header received!');
              break;
            case HttpEventType.UploadProgress:
              const kbLoaded = Math.round(event.loaded / 1024 / 1024);
              const percent = Math.round((event.loaded * 100) / event.total);
              console.log(
                `Upload in progress! ${kbLoaded}Mb loaded (${percent}%)`
              );
              break;
            case HttpEventType.Response:
              console.log('Done!', event.body);
          }
        },
        () => console.log('Upload error'),
        () => console.log('Upload complete')
      );
    fileInput.click();
  }

  doRegister(){
    this.auth.register(new UserRegisterRequest(this.form.login,
       this.form.password, this.form.repeatPassword, this.form.email, 
       this.form.photo, this.form.biography, this.form.position)).subscribe(
          data =>{
            this.user = new UserSiteEntity(data.login,
               data.createdDate, data.photo, data.biography, data.position);
          }
       );
       if (this.user){
        window.sessionStorage.setItem('USER_JSON',
               JSON.stringify(this.user));
       }
  }


}

