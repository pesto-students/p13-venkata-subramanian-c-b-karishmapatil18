function* generator(arr)
{
    for(const elem of arr )
    {
      yield Symbol(elem);
    }
}

arr = ['hello', 'world', 'test'];
var element = generator(arr)
console.log(element.next().value);
console.log(element.next().value);
console.log(element.next().value);