function couter()
{
    let count = 0;

    function innercounter()
    {
        count ++;
        return count;
    }

    return innercounter;
}

let firstcounter = new couter();
let secondcounter = new couter();
 
const firstValues = [];

firstValues.push(firstcounter());
firstValues.push(firstcounter());
firstValues.push(firstcounter());
firstValues.push(firstcounter());
firstValues.push(firstcounter());

const secondValues = [];

secondValues.push(secondcounter());
secondValues.push(secondcounter());
secondValues.push(secondcounter());

console.log(firstValues);
console.log(secondValues);
