





document.querySelector(".calc-btn").addEventListener('click', function(){
   

    
    // date exposed

    let exposuredate = document.getElementById("exposuredate").value;
    console.log("The Date You Were Exposed:  " + exposuredate);


    var dateExposed = new Date(exposuredate);
    


 
    let releasedate5 = new Date(exposuredate);
    releasedate5.setDate(releasedate5.getDate() + 6 );

    let releasedate7 = new Date(exposuredate);
    releasedate7.setDate(releasedate7.getDate() + 8 );

    let releasedate10 = new Date(exposuredate);
    releasedate10.setDate(releasedate10.getDate() + 11 );
   
    let releasedate14 = new Date(exposuredate);
    releasedate14.setDate(releasedate14.getDate() + 15 );


    
    console.log("Date exposed was:    " + dateExposed);
    

//
    var getDateFromDayNum = function(dayNum, year){

        var date = new Date();
        if(year){
            date.setFullYear(year);
        }
        date.setMonth(0);
        date.setDate(0);
        var timeOfFirst = date.getTime(); // this is the time in milliseconds of 1/1/YYYY
        var dayMilli = 1000 * 60 * 60 * 24;
        var dayNumMilli = dayNum * dayMilli;
        date.setTime(timeOfFirst + dayNumMilli);
        return date;
    }
    




    //returns the current date


    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log("Today's current date:  "+ date);
    
   /////////////////////////////////////////////////////////////////////////////////
    

   //returns day of the year 


    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    console.log("Today's day of the year:  " + day);

/////////////////////////////////////////////////////////////////////////////////////////////

// gets the day of the week
    function fetchdayoftheweek(){
        var d = new Date();
        var n = d.getDay();

        let sat = "Saturday"
        let sun = "Sunday"
        let mon = "Monday"
        let tue = "Tuesday"
        let wed = "Wednesday"
        let thu = "Thursday"
        let fri = "Friday"

        if (n==6){
            return sat;
        }
        else if (n==0){
            return sun;
        }
        else if (n==0){
            return mon;
        }
         else  if (n==0){
            return tue;
        }
        else if (n==0){
            return wed;
        }
       else  if (n==0){
            return thu;
        }
        else if (n==0){
            return fri;
        }
    }











    var weekday = fetchdayoftheweek();
    console.log(fetchdayoftheweek());
   
   
    let timeleft14 = Math.ceil((releasedate14-today)/ 24 / 60 / 60 / 1000 ) ;
    console.log(timeleft14);
    
    if (timeleft14 <= 15 && timeleft14 >= 0 ){
        document.getElementById("answer6").innerHTML = timeleft14.toString() + " DAYS LEFT";

    }
    else{
        document.getElementById("answer6").innerHTML = "Done with quarantine/Invalid Date";
    }










    document.getElementById("answer0").innerHTML = "Hello, let's get started. Today is "+ weekday + " . Let's make your quarantine simplified. As always, please refer to the CDC as guidelines change.";
    document.getElementById("answer").innerHTML = "You were exposed on: " + exposuredate ;
    document.getElementById("answer1").innerHTML = "Today's date:  " + date ;
    document.getElementById("answer2").innerHTML = "Your 2 Week Release Date Is: " + releasedate14.toDateString();
    document.getElementById("answer3").innerHTML = "Some Public Health Authorities Allow For A 10 Day Quarantine Without a Test:  " + releasedate10.toDateString();
    document.getElementById("answer4").innerHTML = "Or release On Day 7:  " + releasedate7.toDateString();
    document.getElementById("answer5").innerHTML = "Only With a Test On Day 5:  " + releasedate5.toDateString();
   




});



