// fetch firebase
var db = firebase.database()

//fetch the DOM
const eMsg = document.getElementById('eMsg')
const create = document.getElementById('create')
const back = document.getElementById('back')
const teamContainer = document.getElementById('teamContainer')
const matchesPanel = document.getElementById('matchesPanel')
const addMatch = document.getElementById('addMatch')
const goback = document.getElementById('goback')
const sort = document.getElementById('sort')
const sortStyle = document.getElementById('sortStyle')
const teamsDisplay = document.getElementById('teamsDisplay')


firebase.auth().onAuthStateChanged(function(u) {
  if (u) {
    db.ref('users/' + u.uid + '/currentEvent').once('value', function(snap) {
      eMsg.innerHTML = snap.val().eventName
    })
    displayTeams(u)
    displayMatches(u)

    goback.addEventListener('click', function() {
      db.ref('users/' + u.uid + '/currentEvent').once('value', function(snap) {
        var toTransfer = {
          eventKey: snap.val().eventKey,
          eventName: snap.val().eventName,
          eventType: snap.val().eventType,
          submitteruid: snap.val().submitteruid,
          teams: snap.val().teams,
          matches: snap.val().matches
        }
        console.log(snap.val().eventKey);
        console.log(snap.val().teams);
         db.ref('users/' + u.uid + '/events/' + snap.val().eventKey).set(toTransfer)
           window.location = "landing.html"
      }).catch(function(err) {
        console.log('no current event');
        window.location = "landing.html"
      })
    })

    sort.addEventListener('click', function() {
      var typeOfSort = sortStyle.options[sortStyle.selectedIndex].value
      teamsDisplay.innerHTML =""
      firebase.database().ref('users/' + u.uid + '/currentEvent/teams').orderByChild(typeOfSort + '/average').once('value', function(snap) {
        snap.forEach(function(s) {
          var dispName = document.createElement('p')
          var delBtn = document.createElement('i')
          var teamDisp = document.createElement('div')
          var seper = document.createElement('hr')

          teamDisp.appendChild(dispName)
          teamDisp.appendChild(delBtn)
          teamsDisplay.appendChild(teamDisp)

          if (typeOfSort == "cubesOnVault") {
              dispName.innerHTML = s.val().name + ", Team " + s.val().number + " average: " + s.val().cubesOnVault.average
          } else if (typeOfSort == "cubesOnScale") {
            dispName.innerHTML = s.val().name + ", Team " + s.val().number + " average: " + s.val().cubesOnScale.average
          } else if (typeOfSort == "cubesOnTSwitch") {
            dispName.innerHTML = s.val().name + ", Team " + s.val().number + " average: " + s.val().cubesOnTSwitch.average
          } else if (typeOfSort == "cubesOnOSwitch") {
            dispName.innerHTML = s.val().name + ", Team " + s.val().number + " average: " + s.val().cubesOnOSwitch.average
          }

          delBtn.innerHTML = "delete"
          delBtn.className += "material-icons delBtns"
          teamDisp.className += "eventDisplayer"
          dispName.className += "newTeamName"
          dispName.id = s.key
          teamsDisplay.appendChild(seper)
          seper.className += "mySep"

          teamDisp.onclick = function() {
            firebase.database().ref('users/' + user.uid + '/currentEvent/currentTeam/').set(s.val())
            window.location = "teaminfo.html"
          }

          delBtn.onclick = function() {
            db.ref('users/' + user.uid + '/currentEvent/teams/' + s.key).remove()
          }
        })
        })
      })


  }
})

addMatch.addEventListener('click', function() {
  window.location = "addMatch.html"
})

function displayMatches(user) {
    db.ref('users/' + user.uid + '/currentEvent/matches/').once('value', function(snap) {
      snap.forEach(function(s) {
        var dispName = document.createElement('p')
        var delBtn = document.createElement('i')
        var teamDisp = document.createElement('div')
        var seper = document.createElement('hr')

        teamDisp.appendChild(dispName)
        teamDisp.appendChild(delBtn)
        matchesPanel.appendChild(teamDisp)

        dispName.innerHTML =  s.val().matchType + " " + s.val().matchNo
        delBtn.innerHTML = "delete"
        delBtn.className += "material-icons delBtns"
        teamDisp.className += "eventDisplayer"
        dispName.className += "newTeamName"
        dispName.id = s.key
        matchesPanel.appendChild(seper)
        seper.className += "mySep"

        teamDisp.onclick = function() {
          db.ref('users/' + user.uid + '/currentEvent/currentMatch/').set(s.val())
          window.location = "matchInfo.html"
        }

        delBtn.onclick = function() {
          db.ref('users/' + user.uid + '/currentEvent/matches/' + s.key).remove()
        }


      })
    })
}

function displayTeams(user) {
  db.ref('users/' + user.uid + '/currentEvent/teams').once('value', function(snap) {
    snap.forEach(function(s) {
      console.log(s)
      var dispName = document.createElement('p')
      var delBtn = document.createElement('i')
      var teamDisp = document.createElement('div')
      var seper = document.createElement('hr')

      teamDisp.appendChild(dispName)
      teamDisp.appendChild(delBtn)
      teamsDisplay.appendChild(teamDisp)

      dispName.innerHTML = s.val().name + ", Team " + s.val().number
      delBtn.innerHTML = "delete"
      delBtn.className += "material-icons delBtns"
      teamDisp.className += "eventDisplayer"
      dispName.className += "newTeamName"
      dispName.id = s.key
      teamsDisplay.appendChild(seper)
      seper.className += "mySep"

      teamDisp.onclick = function() {
        var newCurrentTeam = {
          name: s.val().name,
          teamNo: s.val().number,
          additional: s.val().additional,
          autorundb: s.val().autorundb,
          climboptdb: s.val().climboptdb,
          skey: s.val().skey,
          intakedb: s.val().intakedb,
          scaleautondb: s.val().scaleautondb,
          scaleoptdb: s.val().scaleoptdb,
          switchautondb: s.val().switchautondb,
          switchoptdb: s.val().switchoptdb
        }
        firebase.database().ref('users/' + user.uid + '/currentEvent/currentTeam/').set(s.val())
        window.location = "teaminfo.html"
      }

      delBtn.onclick = function() {
        db.ref('users/' + user.uid + '/currentEvent/teams/' + s.key).remove()
      }
    })
  })
}

create.addEventListener('click', function() {
  window.location = "createTeam.html"
})
