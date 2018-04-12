// fetch firebase
var db = firebase.database()

const type = document.getElementById('matchT');

// fetch the DOM for the red side

// alliance section
const points = document.getElementById('points')
const won = document.getElementById('won')
const qualpoints = document.getElementById('qualpoints')
const rankingpoints = document.getElementById('rankingpoints')
const parkclimbpoints = document.getElementById('parkclimbpoints')
const autopoints = document.getElementById('autopoints')
const ownerpoints = document.getElementById('ownerpoints')
const vaultpoints = document.getElementById('vaultpoints')


// for team1
const teamNo = document.getElementById('teamNo')
const cbase = document.getElementById('cbase')
const cscale = document.getElementById('cscale')
const ctswitch = document.getElementById('ctswitch')
const coswitch = document.getElementById('coswitch')
const yes = document.getElementById('yes') // can climb
const faults = document.getElementById('faults')

// for team2
const teamNo1 = document.getElementById('teamNo1')
const cbase1 = document.getElementById('cbase1')
const cscale1 = document.getElementById('cscale1')
const ctswitch1 = document.getElementById('ctswitch1')
const coswitch1 = document.getElementById('coswitch1')
const yes1 = document.getElementById('yes1') // can climb
const faults1 = document.getElementById('faults1')

// for team3
const teamNo2 = document.getElementById('teamNo2')
const cbase2 = document.getElementById('cbase2')
const cscale2 = document.getElementById('cscale2')
const ctswitch2 = document.getElementById('ctswitch2')
const coswitch2 = document.getElementById('coswitch2')
const yes2 = document.getElementById('yes2') // can climb
const faults2 = document.getElementById('faults2')

// fetch the DOM for the blue side

// alliance section
const points_1 = document.getElementById('points_1')
const won_1 = document.getElementById('won_1')
const qualpoints_1 = document.getElementById('qualpoints_1')
const rankingpoints_1 = document.getElementById('rankingpoints_1')
const parkclimbpoints_1 = document.getElementById('parkclimbpoints_1')
const autopoints_1 = document.getElementById('autopoints_1')
const ownerpoints_1 = document.getElementById('ownerpoints_1')
const vaultpoints_1 = document.getElementById('vaultpoints_1')

// for team1
const teamNo_1 = document.getElementById('teamNo_1')
const cbase_1 = document.getElementById('cbase_1')
const cscale_1 = document.getElementById('cscale_1')
const ctswitch_1 = document.getElementById('ctswitch_1')
const coswitch_1 = document.getElementById('coswitch_1')
const yes_1 = document.getElementById('yes_1') // can climb
const faults_1 = document.getElementById('faults_1')

// for team2
const teamNo1_1 = document.getElementById('teamNo1_1')
const cbase1_1 = document.getElementById('cbase1_1')
const cscale1_1 = document.getElementById('cscale1_1')
const ctswitch1_1 = document.getElementById('ctswitch1_1')
const coswitch1_1 = document.getElementById('coswitch1_1')
const yes1_1 = document.getElementById('yes1_1') // can climb
const faults1_1 = document.getElementById('faults1_1')

// for team3
const teamNo2_1 = document.getElementById('teamNo2_1')
const cbase2_1 = document.getElementById('cbase2_1')
const cscale2_1 = document.getElementById('cscale2_1')
const ctswitch2_1 = document.getElementById('ctswitch2_1')
const coswitch2_1 = document.getElementById('coswitch2_1')
const yes2_1 = document.getElementById('yes2_1') // can climb
const faults2_1 = document.getElementById('faults2_1')

// additional buttons
const back = document.getElementById('back')
const save = document.getElementById('save')


