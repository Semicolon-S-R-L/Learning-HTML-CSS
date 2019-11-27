const getSleepHours = day =>{

    if (day === 'monday') {
      return 8;
    } else if ( day === 'tuesday'){
      return 7;
    } 
      else if(day ==='wednesday'){
      return 5;
    }else if (day ==='thursday'){
      return 8;
    } else if (day === 'friday'){
      return 7;
    } else if (day ==='saturday'){
      return 8;
    } else if ( day=== 'sunday'){
      return 7;
    }
      };
    console.log(getSleepHours('saturday'));
    // day
    const getActualSleepHours =() =>{
      const hours = 
    getSleepHours('monday') + 
    getSleepHours('tuesday') + getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') + getSleepHours('saturday') +
    getSleepHours('sunday')  ;
      return hours;
    };
    console.log(getSleepHours('monday'));
    function getIdealSleepHours (){
      const idealHours = 8;
      return idealHours *7;
    }
    console.log(getIdealSleepHours());
    
    function calculateSleepDebt(){
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
      
      if (actualSleepHours === idealSleepHours) {
      console.log("....");
      }  
      else if (actualSleepHours > idealSleepHours){
        console.log("......");
      } else if(actualSleepHours < idealSleepHours){
        console.log("SleepHours");
      }
      
        if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
        } else {
        console.log("Error")
        } 
    };
     calculateSleepDebt();
    
    
    
    
    