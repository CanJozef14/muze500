// fetch firebase
var db = firebase.database()

//fetch the DOM
const teamNoDisplay = document.getElementById('teamNoDisplay')
const d1 = document.getElementById('d1') // team name
const d2 = document.getElementById('d2') // team no
const d3 = document.getElementById('d3') // match stats

const d4 = document.getElementById('d4') // intake
const d5 = document.getElementById('d5') // switch
const d6 = document.getElementById('d6') // scale
const d7 = document.getElementById('d7') // climbing

const d8 = document.getElementById('d8') // autorun
const d9 = document.getElementById('d9') // switch
const d10 = document.getElementById('d10') // scale

const d11 = document.getElementById('d11') // additional comments

const d12 = document.getElementById('d12')
const d13 = document.getElementById('d13')
const d14 = document.getElementById('d14')
const d15 = document.getElementById('d15')
const d16 = document.getElementById('d16')
const d17 = document.getElementById('d17')
const d18 = document.getElementById('d18')
const d19 = document.getElementById('d19')
const d20 = document.getElementById('d20')
const d21 = document.getElementById('d21')
const d22 = document.getElementById('d22')
const d23 = document.getElementById('d23')


const back = document.getElementById('back')
const editTeam = document.getElementById('editTeam')





firebase.auth().onAuthStateChanged(function(u) {
  if (u) {
    db.ref('users/' + u.uid + '/currentEvent/currentTeam/').once('value', function(s) {
      teamNoDisplay.innerHTML = s.val().name + ", Team#" + s.val().number
      d1.innerHTML = "Team Name: " + s.val().name
      d2.innerHTML = "Team no: " + s.val().number
      d3.innerHTML = "Match stats not available yet"
      d4.innerHTML = "Intake: " + s.val().intakedb
      d5.innerHTML = "Switch: " + s.val().switchoptdb
      d6.innerHTML = "Scale: " + s.val().scaleoptdb
      d7.innerHTML = "Climbing: " + s.val().climboptdb
      d8.innerHTML = "Auto-run: " + s.val().autorundb
      d9.innerHTML = "Switch: " + s.val().switchautondb
      d10.innerHTML = "Scale: " + s.val().scaleautondb
      d11.innerHTML = s.val().additional
      d12.innerHTML = "Average cubes on vault: " + (parseInt(s.val().cubesOnVault.total) / parseInt(s.val().cubesOnVault.amount))
      d13.innerHTML = "Average cubes on scale: " + (parseInt(s.val().cubesOnScale.total) / parseInt(s.val().cubesOnScale.amount))
      d14.innerHTML = "Average cubes on team switch: " + (parseInt(s.val().cubesOnTSwitch.total) / parseInt(s.val().cubesOnTSwitch.amount))
      d15.innerHTML = "Average cubes on opponent switch: " + (parseInt(s.val().cubesOnOSwitch.total) / parseInt(s.val().cubesOnOSwitch.amount))
      d16.innerHTML = "Climbing percentile: " + (100 * parseInt(s.val().climb.amount) / parseInt(s.val().climb.total)) + "% "
      var faults = s.val().robotFaults
      db.ref('users/' + u.uid + '/currentEvent/currentTeam/robotFaults/').once('value', function(e) {
        e.forEach(function(r) {
          console.log(r.val().cont);
          var newFault = document.createElement('p')
          d17.appendChild(newFault)
          newFault.innerHTML = r.val().cont
        })
      })
      d18.innerHTML = "Total qualification points: " + s.val().qualificationPoints.total
      d19.innerHTML = "Total ranking points: " + s.val().rankingPoints.total
      d20.innerHTML = "Total park points: " + s.val().parkpoints.total
      d21.innerHTML = "Total autonomous points: " + s.val().autopoints.total
      d22.innerHTML = "Total ownership points: " + s.val().ownershippoints.total
      d23.innerHTML = "Total vault points: " + s.val().vaultpoints.total




    })
    editTeam.addEventListener('click', function() {
      window.location = "editCurrentTeam.html"
    })
  }
})

back.addEventListener('click', function() {
  window.location = "myEvent.html"
})