firebase.auth().onAuthStateChanged(function(u) {
  if (u) {
    save.addEventListener('click', function() {
      var teamOneClimb = 0;
      if (yes.checked == true) {
        teamOneClimb = 1;
      }
      var teamTwoClimb = 0;
      if (yes1.checked == true) {
        teamTwoClimb = 1
      }
      var teamThreeClimb = 0;
      if (yes2.checked == true) {
        teamThreeClimb = 1;
      }
      var teamFourClimb = 0;
      if (yes_1.checked == true) {
        teamFourClimb = 1;
      }
      var teamFiveClimb = 0;
      if (yes1_1.checked == true) {
        teamFiveClimb = 1;
      }
      var teamSixClimb = 0;
      if (yes2_1.checked == true) {
        teamSixClimb = 1;
      }

      var winer = "blue"
      if (won.checked == true) {
        winer = "red"
      }


      var redTeam = {
        totalPoints: points.value,
        qualificationPoints: qualpoints.value,
        rankingpoints: rankingpoints.value,
        parkpoints: parkclimbpoints.value,
        autonpoints: autopoints.value,
        ownershippoints: ownerpoints.value,
        vaultpoints: vaultpoints.value,

        teamOne: {
          teamNumber: teamNo.value,
          cubase: cbase.value,
          cuscale: cscale.value,
          cutswitch: ctswitch.value,
          cuoswitch: coswitch.value,
          climb: teamOneClimb,
          adCom: faults.value
        },
        teamTwo: {
          teamNumber: teamNo1.value,
          cubase: cbase1.value,
          cuscale: cscale1.value,
          cutswitch: ctswitch1.value,
          cuoswitch: coswitch1.value,
          climb: teamTwoClimb,
          adCom: faults1.value
        },
        teamThree: {
          teamNumber: teamNo2.value,
          cubase: cbase2.value,
          cuscale: cscale2.value,
          cutswitch: ctswitch2.value,
          cuoswitch: coswitch2.value,
          climb: teamThreeClimb,
          adCom: faults2.value
        }
      }

      var blueTeam = {
        totalPoints: points_1.value,
        qualificationPoints: qualpoints_1.value,
        rankingpoints: rankingpoints_1.value,
        parkpoints: parkclimbpoints_1.value,
        autonpoints: autopoints_1.value,
        ownershippoints: ownerpoints_1.value,
        vaultpoints: vaultpoints_1.value,

        teamOne: {
          teamNumber: teamNo_1.value,
          cubase: cbase_1.value,
          cuscale: cscale_1.value,
          cutswitch: ctswitch_1.value,
          cuoswitch: coswitch_1.value,
          climb: teamFourClimb,
          adCom: faults_1.value
        },
        teamTwo: {
          teamNumber: teamNo1_1.value,
          cubase: cbase1_1.value,
          cuscale: cscale1_1.value,
          cutswitch: ctswitch1_1.value,
          cuoswitch: coswitch1_1.value,
          climb: teamFiveClimb,
          adCom: faults1_1.value
        },
        teamThree: {
          teamNumber: teamNo2_1.value,
          cubase: cbase2_1.value,
          cuscale: cscale2_1.value,
          cutswitch: ctswitch2_1.value,
          cuoswitch: coswitch2_1.value,
          climb: teamSixClimb,
          adCom: faults2_1.value
        }
      }

      var newKey = firebase.database().ref().child('matchs').push().key

      var newMatch = {
        redTeams: {teamOne: teamNo.value, teamTwo: teamNo1.value, teamThree: teamNo2.value},
        blueTeams: {teamFour: teamNo_1.value, teamFive: teamNo1_1.value, teamSix: teamNo2_1.value},
        winner: winer,
        red: redTeam,
        blue: blueTeam,
        matchNo: document.getElementById('matchNo').value,
        matchType: type.options[type.selectedIndex].text
      }

      // update team data TODO: don't forget the error case

      firebase.database().ref('users/' + u.uid + '/currentEvent/teams').once('value', function(snap) {
        snap.forEach(function(s) {
          console.log(s.val().number);

          console.log(s.val().number == teamNo1.value);
          console.log(s.val().number == teamNo2.value);
          console.log(s.val().number == teamNo_1.value);
          console.log(s.val().number == teamNo1_1.value);
          console.log(s.val().number == teamNo2_1.value);

          if (s.val().number == teamNo.value) {
            // cubes on vault

            var newCDV = {
              total: parseInt(s.val().cubesOnVault.total) + parseInt(cbase.value),
              amount: s.val().cubesOnVault.amount + 1,
              average: (parseInt(s.val().cubesOnVault.total) + parseInt(cbase.value)) / (s.val().cubesOnVault.amount + 1),
            }

            // cubes on scale

            var newCDS = {
              total: parseInt(s.val().cubesOnScale.total) + parseInt(cscale.value),
              amount: s.val().cubesOnScale.amount + 1,
              average: (parseInt(s.val().cubesOnScale.total) + parseInt(cscale.value)) / (s.val().cubesOnScale.amount + 1),
            }

            // cubes on t switch
            var newCTS = {
              total: parseInt(s.val().cubesOnTSwitch.total) + parseInt(ctswitch.value),
              amount: s.val().cubesOnTSwitch.amount + 1,
              average: (parseInt(s.val().cubesOnTSwitch.total) + parseInt(ctswitch.value)) / (s.val().cubesOnTSwitch.amount + 1)
            }

            // cubes on o switch
            var newCOS = {
              total: parseInt(s.val().cubesOnOSwitch.total) + parseInt(coswitch.value),
              amount: s.val().cubesOnOSwitch.amount + 1,
              average: (parseInt(s.val().cubesOnOSwitch.total) + parseInt(coswitch.value)) / (s.val().cubesOnOSwitch.amount + 1),
            }

            // climb
            var newClimb = {
              total: s.val().climb.total + teamOneClimb,
              amount: s.val().climb.amount + 1,
              average: 100 * (s.val().climb.total + teamOneClimb) / (s.val().climb.amount + 1),
            }

            var newFaultKey = firebase.database().ref().child('fault').push().key

            var newFault = {
              cont: faults.value,
            }

            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnVault').set(newCDV)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnScale').set(newCDS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnTSwitch').set(newCTS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnOSwitch').set(newCOS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/climb').set(newClimb)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/robotFaults/' + newFaultKey).set(newFault)

            // alliance to teaminfo
            var newQual = {
              total: parseInt(s.val().qualificationPoints.total) + parseInt(qualpoints.value)
            }

            var newRankPoints = {
              total: parseInt(s.val().rankingPoints.total) + parseInt(rankingpoints.value)
            }

            var newParkPoints = {
              total: parseInt(s.val().parkpoints.total) + parseInt(parkclimbpoints.value)
            }

            var newAutoPoints = {
              total: parseInt(s.val().autopoints.total) + parseInt(autopoints.value)
            }

            var newOwnerPoints = {
                total: parseInt(s.val().ownershippoints.total) + parseInt(ownerpoints.value)
            }

            var newVaultPoints = {
              total: parseInt(s.val().vaultpoints.total) + parseInt(vaultpoints.value)
            }

            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/qualificationPoints').set(newQual)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/rankingPoints').set(newRankPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/parkpoints').set(newParkPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/autopoints').set(newAutoPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/ownershippoints').set(newOwnerPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/vaultpoints').set(newVaultPoints)



          } else if (s.val().number == teamNo1.value) {
            // cubes on vault

            var newCDV = {
              total: parseInt(s.val().cubesOnVault.total) + parseInt(cbase1.value),
              amount: s.val().cubesOnVault.amount + 1,
              average: (parseInt(s.val().cubesOnVault.total) + parseInt(cbase1.value)) / (s.val().cubesOnVault.amount + 1),
            }

            // cubes on scale

            var newCDS = {
              total: parseInt(s.val().cubesOnScale.total) + parseInt(cscale1.value),
              amount: s.val().cubesOnScale.amount + 1,
              average: (parseInt(s.val().cubesOnScale.total) + parseInt(cscale1.value)) / (s.val().cubesOnScale.amount + 1),
            }

            // cubes on t switch
            var newCTS = {
              total: parseInt(s.val().cubesOnTSwitch.total) + parseInt(ctswitch1.value),
              amount: s.val().cubesOnTSwitch.amount + 1,
              average: (parseInt(s.val().cubesOnTSwitch.total) + parseInt(ctswitch1.value)) / (s.val().cubesOnTSwitch.amount + 1),
            }

            // cubes on o switch
            var newCOS = {
              total: parseInt(s.val().cubesOnOSwitch.total) + parseInt(coswitch1.value),
              amount: s.val().cubesOnOSwitch.amount + 1,
              average: (parseInt(s.val().cubesOnOSwitch.total) + parseInt(coswitch1.value)) / (s.val().cubesOnOSwitch.amount + 1),
            }

            // climb
            var newClimb = {
              total: s.val().climb.total + teamTwoClimb,
              amount: s.val().climb.amount + 1,
              average: 100 * (s.val().climb.total + teamTwoClimb) / ( s.val().climb.amount + 1),
            }

            var newFaultKey = firebase.database().ref().child('fault').push().key

            var newFault = {
              cont: faults1.value,
            }

            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnVault').set(newCDV)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnScale').set(newCDS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnTSwitch').set(newCTS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnOSwitch').set(newCOS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/climb').set(newClimb)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/robotFaults/' + newFaultKey).set(newFault)

            var newQual = {
              total: parseInt(s.val().qualificationPoints.total) + parseInt(qualpoints.value)
            }

            var newRankPoints = {
              total: parseInt(s.val().rankingPoints.total) + parseInt(rankingpoints.value)
            }

            var newParkPoints = {
              total: parseInt(s.val().parkpoints.total) + parseInt(parkclimbpoints.value)
            }

            var newAutoPoints = {
              total: parseInt(s.val().autopoints.total) + parseInt(autopoints.value)
            }

            var newOwnerPoints = {
                total: parseInt(s.val().ownershippoints.total) + parseInt(ownerpoints.value)
            }

            var newVaultPoints = {
              total: parseInt(s.val().vaultpoints.total) + parseInt(vaultpoints.value)
            }

            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/qualificationPoints').set(newQual)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/rankingPoints').set(newRankPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/parkpoints').set(newParkPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/autopoints').set(newAutoPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/ownershippoints').set(newOwnerPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/vaultpoints').set(newVaultPoints)

          } else if (s.val().number == teamNo2.value) {
            // cubes on vault

            var newCDV = {
              total: parseInt(s.val().cubesOnVault.total) + parseInt(cbase2.value),
              amount: s.val().cubesOnVault.amount + 1,
              average: (parseInt(s.val().cubesOnVault.total) + parseInt(cbase2.value)) / (s.val().cubesOnVault.amount + 1),
            }

            // cubes on scale

            var newCDS = {
              total: parseInt(s.val().cubesOnScale.total) + parseInt(cscale2.value),
              amount: s.val().cubesOnScale.amount + 1,
              average: (parseInt(s.val().cubesOnScale.total) + parseInt(cscale2.value)) / (s.val().cubesOnScale.amount + 1),
            }

            // cubes on t switch
            var newCTS = {
              total: parseInt(s.val().cubesOnTSwitch.total) + parseInt(ctswitch2.value),
              amount: s.val().cubesOnTSwitch.amount + 1,
              average: (parseInt(s.val().cubesOnTSwitch.total) + parseInt(ctswitch2.value)) / (s.val().cubesOnTSwitch.amount + 1),
            }

            // cubes on o switch
            var newCOS = {
              total: parseInt(s.val().cubesOnOSwitch.total) + parseInt(coswitch2.value),
              amount: s.val().cubesOnOSwitch.amount + 1,
              average: (parseInt(s.val().cubesOnOSwitch.total) + parseInt(coswitch2.value)) / (s.val().cubesOnOSwitch.amount + 1),
            }

            // climb
            var newClimb = {
              total: s.val().climb.total + teamThreeClimb,
              amount: s.val().climb.amount + 1,
              average: 100 * (s.val().climb.total + teamThreeClimb) / (s.val().climb.amount + 1),
            }

            var newFaultKey = firebase.database().ref().child('fault').push().key
            var newFault = {
              cont: faults2.value,
            }

            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnVault').set(newCDV)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnScale').set(newCDS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnTSwitch').set(newCTS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnOSwitch').set(newCOS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/climb').set(newClimb)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/robotFaults/' + newFaultKey).set(newFault)

            var newQual = {
              total: parseInt(s.val().qualificationPoints.total) + parseInt(qualpoints.value)
            }

            var newRankPoints = {
              total: parseInt(s.val().rankingPoints.total) + parseInt(rankingpoints.value)
            }

            var newParkPoints = {
              total: parseInt(s.val().parkpoints.total) + parseInt(parkclimbpoints.value)
            }

            var newAutoPoints = {
              total: parseInt(s.val().autopoints.total) + parseInt(autopoints.value)
            }

            var newOwnerPoints = {
                total: parseInt(s.val().ownershippoints.total) + parseInt(ownerpoints.value)
            }

            var newVaultPoints = {
              total: parseInt(s.val().vaultpoints.total) + parseInt(vaultpoints.value)
            }

            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/qualificationPoints').set(newQual)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/rankingPoints').set(newRankPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/parkpoints').set(newParkPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/autopoints').set(newAutoPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/ownershippoints').set(newOwnerPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/vaultpoints').set(newVaultPoints)

          } else if (s.val().number == teamNo_1.value) {
            // cubes on vault

            var newCDV = {
              total: parseInt(s.val().cubesOnVault.total) + parseInt(cbase_1.value),
              amount: s.val().cubesOnVault.amount + 1,
              average: (parseInt(s.val().cubesOnVault.total) + parseInt(cbase_1.value)) / (s.val().cubesOnVault.amount + 1),
            }

            // cubes on scale

            var newCDS = {
              total: parseInt(s.val().cubesOnScale.total) + parseInt(cscale_1.value),
              amount: s.val().cubesOnScale.amount + 1,
              average: (parseInt(s.val().cubesOnScale.total) + parseInt(cscale_1.value)) / (s.val().cubesOnScale.amount + 1),
            }

            // cubes on t switch
            var newCTS = {
              total: parseInt(s.val().cubesOnTSwitch.total) + parseInt(ctswitch_1.value),
              amount: s.val().cubesOnTSwitch.amount + 1,
              average: (parseInt(s.val().cubesOnTSwitch.total) + parseInt(ctswitch_1.value)) / (s.val().cubesOnTSwitch.amount + 1),
            }

            // cubes on o switch
            var newCOS = {
              total: parseInt(s.val().cubesOnOSwitch.total) + parseInt(coswitch_1.value),
              amount: s.val().cubesOnOSwitch.amount + 1,
              average: (parseInt(s.val().cubesOnOSwitch.total) + parseInt(coswitch_1.value)) / (s.val().cubesOnOSwitch.amount + 1),
            }

            // climb
            var newClimb = {
              total: s.val().climb.total + teamFourClimb,
              amount: s.val().climb.amount + 1,
              average: 100 * (s.val().climb.total + teamFourClimb) / (s.val().climb.amount + 1),
            }

            var newFaultKey = firebase.database().ref().child('fault').push().key

            var newFault = {
              cont: faults_1.value,
            }

            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnVault').set(newCDV)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnScale').set(newCDS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnTSwitch').set(newCTS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnOSwitch').set(newCOS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/climb').set(newClimb)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/robotFaults/' + newFaultKey).set(newFault)

            var newQual = {
              total: parseInt(s.val().qualificationPoints.total) + parseInt(qualpoints_1.value)
            }

            var newRankPoints = {
              total: parseInt(s.val().rankingPoints.total) + parseInt(rankingpoints_1.value)
            }

            var newParkPoints = {
              total: parseInt(s.val().parkpoints.total) + parseInt(parkclimbpoints_1.value)
            }

            var newAutoPoints = {
              total: parseInt(s.val().autopoints.total) + parseInt(autopoints_1.value)
            }

            var newOwnerPoints = {
                total: parseInt(s.val().ownershippoints.total) + parseInt(ownerpoints_1.value)
            }

            var newVaultPoints = {
              total: parseInt(s.val().vaultpoints.total) + parseInt(vaultpoints_1.value)
            }

            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/qualificationPoints').set(newQual)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/rankingPoints').set(newRankPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/parkpoints').set(newParkPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/autopoints').set(newAutoPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/ownershippoints').set(newOwnerPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/vaultpoints').set(newVaultPoints)


          } else if (s.val().number == teamNo1_1.value) {
            // cubes on vault

            var newCDV = {
              total: parseInt(s.val().cubesOnVault.total) + parseInt(cbase1_1.value),
              amount: s.val().cubesOnVault.amount + 1,
              average: (parseInt(s.val().cubesOnVault.total) + parseInt(cbase1_1.value)) / (s.val().cubesOnVault.amount + 1),
            }

            // cubes on scale

            var newCDS = {
              total: parseInt(s.val().cubesOnScale.total) + parseInt(cscale1_1.value),
              amount: s.val().cubesOnScale.amount + 1,
              average: (parseInt(s.val().cubesOnScale.total) + parseInt(cscale1_1.value)) / (s.val().cubesOnScale.amount + 1),
            }

            // cubes on t switch
            var newCTS = {
              total: parseInt(s.val().cubesOnTSwitch.total) + parseInt(ctswitch1_1.value),
              amount: s.val().cubesOnTSwitch.amount + 1,
              average: (parseInt(s.val().cubesOnTSwitch.total) + parseInt(ctswitch1_1.value)) / (s.val().cubesOnTSwitch.amount + 1),
            }

            // cubes on o switch
            var newCOS = {
              total: parseInt(s.val().cubesOnOSwitch.total) + parseInt(coswitch1_1.value),
              amount: s.val().cubesOnOSwitch.amount + 1,
              average: (parseInt(s.val().cubesOnOSwitch.total) + parseInt(coswitch1_1.value)) / (s.val().cubesOnOSwitch.amount + 1),
            }

            // climb
            var newClimb = {
              total: s.val().climb.total + teamFiveClimb,
              amount: s.val().climb.amount + 1,
              average: 100 * (s.val().climb.total + teamFiveClimb) / (s.val().climb.amount + 1),
            }

            var newFaultKey = firebase.database().ref().child('fault').push().key

            var newFault = {
              cont: faults1_1.value,
            }

            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnVault').set(newCDV)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnScale').set(newCDS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnTSwitch').set(newCTS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnOSwitch').set(newCOS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/climb').set(newClimb)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/robotFaults/' + newFaultKey).set(newFault)

            var newQual = {
              total: parseInt(s.val().qualificationPoints.total) + parseInt(qualpoints_1.value)
            }

            var newRankPoints = {
              total: parseInt(s.val().rankingPoints.total) + parseInt(rankingpoints_1.value)
            }

            var newParkPoints = {
              total: parseInt(s.val().parkpoints.total) + parseInt(parkclimbpoints_1.value)
            }

            var newAutoPoints = {
              total: parseInt(s.val().autopoints.total) + parseInt(autopoints_1.value)
            }

            var newOwnerPoints = {
                total: parseInt(s.val().ownershippoints.total) + parseInt(ownerpoints_1.value)
            }

            var newVaultPoints = {
              total: parseInt(s.val().vaultpoints.total) + parseInt(vaultpoints_1.value)
            }

            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/qualificationPoints').set(newQual)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/rankingPoints').set(newRankPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/parkpoints').set(newParkPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/autopoints').set(newAutoPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/ownershippoints').set(newOwnerPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/vaultpoints').set(newVaultPoints)


          } else if (s.val().number == teamNo2_1.value) {
            // cubes on vault

            var newCDV = {
              total: parseInt(s.val().cubesOnVault.total) + parseInt(cbase2_1.value),
              amount: s.val().cubesOnVault.amount + 1,
              average: (parseInt(s.val().cubesOnVault.total) + parseInt(cbase2_1.value)) / (s.val().cubesOnVault.amount + 1),
            }

            // cubes on scale

            var newCDS = {
              total: parseInt(s.val().cubesOnScale.total) + parseInt(cscale2_1.value),
              amount: s.val().cubesOnScale.amount + 1,
              average: (parseInt(s.val().cubesOnScale.total) + parseInt(cscale2_1.value)) / (s.val().cubesOnScale.amount + 1),
            }

            // cubes on t switch
            var newCTS = {
              total: parseInt(s.val().cubesOnTSwitch.total) + parseInt(ctswitch2_1.value),
              amount: s.val().cubesOnTSwitch.amount + 1,
              average: (parseInt(s.val().cubesOnTSwitch.total) + parseInt(ctswitch2_1.value)) / (s.val().cubesOnTSwitch.amount + 1),
            }

            // cubes on o switch
            var newCOS = {
              total: parseInt(s.val().cubesOnOSwitch.total) + parseInt(coswitch2_1.value),
              amount: s.val().cubesOnOSwitch.amount + 1,
              average: (parseInt(s.val().cubesOnOSwitch.total) + parseInt(coswitch2_1.value)) / (s.val().cubesOnOSwitch.amount + 1),
            }

            // climb
            var newClimb = {
              total: s.val().climb.total + teamSixClimb,
              amount: s.val().climb.amount + 1,
              average: 100 * (s.val().climb.total + teamSixClimb) / (s.val().climb.amount + 1),
            }

            var newFaultKey = firebase.database().ref().child('fault').push().key
            var newFault = {
              cont: faults2_1.value,
            }

            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnVault').set(newCDV)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnScale').set(newCDS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnTSwitch').set(newCTS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/cubesOnOSwitch').set(newCOS)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/climb').set(newClimb)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/robotFaults/' + newFaultKey).set(newFault)

            var newQual = {
              total: parseInt(s.val().qualificationPoints.total) + parseInt(qualpoints_1.value)
            }

            var newRankPoints = {
              total: parseInt(s.val().rankingPoints.total) + parseInt(rankingpoints_1.value)
            }

            var newParkPoints = {
              total: parseInt(s.val().parkpoints.total) + parseInt(parkclimbpoints_1.value)
            }

            var newAutoPoints = {
              total: parseInt(s.val().autopoints.total) + parseInt(autopoints_1.value)
            }

            var newOwnerPoints = {
                total: parseInt(s.val().ownershippoints.total) + parseInt(ownerpoints_1.value)
            }

            var newVaultPoints = {
              total: parseInt(s.val().vaultpoints.total) + parseInt(vaultpoints_1.value)
            }

            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/qualificationPoints').set(newQual)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/rankingPoints').set(newRankPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/parkpoints').set(newParkPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/autopoints').set(newAutoPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/ownershippoints').set(newOwnerPoints)
            firebase.database().ref('users/' + u.uid + '/currentEvent/teams/' + s.key + '/vaultpoints').set(newVaultPoints)

          }
        })
      })

      firebase.database().ref('users/' + u.uid + '/currentEvent/matches/' + newKey + '/').set(newMatch)
      console.log(document.getElementById('matchNo').value);
      // window.location = "myEvent.html"
      document.getElementById('res').innerHTML = "Please pres to the back button, your data is saved to the database"
    })
  }
})

back.addEventListener('click', function() {
  window.location = "myEvent.html"
})
