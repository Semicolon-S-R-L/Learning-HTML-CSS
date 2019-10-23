const getUserChoice = userInput =>{ 
    userInput = userInput.toLowerCase();
   if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors')
   {
     return userInput;
   } else{
     console.log('Error')
   }
       }
 console.log(getUserChoice('Rock'))
 console.log(getUserChoice('pAper'))
 
 function getComputerChoice (){
   const choice = Math.floor(Math.random()*3);
   console.log(choice);
   switch (choice){
   case 0:
     return 'rock';
   case 1:
     return 'paper';
   case 2:
     return 'scissors'
 
 }
 }
 
 console.log(getComputerChoice());
 
 function determineWinner (userChoice , computerChoice){
   if(userChoice ===computerChoice ){
     return
   }
   if (userChoice ==='rock'){
     if(computerChoice ==='paper')
      return 'rock won'
   }else {
     return ' paper Won'
   }
   if(userChoice === 'paper'){
     if(computerChoice === 'scissors' || 'rock')
       return ' won paper';
   }else{
     return 'scissors won'||'rock won'
   }
   if(userChoice === 'bomb'){
     return 'Win'
   }
 }
 console.log(determineWinner('scissors'));
 
 const playGame = () => {
   const userChoice =determineWinner('rock')
   const computerChoice=determineWinner('scissors')
   console.log('Win:' + userChoice);
   console.log('Win:' + computerChoice)
   console.log(determineWinner(userChoice,computerChoice));
 }  ;
 
 playGame();
 
 
 