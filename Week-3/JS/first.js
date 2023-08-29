

function dividenum(nums)
{
    let evenarray = [];
let oddarray =[];

for(let i = 0 ;i < nums.length;i++)
{
    let j = nums[i]%2;
    if(j==0)
    {   
        evenarray.push(nums[i]);

    }
    else 
    {
        oddarray.push(nums[i]);
    }
   
}

let odd;
if(oddarray.length== 0)
{
  odd = "NONE";
}
else
{
     odd = oddarray.sort();
}

let even ;

if(evenarray.length== 0)
{
  even = "NONE";
}
else
{
   even = evenarray.sort();
}

console.log("Even Array :" + even);
console.log("Odd Array :" + odd);

}


let nums = [1,9,7,4,6]; 
dividenum(nums);
