function calcWordFrequencies() {
    const map = new Map();
  
    var input = prompt("Enter something");
  
    const arr_input = input.split(" ");
  
    for( var word of arr_input){
  
      if (map.has(word)){
        map.set(word, map.get(word) +1);
      }
      else{
        map.set(word, 1);
      }
    }
  
    for (const [word, frequency] of map) {
      console.log(word+" : "+frequency);
    }
  }
  
  calcWordFrequencies();