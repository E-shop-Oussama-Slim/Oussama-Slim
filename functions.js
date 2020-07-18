function Products(image, description, price){
<<<<<<< HEAD
  this.image = image;
  this.description = description;
  this.price = price;
};
Products.prototype.getPrice = function(category) {  
   return this.price;
};
=======
	this.image = image;
	this.description = description;
	this.price = price;


>>>>>>> 0a549a6c481b2ca813a56ec154736da962220433
var productsMen = [ 
new Products('men1.jpg', 'Grey T-shirt', 17 ),
new Products('men2.jpg', 'White T-shirt', 25 ),
new Products('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfOEslciMJW84q-Rg2-kQYRIyJuL9z7oI8UQ&usqp=CAU', 'Black T-shirt', 22 ),
new Products('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmfoz0lpkl9qSYx34uTBIf4HIDw0t8oh0y2g&usqp=CAU', 'Triangle Logo', 30 ),
];
var productsWomen = [
new Products('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTedwqpIBYUkrohCZvvItE3RorOr21xmJ4RLg&usqp=CAU', 'dress', 25 ),
new Products('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqBtaWen2Wlyh6E6N2vBeczXlONDErQcRr8A&usqp=CAU', 'dress', 30 ),
new Products('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAF1KITSaMzoIWE6OH8y06L6aCkXrDnkWwIw&usqp=CAU', 'dress', 14 ),
new Products('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROxeatMM4HL7OvD2zB8Hs_EJnHOPaJX_B2-w&usqp=CAU', 'dress', 5 ),
];
var productsChildren = [
new Products('data:image/jpeg;base64,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', 'child blue', 25 ),
new Products('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVJldHTMp3t0vQaaohIpG_fr53clEZFGhfTw&usqp=CAU', 'child green', 25 ),
new Products('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYpF7ebbdgzb9-jXHkNnKtlUSKfeEQO_2HqQ&usqp=CAU', 'child rose', 25 ),
new Products('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLWE0PQoknl2KAlICjhXDKSN8dj5KdZZYP4g&usqp=CAU', 'child jean', 25 ),
];
  $('.specificCateg').hide();
  $('.cancel').hide();
 $('#carte').hide();
function generate(category){ 
  $('.categs').hide();
  $('.specificCateg').show();
  for (var i = 0; i < category.length; i++) {
    var im = document.getElementById('img' + i);
    im.src = category[i].image;
    var descrip = document.getElementById('desc' + i);
    descrip.innerHTML = category[i].description;
    var prix = document.getElementById('price' + i);
    prix.innerHTML = category[i].price; 
    check("btn"+i, category[i].price, category[i].image, category[i].description)
  };  
};
function createItem() {
  localStorage.mytim =document.getElementById("output").innerHTML;
}
function cretItem(){
  localStorage.ytim =document.getElementById("carte").innerHTML; 
}
var basket = [];
function check(id, selected, img, desc){
  var button = document.getElementById(id);
  button.onclick = function(){
    total = total + selected;
    document.getElementById('output').innerHTML = total;
    $('.cancel').show();
    $('#carte').prepend( '<br>' + desc + '<br>' + selected );
    createItem();
    basket.push([img,desc]);
    cretItem()
  };
}
/*function display(){
  if($("#carte").hide() ){
   $("#carte").show() ;
    }else{
  $("#carte").hide(); 
  }
}*/




function display(){
  
    if(document.getElementById("carte").style.display === "none"){
      document.getElementById("carte").style.display = "block";
    }else{
    document.getElementById("carte").style.display= "none";
  }
}
/*function display(){
  if($('#carte').attr(display).value=== 'none')
function showCarte(){
  $('#carte').show();
}
function hideCarte(){
  $('#carte').hide();
}
}*/


function loadBasket(){
  location.href = 'basket.html';
};
document.getElementById("home").onclick = function () {
        location.href = "home.html";
    };
var total = 0
function sum(num) {
      var price = document.getElementByClass("tot").innerHTML;
      var y = parseInt(price) + parseInt(num)
      document.getElementById("p1").innerHTML = y
<<<<<<< HEAD
}
=======
}

>>>>>>> 0a549a6c481b2ca813a56ec154736da962220433
