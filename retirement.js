//Function declarations
function retire(age){
    let year = 2017;
    let retirementAge = 65; //set current retirement age
    let diff = retirementAge - age;


    //write three separate conditional statements to say when you can take out money.

    //first if your age is older than the retirementAge
      if(age <retirementAge){
        console.log("sorry no money");
      }
    //second if your age is equal to the retirementAge
      else if (age ==retirementAge){
        console.log("hooray! you can now start retiremnt");
      }
    //third if your age is younger than the retirementAge
      else{
        console.log("your money is on its way");
      }
}


//main function tests your code above with different inputs.
function main(){
    retire(18);
    retire(50);
    retire(65);
    retire(100); //Hundo!

}




// ctrl + shift + B
//This will run the program.
main();
