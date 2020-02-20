import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app'

interface user {
	username: string,
	uid: string,
	// lastname: string,
	// firstname: string,
}

@Injectable()
export class UserService {
	private user: user

	constructor(
		private afAuth: AngularFireAuth,
		private firestore: AngularFirestore
	) { }

	setUser(user: user) {
		this.user = user
	}

	getUID() {
		if (!this.user) {
			if (this.afAuth.auth.currentUser){
				const user = this.afAuth.auth.currentUser
				this.setUser({
					username: user.email.split('@')[0],
					uid: user.uid,
				})
				return user.uid
			} else {
				throw new Error("User not logged in")
			}
		} else {
			return this.user.uid
		}
	}

	reAuth(username: string, password: string) {
		return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(username, password))
	}

	getUsername(): string {
		return this.user.username
	}

	updateFirstName(uid, newname){
		this.firestore.doc('users/' + uid).update({firstname: newname});
	}

	updateLastName(uid, newname){
		this.firestore.doc('users/' + uid).update({lastname: newname});
	}

	updateEmail(newemail: string) {
		return this.afAuth.auth.currentUser.updateEmail(newemail)
	}

	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword)
	}

	updateNewPassword(uid, newpassword){
		this.firestore.doc('users/' + uid).update({password: newpassword});
	}

	updateImage(uid, newImage){
		this.firestore.doc('users/' + uid).update({image: newImage});
	}
}