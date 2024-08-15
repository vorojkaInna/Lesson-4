
//first task
//
// const name=prompt('What is your name?') ;
// alert(`Hello, ${name} How are you?`);
//
//second task
//
// let threeDigitNumber = prompt('Give me plz three digit number');
// let firstDigitOfNumber = threeDigitNumber[0];
// let secondDigitOfNumber = threeDigitNumber[1];
// let thirdDigitOfNumber = threeDigitNumber[2];
// let counter = (firstDigitOfNumber === secondDigitOfNumber)+(secondDigitOfNumber === thirdDigitOfNumber)+(firstDigitOfNumber === thirdDigitOfNumber);
// switch (counter) {
//     case 0:
//         alert('You wrote a number that has no identical digits');
//         break;
//     case 1:
//         alert('You wrote a number that has two identical digits');
//         break;
//     case 3:
//         alert('You wrote a number that has three identical digits');
//         break;
// }
//
//third task
// //
// let userYearOfBirth = prompt('What's your year of birth?')
// let userAge= 2024-userYearOfBirth;
// if(userYearOfBirth===null) {
//     alert(`It is a pity that you did not want to enter your year of birth!`);
//     userAge= "we dont know";
// }
// let userCity = prompt('What city do you live in?')
//
// if(userCity===null){
//     alert(`It is a pity that you did not want to enter your city`);
//     userCity= "we dont know";
// }
// let userFavSport = prompt('What's your favorite sport?')
//
// if(userFavSport===null){
//     alert(`It is a pity that you did not want to enter your favorite sport`);
//     userFavSport= "we dont know";
// }
//
// if(userCity==='Kyiv'||userCity==='kyiv'){
//     alert(`Your age: ${userAge}; You live in the capital of Ukraine!; Your favorite sport: ${userFavSport}`)
// }
// else if(userCity==='Washington'||userCity==='washington'){
//     alert(`Your age: ${userAge}; You live in the capital of the USA!; Your favorite sport: ${userFavSport}`);
// }
// else if(userCity==='London'||userCity==='london'){
//     alert(`Your age: ${userAge}; You live in the capital of Great Britain!; Your favorite sport: ${userFavSport}`)
// }
// else {
//     alert(`Your age: ${userAge};You live in the ${userCity}!; Your favorite sport: ${userFavSport}`);
// }
//
//fourth task
//
// let numOrStr = prompt('input number or string');
// console.log(numOrStr);
//
// let caseType;
//
// if (numOrStr === null) {
//     caseType = 'canceled';
// } else if (numOrStr.trim() === '') {
//     caseType = 'empty';
// } else if (isNaN(+numOrStr)) {
//     caseType = 'notNumber';
// } else {
//     caseType = 'it is number';
// }
//
// switch (caseType) {
//     case 'canceled':
//         console.log('you canceled');
//         break;
//     case 'empty':
//         console.log('Empty String');
//         break;
//     case 'notNumber':
//         console.log('it is string');
//         break;
//     case 'it is number':
//         console.log('It is number!');
//         break;
// }