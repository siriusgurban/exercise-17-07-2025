// const password = "123456"

// const num = prompt("Enter number");

// for (let i = 1; i < num; i++) if (i % 2 === 0) console.log(i);

//5
// const ball = Number(prompt("!-100 arasi eded daxil edin").trim());

// if (ball < 0 || ball > 100) console.log("duzgun eded daxil edin");
// else if (ball > 90 && ball <= 100) console.log("ela");
// else if (ball < 89 && ball > 70) console.log("yaxsi");
// else if (ball > 50 && ball < 69) console.log("kafi");
// else if (ball < 49 && ball >= 0) console.log("zeif");

// const name = prompt("Adninz:").trim()

//6
// const numUser = 7;

// let guess = 5;

// for (let i = 0; i < guess; guess--) {

//   const num = Number(prompt("Reqemi tapin"));
//   if (num === numUser) {
//     alert(`Tebrikler dogru tapdiniz ve ${5 - guess}`);
//   }
//   else {
//     alert("Tesseuf Ched limitini catdiniiz. Game over.");
//   }
// }

//7
// const day = Number(prompt("Reqem daxil edin").trim());

// switch (day) {
//   case 1:
//     alert("Monday");
//     break;
//   case 2:
//     alert("Tuesday");
//     break;
//   case 3:
//     alert("Wednesday");
//     break;
//   case 4:
//     alert("Thursday");
//     break;
//   case 5:
//     alert("Friday");
//     break;
//   case 6:
//     alert("Saturday");
//     break;
//   case 7:
//     alert("Sunday");
//     break;

//   default:
//     alert("Sehv daxil etmisiz");
//     break;
// }

// 8
// let a = Number(prompt("1-ci eded").trim());
// let b = Number(prompt("2-ci eded").trim());
// let c = Number(prompt("3-ci eded").trim());

// if (a > b + c) {
//   alert("Bomba kimi reqemdi");
// } else if (
//   a === null ||
//   b === null ||
//   c === null ||
//   a === "" ||
//   b === "" ||
//   c === ""
// ) {
//   alert("Zehment olmasa butun reqemleri duz daxil edin");
// } else if (a === b && b === c && a === c) {
//   alert("Butun reqemler eynidi");
// } else {
//   alert("sadece reqemdir");
// }

//9
// let a = prompt("1-ci eded").trim();
// let b = prompt("2-ci eded").trim();
// let c = prompt("3-ci eded").trim();

// if (
//   a.isNaN ||
//   a === null ||
//   b === null ||
//   c === null ||
//   a === "" ||
//   b === "" ||
//   c === ""
// ) {
//   alert("Duzgun eded daxil edin");
// } else {
//   if (a > b && b > c) {
//     alert("Zencir tamamlandir");
//   } else if (a < b && b < c) {
//     alert("Tersine zencir");
//   } else if (a === b && b === c) {
//     alert("Zencir pozuldu");
//   } else {
//     alert("Qarisiq siralama");
//   }
// }

// 10
// let num = Number(prompt("Tek rewqem daxi ledin"));

// let numNew;

// while (0 < num) {
//   if (num % 7 === 0) {
//     num = num / 2;
//     console.log(num / 7, "Reqem 7-e bolundu ve onu onun yarisi");
//   } else if (num % 5 === 0) {
//     num = num - 1;
//     console.log(num - 1, "Reqem 5-e bolundu ve 1 cixildi");
//   } else if (num % 3 === 0) {
//     num = num - 2;
//     console.log(num - 2, "Reqem 3-e bolundu ve 2 cixildi");
//   } else if (num < 0) {
//     console.log("Xeta, menfi reqem");
//     break;
//   }
// }
