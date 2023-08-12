
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  import{getAuth} from 'firebase /auth'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyACkzF65BI4PhipRYNtPJvzmJp1PgtWmKg",
    authDomain: "web-design-b27d2.firebaseapp.com",
    projectId: "web-design-b27d2",
    storageBucket: "web-design-b27d2.appspot.com",
    messagingSenderId: "480518858880",
    appId: "1:480518858880:web:876427f6c58b3800845e65",
    measurementId: "G-8RSNT1LNCQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



  const App = firebase.initializeApp(firebaseConfig);
console.log(app)

const signup = () => {
    let username = document.getElementById('username').value;
    let contact = document.getElementById('contact').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let role = 'User'

    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            firebase.database().ref('users/' + user.uid).set({
                uid: user.uid,
                username: username,
                role: role,
                contact: contact,
                email: email,
                password: password
            })
                .then(() => {
                    const user = { email: email };
                    localStorage.setItem('user', JSON.stringify(user));
                    console.log('User created successfully.')
                    window.location.href = 'page2.html'
                })
                .catch((error) => {
                    console.log(error);
                })
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode + ': ' + errorMessage)
        });
}

const signin = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            console.log(user)
            const dbRef = firebase.database().ref();
            dbRef.child("users").child(user.uid).get().then((snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val()
                    if (userData.role === 'Admin') {
                        const user = { email: email };
                        localStorage.setItem('user', JSON.stringify(user));
                        console.log('User created successfully.')
                        window.location.href = '../Admin/items/items.html'
                    }
                    else {
                        const user = { email: email };
                        localStorage.setItem('user', JSON.stringify(user));
                        window.location.href = 'page2.html'
                    }
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode + ': ' + errorMessage)
        });

}



// Initialize Firebase
const App = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = firebase.storage();

// Get a reference to the storage location
const storageRef = storage.ref();

const fileUpload = () => {
// Handle file input change event
const fileInput = document.getElementById('fileInput'); // Your file input element
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    // Create a reference to the file in Firebase Storage
    const imageRef = storageRef.child('images/' + file.name);

    // Upload the file to Firebase Storage
    imageRef.put(file).then((snapshot) => {
      console.log('Image uploaded successfully!');
      
      // Get the download URL of the uploaded image
      imageRef.getDownloadURL().then((downloadURL) => {
        console.log('Download URL:', downloadURL);
        
        // Store the download URL in the Realtime Database
        firebase.database().ref('users/' + user.uid).set({
            
            foodItem:appendChild(foodImg)
          foodName :  appendChild(foodName)
              foodPrice :appendChild('foodPrice')           
        })
            .then(() => {
                const user = { email: email };
                localStorage.setItem('user', JSON.stringify(user));
                console.log('User created successfully.')
                window.location.href = './shopping.html'
            })
            .catch((error) => {
                console.log(error);
            })
      });
    });
  }
});

}

