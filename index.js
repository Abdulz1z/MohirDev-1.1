// TODO: 1-misol
//a, b, c raqamlari berilgan. Shu sonlardan foydalanib uch xonali son yasang,
//qachonki istalgan berilgan raqamlardan biri 0 ga teng yoki  kichik bo'lsa 0 ni konsolga chiqaring.
// let a = +prompt("A soni kriting");
// let b = +prompt(" B soni kriting");
// let c = +prompt(" C soni kriting");

// let threeNumber = a * 100 + b * 10 + c;

// if (a == 0 || b == 0 || c == 0) {
//   alert(0);
// } else {
//   alert(threeNumber);
// }

// TODO: 2-misol

//Berilgan son hafta kunining qaysi kuniga to'g'ri keladi . Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring,
//Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring va hz ..,  Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin.

// let num = prompt("Soni kriting...");

// if (num == 1) {
//   alert("Dushunba");
// } else if (num == 2) {
//   alert("Seshanba");
// } else if (num == 3) {
//   alert("Chorshanba");
// } else if (num == 4) {
//   alert("Payshanba");
// } else if (num == 5) {
//   alert("Juma");
// } else if (num == 6) {
//   alert("Shanba");
// } else if (num == 7) {
//   alert("Yakshanba");
// } else {
//   alert("none");
// }

// TODO: 3-misol

//Berilgan yill kabisa yili ekanligini aniqlang.
//Agar kabisa yili bo'lsa true  konsolga chiqsin.  Agar bo'linmasa false  konsolga chiqsin.
//Kabisa yil deb 4 yilda bir marta keladigan yilga aytiladi.
//Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun bo'ladi.

// let year = prompt("Kabisa yili ekanligini aniqlash...");

// if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) {
//   alert(true);
// } else {
//   alert(false);
// }

// TODO: 4-misol

//a soni berilgan. 1 - 999 sonlar orasida. Agar a soni 1 honali son bo'lsa 1 ni return qiling.
//Agar a soni 2 honali son bo'lsa 2 ni return qiling. Agar a soni 3 honali bo'lsa 3 ni return qiling.

// let number = prompt("1-999 orasida son kriting...");

// if (number < 10) {
//   alert("1-xonali son");
// } else if (number > 10 && number < 100) {
//   alert("2-xonali son");
// } else if (number > 100 && number < 1000) {
//   alert("3-xonali son");
// } else {
//   alert("Mavjud bo'lmagan son kiritingiz");
// }

// TODO: 5-misol
//a, b, c, d sonlar berilgan.
//Agar ularning qiymati barchasi musbat   bo'lsa true konsolga chiqaring bo'lmasa false ni konsolga chiqaring.

// let a = prompt("A soni kiriting");
// let b = prompt("B soni kiriting");
// let c = prompt("C soni kiriting");
// let d = prompt("D soni kiriting");
// if (a > 0 && b > 0 && c > 0 && d > 0) {
//   alert(true);
// } else {
//   alert(false);
// }

//TODO: 6-misol
//a soni berilgan.  0 dan a gacha bo'lgan sonlaryig'indisini toping  va yig'indini konsolga chiqaring. a sonini ham hisobga oling.

// let a = prompt("A soni kiriting...");
// let count = 0;
// for (let i = 0; i <= a; i++) {
//   count += i;
// }
// console.log(count);

//TODO: 7-misol

// a soni berilgan. Shu son mukammal raqam yoki yo'qmi shuni aniqlang.
// Agar mukammal raqam bo'lsa true bo'lmasa false konsolga chiqaring.
//Mukammal raqam deb bo'linuvchilar  yig'indisiga teng bo'ladigan songa (o'zidan tashqari) aytiladi.
//Deylik: a = 6, uning bo'linuvchilari 1,2,3 => 6 = 1 + 2 + 3   demak 6 raqami murakkab raqam hisoblanadi.
//a = 15, uning bo'linuvchilari 1, 3, 5, => 1 + 3 + 5 = 8    bo'linuvchilari yig'indisi 8ga teng 15 ga emas.
//Shuning uchun bu mukammal son emas

// let a = prompt("Soni kiriting...");
// let count = 0;

// for (let i = 0; i < a; i++) {
//   if (a % i == 0) {
//     count += i;
//   }
// }

// if (count == a) {
//   alert(true);
// } else {
//   alert(false);
// }

//TODO: 8-misol
//n soni berilgan. Shu sonni raqamlarini sonini  konsolga chiqaring. Misol: 123 -> raqamlari soni: 3

// let a = prompt("Soni kiriting...");
// alert(a.length);

//TODO 9-misol

//n soni berilgan. Berilgan son palindrome  ekanligini aniqlang. Agar bo'lsa true bo'lmasa false chiqaring. Masalan: n = 12321  bunda chap tomondan va o'ng  tomondan o'qisa ham bir hil bo'lishi kerak.
// Bu misolni while orqali ishlash yaxshiroq edi lekin for ni o'rganish uchun for da ishlaymiz .
// let a = prompt("Soni kiriting...");
// const strN = a.toString();
// const length = strN.length;
// for (let i = 0; i < length / 2; i++) {
//   if (strN[i] == strN[length - 1 - i]) {
//     alert(true);
//     break;
//   } else {
//     alert(false);
//   }
// }

//TODO: 10-misol

//n  soni berilgan. Shu sonni raqamlarini yig'indisini toping.

// let number = prompt("Istalgan sonni kiriting:");
// let sum = 0;
// let numString = number.toString();

// for (let i = 0; i < numString.length; i++) {
//   sum += parseInt(numString[i]);
// }

// console.log(sum);

//TODO: 11-misol

// array[] berilgan. Shu massivni teskarisini yangi massivga ko'chirib o'tkazing va konsolga chiqaring.

// let array = ["cat", "hours", "min", "sec", " millisecond"];

// let newArray = array.reverse();

// console.log(newArray);

//TODO: 12-misol

//n va array[] berilgan. Shu massivda nechta n soni borligini topib konsolga chiqaring.
//Masalan: n = 4, array[2, 4, 6, 4,], Natija: bu yerda 2 ta 4 bor.

// let n = 4;
// let array = [1, 2, 3, 4, 5, 4, 3, 3];
// let count = array.filter((num) => num === n).length;
// console.log(count);

//TODO: 13-misol

//a, array[] berilgan. Arrayning xohlagan ikkita  elementlarini
//  yig'indisi a ga teng bo'lishini aniqlang va ularni  konsolga chiqaring
// const a = 8;
// const array = [2, 3, 5, 7, 8];

// for (let i = 0; i < array.length - 1; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] + array[j] === a) {
//       console.log(`(${array[i]}, ${array[j]})`);
//     }
//   }
// }

//TODO 14-misol

//Sonlardan iborat massiv berilgan. Shu massivni  elementlarini o'sish tartibida jo'ylashtiring
//(sort by increasing(ascending) ) va hosil bo'lgan massivni ni konsolga chiqaring.

// let array = [1, 3, 5, 2, 7, 4, 6];

// let newArray = array.sort((a, b) => a - b);
// console.log(newArray);

//TODO: 15-misol

//Sonlardan iborat massiv berilgan. Shu massivdagi eng katta ikkinchi  elementni toping.
// Bunda array elementlari bir biriga teng emas deb oling.

// let array = [1, 3, 5, 2, 7, 4, 6, 45, 44, 56, 35];

// let newArray = array.sort((a, b) => b - a);

// console.log(newArray[1]);
