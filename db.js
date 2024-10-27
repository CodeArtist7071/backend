import firebase from './firebaseConfig'
const db =firebase.firestore();

db.collection('item').add({
    name:'Sample Item',
    quantity:1,
    price:100,
}).then((docRef)=>{
    console.log('DocRef',docRef.id)
}).catch((error)=>{
    console.error('Error add docuemnts')
})