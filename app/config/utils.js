const days = {
    "0":"Sunday",
    "1":"Monday",
    "2":"Tuesday",
    "3":"Wednesday",
    "4":"Thursday",
    "5":"Friday",
    "6":"Saturday"
  };
  
  const months = {
    "0":"Jan",
    "1":"Feb",
    "2":"Mar",
    "3":"Apr",
    "4":"May",
    "5":"June",
    "6":"July",
    "7":"Aug",
    "8":"Sept",
    "9":"Oct",
    "10":"Nov",
    "11":"Dec"
  };

  export function convertTemperature(k){
      return (k - 273.15) * 1.8000 + 32.00
  }

  export function getDate(timestamp){
      let date = new Date(timestamp * 1000);
      let day = days[date.getDay()]
      let month  = `${months[date.getMonth()]} ${date.getDate()}`
      return `${day} ${month}`
  }