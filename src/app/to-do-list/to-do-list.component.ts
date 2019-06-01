import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {


	// itemsLivreForm = new FormGroup({
 //        titre: new FormControl([Validators.required]),
 //        description: new FormControl(),
 //        auteur: new FormControl([Validators.required])
 //    });

 	itemsLivreForm: FormGroup;
    titre: FormControl;
    auteur: FormControl;
    description: FormControl;

 	submitBook(){
		alert("formulaire :"+this.itemsLivreForm.status);
		console.log(this.itemsLivreForm.value);
	}



  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  	this.itemsLivreForm = this.fb.group({ 
 		titre:['',[Validators.required,Validators.minLength(2)]], 
 		description:[''], 
 		auteur:['',[Validators.required,Validators.minLength(2)]]
    });

  }

}
// autre façon de faire le builder pour avoir une synthaxe de validation plus leger
// export class SignUpComponent implements OnInit {

//   myForm: FormGroup;
//   usernameCtrl: FormControl;
//   passwordCtrl: FormControl;

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.usernameCtrl = this.formBuilder.control('username', Validators.required);
//     this.passwordCtrl = this.formBuilder.control('', Validators.required);

//     this.myForm = this.formBuilder.group({
//       username: this.usernameCtrl,
//       password: this.passwordCtrl
//     });
//   }
// }

//ensuite pour le html faudra faire: <div class="alert alert-danger" *ngIf="usernameCtrl.invalid">
//  username is required
//</div>