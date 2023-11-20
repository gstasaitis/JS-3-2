var names = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"];

console.log(names[0])
console.log(names[names.length - 1])

var numbers = prompt("Įveskite skaičių 1-6")
for(var i = 0; i < names.length; i++){
    var number = i + 1;
    console.log(number + " : " + names[i])
}
console.log(names[numbers -1])




var skaiciuMasyvas = [2, 3, 4, 5, 6]
var suma = 0
    for (var i = 0; i < skaiciuMasyvas.length; i++ ) {
    suma += skaiciuMasyvas[i];
}
        console.log(suma)

    var average = skaiciuMasyvas.reduce((a, b) => a + b, 0) /skaiciuMasyvas.length;
        console.log(average)

    var didziausias = skaiciuMasyvas[0];

for (var i = 0; i < skaiciuMasyvas.length; i++) {
  if (skaiciuMasyvas[i] > didziausias ) {
    didziausias = skaiciuMasyvas[i];
  }
}
    console.log(didziausias);

    var maziausias = skaiciuMasyvas[0];

for (var i = 0; i < skaiciuMasyvas.length; i++) {
    if (skaiciuMasyvas[i] < maziausias) {
            maziausias = skaiciuMasyvas[i];
    }
}
    console.log(maziausias);
