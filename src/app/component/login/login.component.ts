import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username="";
  password="";
  errorMsg="";
  constructor(private auth:AuthService, private router: Router){}

  ngOnInit():void{}

  login(){
    if (this.username.trim().length === 0){
      this.errorMsg = "Username is Required"
      
    }else if(this.password.trim().length === 0){
      this.errorMsg = "Password is Required"      
    }else{
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password);
      if(res === 200){
        this.router.navigate(['todos']);
      }
      if(res === 403){
        this.errorMsg = "Incorrect Username or Password"
      }
    }
    
  }
}



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';
// // import { FormControl } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit{
//   credentials: UntypedFormGroup
//   errorMsg="";
//   constructor(
//     private auth:AuthService,
//     private router: Router,
//     private formBuilder : FormBuilder
//     )
//     {
//       this.credentials = this.formBuilder.group({
//         'email' : ['',[Validators.required]],
//         'password' : ['',[Validators.required]]
//       });
//     }

//   ngOnInit():void{}
//   login = () => {
//     this.credentials
//   }
//   // login(){
//   //   if (this.username.trim().length === 0){
//   //     this.errorMsg = "Username is Required"
      
//   //   }else if(this.password.trim().length === 0){
//   //     this.errorMsg = "Password is Required"      
//   //   }else{
//   //     this.errorMsg = "";
//   //     let res = this.auth.login(this.username, this.password);
//   //     if(res === 200){
//   //       this.router.navigate(['todos']);
//   //     }
//   //     if(res === 403){
//   //       this.errorMsg = "invelid Credintials"
//   //     }
//   //   }
    
//   // }
// }
