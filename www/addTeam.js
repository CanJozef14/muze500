// fetch firebase
var db = firebase.database()

//fetch the DOM
const teamName = document.getElementById('teamName')
const teamNo = document.getElementById('teamNo')

// all the values
const opt1 = document.getElementById('opt1')
const opt2 = document.getElementById('opt2')
const opt3 = document.getElementById('opt3')
const opt4 = document.getElementById('opt4')
const opt5 = document.getElementById('opt5')

const opt1_2 = document.getElementById('opt1_2')
const opt2_2 = document.getElementById('opt2_2')
const opt3_2 = document.getElementById('opt3_2')
const opt4_2 = document.getElementById('opt4_2')
const opt5_2 = document.getElementById('opt5_2')

const opt1_3 = document.getElementById('opt1_3')
const opt2_3 = document.getElementById('opt2_3')
const opt3_3 = document.getElementById('opt3_3')
const opt4_3 = document.getElementById('opt4_3')
const opt5_3 = document.getElementById('opt5_3')

const opt1_4 = document.getElementById('opt1_4')
const opt2_4 = document.getElementById('opt2_4')
const opt3_4 = document.getElementById('opt3_4')
const opt4_4 = document.getElementById('opt4_4')
const opt5_4 = document.getElementById('opt5_4')

const autorun = document.getElementById('autorun')
const switchh = document.getElementById('switch')
const scale = document.getElementById('scale')

const adcom = document.getElementById('adcom')


const goBack = document.getElementById('goBack')
const addTeam = document.getElementById('addTeam')

firebase.auth().onAuthStateChanged(function(u) {
  if (u) {
    addTeam.addEventListener('click', function() {
      var intake;
      var switchopt;
      var scaleopt;
      var climbopt;

      var autorunauton = 0
      var switchauton = 0
      var scaleauton = 0

      if (autorun.checked) {
        autorunauton = 1
      }
      if (switchh.checked) {
        switchauton = 1
      }
      if (scale.checked) {
        scaleauton = 1
      }

      if (opt1.checked) {
        intake = 1;
      } else if (opt2.checked) {
        intake = 2;
      } else if (opt3.checked) {
        intake = 3;
      } else if (opt4.checked) {
        intake = 5;
      } else if (opt5.checked) {
        intake = 5;
      }

      if (opt1_2.checked) {
        switchopt = 1;
      } else if (opt2_2.checked) {
        switchopt = 2;
      } else if (opt3_2.checked) {
        switchopt = 3;
      } else if (opt4_2.checked) {
        switchopt = 5;
      } else if (opt5_2.checked) {
        switchopt = 5;
      }

      if (opt1_3.checked) {
        scaleopt = 1;
      } else if (opt2_3.checked) {
        scaleopt = 2;
      } else if (opt3_3.checked) {
        scaleopt = 3;
      } else if (opt4_3.checked) {
        scaleopt = 5;
      } else if (opt5_3.checked) {
        scaleopt = 5;
      }

      if (opt1_4.checked) {
        climbopt = 1;
      } else if (opt2_4.checked) {
        climbopt = 2;
      } else if (opt3_4.checked) {
        climbopt = 3;
      } else if (opt4_4.checked) {
        climbopt = 5;
      } else if (opt5_4.checked) {
        climbopt = 5;
      }

      var newKey = firebase.database().ref().child('teams').push().key
      var newTeam = {
        name: teamName.value,
        number: teamNo.value,
        skey: newKey,
        intakedb: intake,
        switchoptdb: switchopt,
        scaleoptdb: scaleopt,
        climboptdb: climbopt,
        autorundb: autorunauton,
        switchautondb: switchauton,
        scaleautondb: scaleauton,
        additional: adcom.value,
        cubesOnVault: {total: 0, amount: 0},
        cubesOnScale: {total: 0, amount: 0},
        cubesOnTSwitch: {total: 0, amount: 0},
        cubesOnOSwitch: {total: 0, amount: 0},
        climb: {total: 0, amount: 0},
        qualificationPoints: {total: 0},
        rankingPoints: {total: 0},
        parkpoints: {total: 0},
        autopoints: {total: 0},
        ownershippoints: {total: 0},
        vaultpoints: {total: 0},
      }
      db.ref('users/' + u.uid + '/currentEvent/teams/' + newKey).set(newTeam)
      window.location = "myEvent.html"
    })
  }
})

goBack.addEventListener('click', function() {
  window.location = "myEvent.html"
})
