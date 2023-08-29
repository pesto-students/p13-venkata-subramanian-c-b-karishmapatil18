function playGuessingGame(numToGuess,totalGuesses=10)
{
    let attempt = 1;
    let res;
    while(attempt <= totalGuesses)
    {   
     if(attempt == 1)
        {
        res = prompt("Enter a number between 1 and 100.")
            if(res == null)
                {       
                    return 0;
                }   
        res = parseInt(res);
            if(isNaN(res))
                    {
                         res = prompt("Please Enter Number");
                    }
            if(numToGuess == res)
                     {
                        return attempt;
                     }
        }
    else
        {       
         
         if(res < numToGuess)
         {       
           res = prompt("The number is too small");
         }
         else if(res > numToGuess)
         {       
            res = prompt("The number is too large");
 
         }
        if(res == null)
        {       
            return 0;
        }  

        res = parseInt(res);
        if(isNaN(res))
        {
            res = prompt("Please Enter Number");
        }
            
         if(numToGuess == res)
        {
            return attempt;
        }
        }
            attempt ++;
  
    }

    return 0;
   

}

playGuessingGame(5,5)