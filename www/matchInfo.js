// fetch firebase
var db = firebase.database()

// fetch the DOM
const d1 = document.getElementById('d1')
const d2 = document.getElementById('d2')
const d3 = document.getElementById('d3')
const d4 = document.getElementById('d4')
const d5 = document.getElementById('d5')
const d6 = document.getElementById('d6')
const d7 = document.getElementById('d7')
const d8 = document.getElementById('d8')
const d9 = document.getElementById('d9')
const d10 = document.getElementById('d10')
const d11 = document.getElementById('d11')
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
const d24 = document.getElementById('d24')
const d25 = document.getElementById('d25')
const d26 = document.getElementById('d26')
const d27 = document.getElementById('d27')
const d28 = document.getElementById('d28')


const d1_1 = document.getElementById('d1_1')
const d2_1 = document.getElementById('d2_1')
const d3_1 = document.getElementById('d3_1')
const d4_1 = document.getElementById('d4_1')
const d5_1 = document.getElementById('d5_1')
const d6_1 = document.getElementById('d6_1')
const d7_1 = document.getElementById('d7_1')
const d8_1 = document.getElementById('d8_1')
const d9_1= document.getElementById('d9_1')
const d10_1 = document.getElementById('d10_1')
const d11_1 = document.getElementById('d11_1')
const d12_1 = document.getElementById('d12_1')
const d13_1 = document.getElementById('d13_1')
const d14_1 = document.getElementById('d14_1')
const d15_1 = document.getElementById('d15_1')
const d16_1 = document.getElementById('d16_1')
const d17_1 = document.getElementById('d17_1')
const d18_1 = document.getElementById('d18_1')
const d19_1 = document.getElementById('d19_1')
const d20_1 = document.getElementById('d20_1')
const d21_1 = document.getElementById('d21_1')
const d22_1 = document.getElementById('d22_1')
const d23_1 = document.getElementById('d23_1')
const d24_1 = document.getElementById('d24_1')
const d25_1 = document.getElementById('d25_1')
const d26_1 = document.getElementById('d26_1')
const d27_1 = document.getElementById('d27_1')
const d28_1 = document.getElementById('d28_1')

const back = document.getElementById('back')
const matchNoTypeDisplay = document.getElementById('matchNoTypeDisplay')


