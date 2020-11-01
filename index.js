const fs = require('fs');
const isOdd = require('is-odd')
const data = fs.readFileSync('odd.txt',{encoding :'utf8'});
console.log(data);
// const str='tuan\n'
// const str1=`${1}
// gigity `
// fs.writeFile('text.txt',str1,(err)=>{
//     if(err) return console.log(err);
//     console.log('success');
// });
// console.log('success1');

// fs.readFile('./text.txt', {encoding: 'utf8'}, (err, data) => {
//     if (err) {
//         console.log(err);
//         console.log(data);
//         return;
//     };
//     console.log(data);
// })
// const nums=data.split(' ').map(x=>{
//     parseInt(x)
// })
// let count=0
// nums.forEach(x=>{
//     if(isOdd(x)){
//         count=count+1
//     }
// })
// console.log(count);
