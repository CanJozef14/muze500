// fetch the database
var db = firebase.database()

// fetch the DOM
const teamNo = document.getElementById('teamNo')
const email = document.getElementById('email')
const password = document.getElementById('password')

const login = document.getElementById('login')
const signup = document.getElementById('signup')
const loginAlert = document.getElementById('loginAlert')
const loginErr = document.getElementById('loginErr')

signup.addEventListener('click', function() {
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(function(res) {
    var newUser = {
      teamNumber: teamNo.value,
      mail: email.value,
      userId: res.uid
    }
    db.ref('users/' + res.uid).set(newUser)
  })
})

login.addEventListener('click', function() {
  firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(err) {
    console.log(err);
    loginErr.innerHTML = "Wrong password or email"
    loginAlert.classList.remove('hidden')
  })
})

firebase.auth().onAuthStateChanged(function(u) {
  if (u) {
    window.location = "landing.html"
  }
})