firebase.auth().onAuthStateChanged(function(u) {
  if (u) {
    firebase.database().ref('users/' + u.uid + '/currentEvent/currentMatch/').once('value', function(s) {
      matchNoTypeDisplay.innerHTML = s.val().matchType + " " + s.val().matchNo
      d1.innerHTML = "Total points " + s.val().red.totalPoints
      d2.innerHTML = "Qualification points " + s.val().red.qualificationPoints
      d3.innerHTML = "Ranking points: " + s.val().red.rankingpoints
      d4.innerHTML = "Park/Climb points " + s.val().red.parkpoints
      d5.innerHTML = "Autonomous points " + s.val().red.autonpoints
      d6.innerHTML = "Ownership points " + s.val().red.ownershippoints
      d7.innerHTML = "Vault points" + s.val().red.vaultpoints
      d8.innerHTML = "Team#" + s.val().redTeams.teamOne
      d9.innerHTML = "Cubes delivered to vault " + s.val().red.teamOne.cubase
      d10.innerHTML = "Cubes on scale " + s.val().red.teamOne.cuscale
      d11.innerHTML = "Cubes on team switch " + s.val().red.teamOne.cutswitch
      d12.innerHTML = "Cubes on opponent switch " + s.val().red.teamOne.cuoswitch
      d13.innerHTML = "Climb Status (1-0) " + s.val().red.teamOne.climb
      d14.innerHTML = "Robot Faults" + s.val().red.teamOne.adCom
      d15.innerHTML = "Team#" + s.val().redTeams.teamTwo
      d16.innerHTML = "Cubes delivered to vault " + s.val().red.teamTwo.cubase
      d17.innerHTML = "Cubes on scale " + s.val().red.teamTwo.cuscale
      d18.innerHTML = "Cubes on team switch " + s.val().red.teamTwo.cutswitch
      d19.innerHTML = "Cubes on opponent switch " + s.val().red.teamTwo.cuoswitch
      d20.innerHTML = "Climb Status (1-0) " + s.val().red.teamTwo.climb
      d21.innerHTML = "Robot Faults" + s.val().red.teamTwo.adCom
      d22.innerHTML = "Team#" + s.val().redTeams.teamThree
      d23.innerHTML = "Cubes delivered to vault " + s.val().red.teamThree.cubase
      d24.innerHTML = "Cubes on scale " + s.val().red.teamThree.cuscale
      d25.innerHTML = "Cubes on team switch " + s.val().red.teamThree.cutswitch
      d26.innerHTML = "Cubes on opponent switch " + s.val().red.teamThree.cuoswitch
      d27.innerHTML = "Climb Status (1-0) " + s.val().red.teamThree.climb
      d28.innerHTML = "Robot Faults" + s.val().red.teamThree.adCom


      d1_1.innerHTML = "Total points " + s.val().blue.totalPoints
      d2_1.innerHTML = "Qualification points " + s.val().blue.qualificationPoints
      d3_1.innerHTML = "Ranking points: " + s.val().blue.rankingpoints
      d4_1.innerHTML = "Park/Climb points " + s.val().blue.parkpoints
      d5_1.innerHTML = "Autonomous points " + s.val().blue.autonpoints
      d6_1.innerHTML = "Ownership points " + s.val().blue.ownershippoints
      d7_1.innerHTML = "Vault points" + s.val().blue.vaultpoints
      d8_1.innerHTML = "Team#" + s.val().blueTeams.teamFour
      d9_1.innerHTML = "Cubes delivered to vault " + s.val().blue.teamOne.cubase
      d10_1.innerHTML = "Cubes on scale " + s.val().blue.teamOne.cuscale
      d11_1.innerHTML = "Cubes on team switch " + s.val().blue.teamOne.cutswitch
      d12_1.innerHTML = "Cubes on opponent switch " + s.val().blue.teamOne.cuoswitch
      d13_1.innerHTML = "Climb Status (1-0) " + s.val().blue.teamOne.climb
      d14_1.innerHTML = "Robot Faults" + s.val().blue.teamOne.adCom
      d15_1.innerHTML = "Team#" + s.val().blueTeams.teamFive
      d16_1.innerHTML = "Cubes delivered to vault " + s.val().blue.teamTwo.cubase
      d17_1.innerHTML = "Cubes on scale " + s.val().blue.teamTwo.cuscale
      d18_1.innerHTML = "Cubes on team switch " + s.val().blue.teamTwo.cutswitch
      d19_1.innerHTML = "Cubes on opponent switch " + s.val().blue.teamTwo.cuoswitch
      d20_1.innerHTML = "Climb Status (1-0) " + s.val().blue.teamTwo.climb
      d21_1.innerHTML = "Robot Faults" + s.val().blue.teamTwo.adCom
      d22_1.innerHTML = "Team#" + s.val().blueTeams.teamSix
      d23_1.innerHTML = "Cubes delivered to vault " + s.val().blue.teamThree.cubase
      d24_1.innerHTML = "Cubes on scale " + s.val().blue.teamThree.cuscale
      d25_1.innerHTML = "Cubes on team switch " + s.val().blue.teamThree.cutswitch
      d26_1.innerHTML = "Cubes on opponent switch " + s.val().blue.teamThree.cuoswitch
      d27_1.innerHTML = "Climb Status (1-0) " + s.val().blue.teamThree.climb
      d28_1.innerHTML = "Robot Faults" + s.val().blue.teamThree.adCom

    })
  }
})

back.addEventListener('click', function() {
  window.location = "myEvent.html"
})
