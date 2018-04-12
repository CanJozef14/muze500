// fetch firebase
var db = firebase.database()

// fetch the DOM
const name = document.getElementById('name')
const regional = document.getElementById('regional')
const offseason = document.getElementById('offseason')
const district = document.getElementById('district')
const type = document.getElementById('type')

const create = document.getElementById('create')
const cancel = document.getElementById('cancel')

cancel.addEventListener('click', function() {
  window.location = "landing.html"
})

firebase.auth().onAuthStateChanged(function(u) {
  if (u) {
    create.addEventListener('click', function() {
      var etype = type.options [type.selectedIndex] .text;
      var newKey = db.ref().child('events').push().key
      var newEvent = {
        eventName: name.value,
        eventType: etype,
        submitteruid: u.uid,
        eventKey: newKey
      }
      db.ref('users/' + u.uid + '/events/' + newKey).set(newEvent)
      window.location = "landing.html"

    })
  }
})
