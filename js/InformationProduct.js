var selectedItemColor = null;
var selectedItemStorage = null;
var selectedPayment = null;
var color = null;
var storage = null;

function select_color(event) {
  var select = event.target;
  
  if (select.tagName === "LI") {
    if (selectedItemColor !== null) {
      selectedItemColor.classList.remove('selected');
    }
    selectedItemColor = select;
    select.classList.add('selected');

    var elements = document.getElementsByClassName('storage');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add('active-item');
    }

    elements = document.getElementsByClassName('title-storage-select');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('disabled');
    }
    var value = select.value;
    console.log(value);
    switch(value){
      case 1:
        color = "black";
        break;
      case 2:
        color = "brown";
        break;
      case 3:
        color = "ochre";
        break;
      case 4:
        color = "purple";
        break;
    }
  }

   
}


var list_color = document.getElementById("color");
list_color.addEventListener("click", select_color)

function select_storage(event){
  var select = event.target;

  if(color !== null){
    if (select.tagName === "LI") {
      if (selectedItemStorage !== null) {
        selectedItemStorage.classList.remove('selected');
      }
      selectedItemStorage = select;
      select.classList.add('selected');
      storage = select.getAttribute('value');

      var paymentClass = document.getElementsByClassName('payment');
      for(var i = 0; i < paymentClass.length; i++){
        paymentClass[i].classList.add('active-item');
      }
      document.getElementById('title_pay').classList.remove('disabled');
    }
  }else{
    console.log(color);
  }

}

var list_storage = document.getElementById("storage");
list_storage.addEventListener("click", select_storage);

function select_pay(event){
  var select = event.target;

  
  if (select.tagName === "LI") {
    if(storage !== null){
      if (selectedPayment !== null) {
        selectedPayment.classList.remove('selected');
      }
      selectedPayment = select;
      select.classList.add('selected');
      
      document.getElementById('payment_method').style = 'display:block';
    }else{
      
    }
    
  }else{
    console.log(select.tagName );
  }
}

var list_pay = document.getElementById("pay");
list_pay.addEventListener("click",select_pay);

// function option_bank(){
  
// }
// var option_bank = document.getElementById('option-bank');
// option_bank.addEventListener('click',option_bank);

var see_more = document.getElementById("see-more");
var see_more_divs = document.querySelectorAll(".see-more   >  div:nth-child(n + 3)");
var see_more_img = document.getElementById("see-more-img");
console.log(see_more_divs);

see_more.onclick = ()=>{
  see_more_divs.forEach(div =>{
    if (div.style.display === "none") {
      div.style.display = "block";
      see_more_img.src = "/image/InformationProduct/icon/icon _nav_.png";

    } else {
      div.style.display = "none";
      see_more_img.src = "/image/InformationProduct/icon/icon-arrow-down.png";
    }
  })
}

window.onload = function() {
  document.body.style.zoom = "90%";
}
