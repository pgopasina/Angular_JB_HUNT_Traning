import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Database, set, ref } from '@angular/fire/database'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Router } from '@angular/router';
// import * as firebase from "firebase";
@Component({
  selector: 'app-login-with-google',
  templateUrl: './login-with-google.component.html',
  styleUrls: ['./login-with-google.component.css']
})
export class LoginWithGoogleComponent implements OnInit {

  title="demoApp";
  provider:any;
  registerform: any
  user: any;
  // provider = new GoogleAuthProvider();
  // auth = getAuth();
  constructor(private route: Router,private fb:FormBuilder){
  }
 
  ngOnInit(): void {

    this.registerform = this.fb.group({
      // fullName: new FormControl('', [Validators.required]),
      // email: new FormControl('', [Validators.required, Validators.email]),
      // password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      // confirm: new FormControl('', [Validators.required])
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:[ '', [Validators.required, Validators.minLength(8)]],
      confirm: ['', Validators.required]
    })
    // var provider = new firebase.auth.GoogleAuthProvider();
    // this.provider = provider;
    // firebase.auth().onAuthStateChanged((user: any)=> {
    //   this.user = user;
    // });
  }
  // loginWithGmail() {
  //   firebase.auth().signInWithPopup(this.provider).then(function(result:any) {
  //    var user = result.user;
  //    console.log(user.email);
     
  //   }).catch(function(error:any) {
     
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     var email = error.email;
  //     var credential = error.credential;
  //   });
  // }
  loginWithGmail(){
    // signInWithPopup(this.auth, this.provider)
    // .then((result) => {
    //   const credential: any = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
    //   const user = result.user;
    //   if (user !== null || undefined) {
    //     this.route.navigateByUrl('data');
    //   }
    // }).catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   const email = error.customData.email;
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    // });
  }
}
