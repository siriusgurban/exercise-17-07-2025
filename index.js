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

//1f

// const a = prompt("1-ci eded").trim();
// const b = prompt("2-ci eded").trim();

function biggerInteger(a, b) {
  const regNum = /^[0-9]+$/;
  if (regNum.test(a) && regNum.test(b)) {
    if (a > b) {
      console.log("1-ci eded boyukdur");
    } else if (a < b) {
      console.log("2-ci eded boyukdur");
    } else {
      console.log("Biri-birine beraberdir");
    }
  } else {
    console.log("Duzgun eded daxil edin");
  }
}

// biggerInteger(a, b);

//2f

function findPassword() {
  const a = "123456";

  let sifre = prompt("sifre teyin et");

  if (sifre) {
    if (a === sifre) {
      alert("giris ugurlu");
    } else {
      alert("yalnis sifre");
    }
  } else {
    alert("emeliyyat legv edildi");
  }
}

// findPassword();

//4f

const num = Number(prompt("Reqem daxil edin").trim());

const count = (number) => {
  for (let i = 0; i <= number; i++) {
    i % 2 === 0 && console.log(i);
  }
};

// count(num)

//5f

function findGrade() {
  let bal = Number(prompt("Enter your point(0-100): ").trim());
  if (bal >= 90 && bal <= 100) {
    alert("Ela");
  } else if (bal >= 70 && bal < 90) {
    alert("Yaxsi");
  } else if (bal >= 50 && bal < 70) {
    alert("Kafi");
  } else if (bal > 0 && bal < 49) {
    alert("Zeif");
  } else {
    alert("Invalid input. Please enter a number between 0 and 100.");
  }
}

// findGrade();

//6f

const numUser = 7;

let guess = 0;

function guessTheNumber() {
  guess++;
  const num = Number(prompt("Reqem daxil edin").trim());

  if (guess <= 5) {
    if (num === numUser) {
      alert(`Tebrikler dogru tapdiniz ve ${guess} cehdiniz qaldi`);
    } else {
      console.log("Sehvdir, yeniden cehd edin");
      alert("Tebrikler game over");
      guessTheNumber();
    }
  } else {
  }
}

// guessTheNumber();

//7f

function dayOfTheWeek() {
  const day = Number(prompt("Reqem daxil edin").trim());

  switch (day) {
    case 1:
      alert("Monday");
      break;
    case 2:
      alert("Tuesday");
      break;
    case 3:
      alert("Wednesday");
      break;
    case 4:
      alert("Thursday");
      break;
    case 5:
      alert("Friday");
      break;
    case 6:
      alert("Saturday");
      break;
    case 7:
      alert("Sunday");
      break;

    default:
      alert("Sehv daxil etmisiz");
      break;
  }
}

// dayOfTheWeek();

//8f

const getNumbers = () => {
  const numOne = Number(prompt("Reqem daxul edin"));
  const numTwo = Number(prompt("Reqem daxul edin"));
  const numThree = Number(prompt("Reqem daxul edin"));

  if (numOne && numTwo && numThree) {
    return {
      numOne,
      numTwo,
      numThree,
    };
  } else {
    console.log("Duzgun eded daxil edin");
  }
};

const filterNumbers = () => {
  const numbers = getNumbers();

  const { numOne, numTwo, numThree } = numbers;

  if (numOne > numTwo + numThree) {
    console.log("Bonba kmi reqiqm  F");
  }else if(numOne < numTwo + numThree){
    console.log("Bonba kmi reqiqm  T");
  }
};

//9f

function findChainOrder() {
  let a = prompt("1-ci eded").trim();
  let b = prompt("2-ci eded").trim();
  let c = prompt("3-ci eded").trim();

  if (
    a.isNaN &&
    a === null &&
    b === null &&
    c === null &&
    a === "" &&
    b === "" &&
    c === ""
  ) {
    alert("Duzgun eded daxil edin");
  } else {
    if (a > b && b > c) {
      alert("Zencir tamamlandir");
    } else if (a < b && b < c) {
      alert("Tersine zencir");
    } else if (a === b && b === c) {
      alert("Zencir pozuldu");
    } else {
      alert("Qarisiq siralama");
    }
  }
}

// findChainOrder();

//10f

function findNumberType() {
  let num = Number(prompt("Tek rewqem daxi ledin"));

  let numNew;

  while (0 < num) {
    if (num % 7 === 0) {
      num = num / 2;
      console.log(num / 7, "Reqem 7-e bolundu ve onu onun yarisi");
    } else if (num % 5 === 0) {
      num = num - 1;
      console.log(num - 1, "Reqem 5-e bolundu ve 1 cixildi");
    } else if (num % 3 === 0) {
      num = num - 2;
      console.log(num - 2, "Reqem 3-e bolundu ve 2 cixildi");
    } else if (num < 0) {
      console.log("Xeta, menfi reqem");
      break;
    }
  }
}

// findNumberType();

//3 qat ic-ice object tapmaq

const books = async function () {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=Harry"
  );
  const data = await response.json();
  console.log(data.items, "data");
  for (item in data.items) {
    console.log(data.items[item]?.volumeInfo?.imageLinks.smallThumbnail);
  }
};

books();
