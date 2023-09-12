const temperatureData = {
    'New York': 20, 
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
    };



function outer()
    {   
        cashData = {}
        function getTemperatureForCity (city)
        {
            if(cashData[city])
            {
                console.log(city)
                console.log("Returning Cache Data")
                return cashData[city];

            }
            else{
                console.log(city);
                cashData[city] = temperatureData[city];
                return  cashData[city] 
            }
            

        }

        return getTemperatureForCity;


    }
 let temp = outer();
 console.log(temp('New York'))
 console.log(temp('New York'))

 console.log(temp('London'))
 console.log(temp('London'))
 console.log(temp('London'))

