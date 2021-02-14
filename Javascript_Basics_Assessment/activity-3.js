
const name1 = prompt('enter a student name');
const name2 = prompt('enter a student name');
const name3 = prompt('enter a student name');

const nameList = []
nameList.push(name1);
nameList.push(name2);
nameList.push(name3);
for (let i = 0; i < 3; i++){
    const name = prompt('Enter a name');
    nameList.push(name);
}
var arraylength=nameList.length
for (var i = 0; i < arraylength; i++) {
    console.log(nameList[i]);
}
