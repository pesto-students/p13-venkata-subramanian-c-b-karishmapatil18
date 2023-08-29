class calculator 
{
    add(a,b)
    {
        let sum  = a+b;
        return sum;
    }
    subtract(a,b)
    {
        let sum  = a-b;
        return sum;
    }
    multiply(a,b)
    {
        let sum  = a*b;
        return sum;
    }
    divide(a,b)
    {
        let sum  = a/b;
        return sum;
    }
}

let cal = new calculator;

let res = cal.divide(5,4)
console.log(res);