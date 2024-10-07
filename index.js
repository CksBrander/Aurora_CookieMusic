var firebaseConfig = {
  apiKey: "AIzaSyDTZFLW9GNdiKDut4DrWECrqBktGpKWZxk",
  authDomain: "hallowed-scene-401718.firebaseapp.com",
  databaseURL: "https://hallowed-scene-401718-default-rtdb.firebaseio.com",
  projectId: "hallowed-scene-401718",
  storageBucket: "hallowed-scene-401718.appspot.com",
  messagingSenderId: "231329096876",
  appId: "1:231329096876:web:cf254fa787ed588f6aab09",
  measurementId: "G-DL8DJ9MFVE"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()

function register() {
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  full_name = document.getElementById('full_name').value
  favourite_song = document.getElementById('favourite_song').value
  milk_before_cereal = document.getElementById('milk_before_cereal').value

  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return

  }
  if (validate_field(full_name) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false) {
    alert('One or More Extra Fields is Outta Line!!')
    return
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser

      var database_ref = database.ref()
      var user_data = {
        email: email,
        full_name: full_name,
        favourite_song: favourite_song,
        milk_before_cereal: milk_before_cereal,
        last_login: Date.now()
      }
      database_ref.child('users/' + user.uid).set(user_data)
      if (database_ref = database.ref()) {
        window.location.assign("index.html")
      }
        alert('User Created!!')
      })
    .catch(function (error) {
      var error_code = error.code
      var error_message = error.message

      alert(error_message)
    })
}

function login() {
  email = document.getElementById('email').value
  password = document.getElementById('password').value


  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(function () {
      var user = auth.currentUser

      var database_ref = database.ref()

      var user_data = {
        last_login: Date.now()
      }
      database_ref.child('users/' + user.uid).update(user_data)
      if (database_ref = database.ref()) {
        window.location.assign("index.html")

        alert('login successfully')
        return
      }
      alert('User Logged In!!')

    })
    .catch(function (error) {
      var error_code = error.code
      var error_message = error.message

      alert(error_message)
    })
}




function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    return true
  } else {
    return false
  }
}

function validate_password(password) {
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}