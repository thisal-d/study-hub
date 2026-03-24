var day = new Date().getDate();

console.log("Current Date : ", day);

var week_day = new Date().getDay();
console.log("Week Date : ", week_day);


let message;
switch (day){
    case 0:
        message = "Today is Sunday";
        break;
    
    case 1:
        message = "Today is Monday";
        break;
    
    case 2:
        message = "Today is Tuesday";
        break;
    
    case 3:
        message = "Today is Wednesday";
        break;
    
    case 4:
        message = "Today is Thursday.";
        break;
        
    case 5:
        message = "Today is Friday";
        break;
        
    case 6:
        message = "Today is Saturday";
        break;
    }