import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app'
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User
  constructor(
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore
  ) { }

	reAuth(email: string, password: string) {
		return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(email, password))
	}

	getUserEmail(): string {
		return this.afAuth.auth.currentUser.email
	}

	updateFirstName(newname: string) {
		this.firestore.doc(`users/${this.afAuth.auth.currentUser.uid}`).update({firstname: newname});
	}

	updateLastName(newname: string) {
		this.firestore.doc(`users/${this.afAuth.auth.currentUser.uid}`).update({lastname: newname});
	}

	updateEmail(newemail: string) {
		return this.afAuth.auth.currentUser.updateEmail(newemail)
	}

	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword)
	}

	updateNewPassword(newpassword: string) {
		this.firestore.doc(`users/${this.afAuth.auth.currentUser.uid}`).update({password: newpassword});
	}

	updateLocation(newLocation: any) {
		this.firestore.doc(`users/${this.afAuth.auth.currentUser.uid}`).update({location: newLocation});
	}

	getAuth() {
		return this.afAuth.auth
	}
}