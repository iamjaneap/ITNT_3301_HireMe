import { Injectable } from '@angular/core';
import { addDoc, collectionData, docData, Firestore, collection, doc, deleteDoc, updateDoc  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Profile {
  id?: string;
  birthday: string;
  email: string;
  gender: string;
  name: string;
  username: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getProfiles(): Observable<Profile[]>{
    const profileRef = collection(this.firestore, 'profile');
    return collectionData(profileRef, {idField: 'id'}) as Observable<Profile[]>;
  }

  getProfileById(id): Observable<Profile>{
    const profileDocRef = doc(this.firestore, `profile/${id}`);
    return docData(profileDocRef, {idField: 'id'}) as Observable<Profile>;
  }

  addProfile(profile: Profile){
    const profileRef = collection(this.firestore, 'profile');
    return addDoc(profileRef, profile);
  }

  deleteProfile(profile: Profile){
    const profileDocRef = doc(this.firestore, `profile/${profile.id}`);
    return deleteDoc(profileDocRef);
  }

  updateProfile(profile: Profile){
    const profileDocRef = doc(this.firestore, `profile/${profile.id}`);
    return updateDoc(profileDocRef, { email: profile.email, name: profile.name });
  }
}
