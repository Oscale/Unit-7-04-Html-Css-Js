document.getElementById('submit').addEventListener('click', Activate)

let urage = 0
let urday = 'Noday'

function Activate () {
  urage = document.getElementById('userage').value
  urday = document.getElementById('userday').value

  urage = parseInt(urage)

  if ((urday == 'Tuesday' || urday == 'Thursday') || (urage >= 12 && urage <= 21)) { 
    document.getElementById('output').innerHTML = 'You get student pricing! At 4.99\$ an addmission!'
  } else {
    document.getElementById('output').innerHTML = 'Sadly you get regular pricing at 7.99\$ an addmission'
  }
}
