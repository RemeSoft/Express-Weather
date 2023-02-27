function formatDateTime() {
    const date = new Date();
    const week= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    // Get the day of the week, month, day, and time from the date object
    const daysOfWeek = week[date.getDay()];
    const monthOfYear = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // Convert hours to 12-hour format and add "AM" or "PM"
    const amOrPm = hours < 12 ? 'AM' : 'PM';
    const hours12 = hours % 12 || 12; // convert 0 to 12
    
    // Construct the formatted date and time string
    const formattedDateTime = `${daysOfWeek} | ${monthOfYear} ${dayOfMonth} | ${hours12}:${minutes < 10 ? '0' : ''}${minutes}${amOrPm}`;
    
    // Return the formatted string
    return formattedDateTime;
  }


  function convertIntoCelsius(temprature){
    const celsius = temprature - 273.15;
    return celsius;
  }

  function textCapitalize(text){
    const textToArr = text.split(' ');
    textToArr.forEach((word) => {
      textToArr[textToArr.indexOf(word)] = word.charAt(0).toUpperCase() + word.slice(1);
    });
    const arrayToText = textToArr.toString();
    return arrayToText.replace(',', ' ');
  } 
  
  module.exports = {formatDateTime,convertIntoCelsius,textCapitalize};


