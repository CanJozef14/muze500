// fetch the database
var db =  firebase.database()

// fetch the DOM
const wMsg = document.getElementById('wMsg')
const createEvent = document.getElementById('createEvent')
const eventContainer = document.getElementById('eventContainer')


firebase.auth().onAuthStateChanged(function(u) {
  if (u) {
    db.ref('users/' + u.uid).once('value', function(snap) {
      wMsg.innerHTML = "Welcome back team " + snap.val().teamNumber
    })
    reriveMyEvents(u)
  }
})

function reriveMyEvents(user) {
  db.ref('users/' + user.uid + '/events/').once('value', function(snap) {
    snap.forEach(function(s) {
      var newDispEvent = document.createElement('div')
      var eventName = document.createElement('p')
      var delBtn = document.createElement('i')
      var seperator = document.createElement('hr')

      newDispEvent.appendChild(eventName)
      newDispEvent.appendChild(delBtn)
      eventContainer.appendChild(newDispEvent)

      eventName.innerHTML = s.val().eventName
      delBtn.innerHTML = "delete"
      newDispEvent.className += "eventDisplayer"
      delBtn.className += "material-icons delBtns"
      eventName.className += "newEventName"
      eventContainer.appendChild(seperator)
      seperator.className += "mySep"
      eventName.id = s.key


      newDispEvent.onclick = function() {
        var currentEvent = s.val()
        firebase.database().ref('users/' + user.uid + '/currentEvent').remove()
        firebase.database().ref('users/' + user.uid + '/currentEvent').set(currentEvent)
        window.location = "myEvent.html"
      }

      delBtn.onclick = function() {
        db.ref('users/' + user.uid + '/events/' + s.key).remove()
      }

    })
  })
}

createEvent.addEventListener('click', function() {
  window.location = "createEvent.html"
  console.log(deneme);
})
