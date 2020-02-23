import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomeService } from '../interfaces/home-service'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  private homeServiceCollection = this.afs.collection<HomeService>('HomeServices')

  constructor(private afs: AngularFirestore) { }

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
  
  deleteProduct(id: string) {
    return this.homeServiceCollection.doc(id).delete()
  }
}
