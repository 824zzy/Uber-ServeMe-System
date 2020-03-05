import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomeService } from '../interfaces/home-service'
import { map } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  private homeServiceCollection = this.afs.collection<HomeService>('HomeServices')

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
    ) { }

  getServices() {
    return this.homeServiceCollection.stateChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return {id, ...data}
        })
      })
    )
  }

  addService(homeservice: HomeService) {
    return this.homeServiceCollection.add(homeservice)
  }

  getService(id: string) {
    return this.homeServiceCollection.doc<HomeService>(id).valueChanges()
  }
  
  updateService(id: string, homeService: HomeService) {
    // TODO: is that enough?
    return this.homeServiceCollection.doc<HomeService>(id).update(homeService)
  }

  updateLocation(newLocation: any) {
    this.afs.collection('/HomeServices', ref => ref.where('vendorId', '==', this.afAuth.auth.currentUser.uid))
    .get().toPromise().then(res => {
      let batch = this.afs.firestore.batch()
      res.docs.forEach((doc) => {
        const docRef = this.afs.collection('HomeServices').doc(doc.id).ref
        batch.update(docRef, {location: newLocation})
      })
      batch.commit().then(() => {
        console.log(`updated all documents inside Homeserivcs`)
      })
    })
    
	}

  deleteProduct(id: string) {
    return this.homeServiceCollection.doc(id).delete()
  }
}
