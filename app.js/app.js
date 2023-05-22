// prompt('Qiymat kiriting')
// function inputNumber(){

// }

// let numOfArr = [3.02, -4.5, 5.9, -3.1, -1];

// function numberNormalizer (arr){
//     let result = []
//     for(let i = 0, i < arr.length, i++)
//     if(arr[i] < 0) {
//         arr[i] = arr[i] * -1;
//     }
//     return result;
// }
// console.log(numberNormalizer(numOfArr));

// let person = {
//     age: 1,
//     isMarrieds: false,
//     firstName: 'Muzaffar',
//     hobby: ['play football', 'play shahmat'],
//     place: {
//         city: 'tashkent',
//         smth: 'smth',
//         sayHeloo: function (){ // bu obyekt method deyiladi
//             return 'hello guys'
//         }

//     }
// }

// console.log(person);

// let date = new Date()

// let months = [
//     'yanver',
//     'fevral',
//     'mart',
//     'aprel',
//     'may',
// ]
// console.log(months[1]);

let arr = [];
let inputNumbers = () => {
   let elPrompt = prompt('qiymat kiriting');
   
   if(!isNaN(elPrompt) && elPrompt.length > 0){
    arr.push(Number(elPrompt))

   inputNumbers()
   }
   
    return arr
    
}

console.log(inputNumbers());