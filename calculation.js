const phonePrice = 1219;
const phoneCase = 59;
const tax=15;

//phone Increment price.
const phoneIncrement = document.getElementById("phone-increment");
phoneIncrement.addEventListener("click",function(){
    increment('phonevalue-update'); 
    subTotal();
    
})

//Phone decrementIncrement price.
const phoneDecrement = document.getElementById('phone-decrement');
phoneDecrement.addEventListener("click",function(){
    decrement ('phonevalue-update');
    subTotal();

})

//phone Case Increment price.
const phoneCaseIncrement = document.getElementById("phoneCase-increment");
phoneCaseIncrement.addEventListener("click",function(){
   phoneCaseincrement('phoneCasevalue-update'); 
   subTotal();
  
})

//Phone decrementIncrement price.
const phoneCaseDecrement = document.getElementById('phoneCase-decrement');
phoneCaseDecrement.addEventListener("click",function(){
    phoneCasedecrement ('phoneCasevalue-update');
    subTotal();

})



//phone increment value
function increment(id)
{
    const incrementValue= document.getElementById(id).value;
    const currentValue = parseFloat(incrementValue);
    const totalNumber =  currentValue+1;
    document.getElementById(id).value= totalNumber ;
    document.getElementById('phoneupdate-price').innerText = phonePrice * totalNumber;
}

//phone decrement value
function decrement (id){
    const decrementValue= document.getElementById(id).value;
    const currentValue = parseFloat(decrementValue);
    const totalNumber =  currentValue-1;
    document.getElementById(id).value= totalNumber;
    document.getElementById('phoneupdate-price').innerText = phonePrice * totalNumber;
}


//Phone Case decrement Value
function phoneCaseincrement(id)
{
    const incrementValue= document.getElementById(id).value;
    const currentValue = parseFloat(incrementValue);
    const totalNumber =  currentValue+1;
    document.getElementById(id).value= totalNumber ;
    document.getElementById('phoneCaseupdate-price').innerText = phoneCase * totalNumber;
}

//phone case decrement value
function phoneCasedecrement (id){
    const decrementValue= document.getElementById(id).value;
    const currentValue = parseFloat(decrementValue);
    const totalNumber =  currentValue-1;
    document.getElementById(id).value= totalNumber;
    document.getElementById('phoneCaseupdate-price').innerText = phoneCase* totalNumber;
}




function subTotal(){
   
    const phoneSubtotal =  document.getElementById('phoneupdate-price').innerText;
    const phonetotal= parseFloat(phoneSubtotal);
    const phoneCaseSubtotal = document.getElementById('phoneCaseupdate-price').innerText;
    const phoneCasetotal=parseFloat(phoneCaseSubtotal);
    const subTotal = phonetotal + phoneCasetotal;
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('total').innerText = subTotal+tax;
}
