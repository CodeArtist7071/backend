import 'firebase/auth'
const auth = firebase.auth();

auth.createUSerWithEmailAndPassword(email,password)
.then((userCredential)=>{
    console.log('User Sign Up',userCredential.user);
}).catch((error)=>{
    console.log('Error signing up',error);
})


auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    console.log('User signed in:', userCredential.user);
  })
  .catch((error) => {
    console.error('Error signing in:', error);
  });



auth.signOut()
  .then(() => {
    console.log('User signed out');
  })
  .catch((error) => {
    console.error('Error signing out:', error);
  });
