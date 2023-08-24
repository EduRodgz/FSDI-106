function loadData(){
    console.log('calling the server');
}

function sayHello(name){
    console.log("Hello " + name);
}

function calculateTaxes(year, income){

    const total = income/year;
    return total;
}


function ageMessage(age){
    if(age < 100){
        console.log("Don't worry, youre still young");
    }
    else if(age === 100){
        console.log("Congrats on the century");
    }
    else{
        console.log("Sorry bud, youre getting old");
    }
}

function sum(first,second){
    const total= first + second;
    return total;
}

function printNumbers(){
    for(let i=0;i<21;i++)
    {
        if(i != 7 && i != 13){
        console.log(i);
    }   
    }
}
function someMath(){
    let nums = [12,4,1,56,57,29,87,18,90,28,11,84,58,2,95,67,24,6]

    // 1 - print every number
    for(let i=0;i<nums.length;i++){
        let numb = nums[i];
        console.log(numb);
    }
    //2 - print numbers greater or equal to 50

    for(let i=0;i<nums.length;i++){
        let numb = nums[i];
        if(numb >=50){
            console.log(numb);
        }
    }
}

function init(){
    console.log('page loaded');

    // hook events


    //load data

    loadData();
    
    let me = "Eduardo";
    sayHello(me);
    sayHello("Rodriguez");
    sayHello("Jr");

    let total=calculateTaxes(2023,80000);
    console.log("Total to pay for 2023: " + total);

    ageMessage(100);

    let answer = sum(21,21);
    console.log("The answer is: " + answer);

    printNumbers();
    someMath;
}

window.onload = init;