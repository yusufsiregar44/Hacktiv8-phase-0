// Competencies: Functions
/*
Instruksi
=========
Buatlah beberapa function berikut:
1. mergeStrings, yang menerima empat parameter berupa str1, str2, str3, dan str4.
Function akan menggabungkan keempat string tersebut dengan simbol - sebagai pemisah.
  contoh
  -----
  input: mergeStrings('hello', 'world', 'nice', 'day')
  output: 'hello-world-nice-day'

2. evenSiblings, yang menerima satu parameter berupa angka, dimana setiap angka
yang dimulai dari 1 menuju angka tersebut, semua angka yang genap masuk ke dalam
string.
Return string tersebut.
  contoh
  ------
  input: evenSiblings(15)
  proses: dari 0 - 15 yang habis dibagi 2: 2 4 6 8 10 12 14
  output: 2 4 6 8 10 12 14

3. remainder, yang menerima dua parameter berupa num1 dan num2.
Function tersebut akan mendapatkan sisa bagi num1 dengan num2 dan mereturn
sisa bagi-nya. Note. sisa bagi berbeda dengan hasil bagi!
  contoh
  ------
  input: remainder(7, 3)
  output: 1
*/

function mergeStrings(str1, str2, str3, str4) {
  return str1 + "-" + str2 + "-" + str3 + "-" + str4;
}

function evenSiblings(num) {
  var a = 1;
  var s = "";

  for (var i = 1; i <= num; i++) {
    var inspector = a % 2;

    if (inspector === 0) {
      var strA = String(a);
      s += strA + " ";
    }
    a ++;
  }
  return s;
}
//   while (counter <= num) {
//     var inspector = a % 2;
//     if (inspector === 0) {
//       var strA = String(a);
//       s = strA + " ";
//     }
//     counter ++;
//     a ++;
//   }
//   return s;
// }

function remainder (num1, num2) {
  var sisaBagi = num1 % num2
  return sisaBagi;
}

console.log(mergeStrings('hello', 'world', 'nice', 'day'));
console.log(evenSiblings(14));
console.log(remainder (7, 3));
