// function openCity(evt, cityName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;
  
//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
  
//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
  
//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }

//   var slideIndex = 1;
//   showDivs(slideIndex);
  
//   function plusDivs(n) {
//     showDivs(slideIndex += n);
//   }
  
//   function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length} ;
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     x[slideIndex-1].style.display = "block";
//   }
  

  $(document).ready(function(){
      function Pizza(pizza_Size,pizza_Crust,pizza_Toppings,pizza_Number){
      this.pizzaSize = pizza_Size,
      this.pizzaCrust = pizza_Crust,
      this.pizzaToppings = pizza_Toppings,
      this.pizzaNumber = pizza_Number
    }
     

    Pizza.prototype.pizzaSizeAmount = function(){
      if (this.pizzaSize == "small"){
        return 500
      }
      else if (this.pizzaSize == "medium"){
        return 800
      }
      else {
        return 1200
      }
    }
  
    Pizza.prototype.toppingsAmount = function(){
      if (this.pizzaToppings === "pineapples"){
        return 100
      }
      else if (this.pizzaToppings === "extracheese"){
        return 200
      }
      else {
        return 250
      }
    }
  
    Pizza.prototype.crustAmount = function(){
      if (this.pizzaCrust === "crispy"){
        return 100
      }
      else if (this.pizzaCrust === "stuffed"){
        return 200
      }
      else {
        return 250
      }
    }
    Pizza.prototype.total = function(){
     return parseInt(this.pizzaSizeAmount()+this.toppingsAmount()+this.crustAmount())*parseInt(this.pizzaNumber)
    }
   
  
    $("form").submit(function(){
      event.preventDefault()
      var Parameter = new Pizza($("#inputGroupSelect01").val(),$("#inputGroupSelect02").val(),$("#inputGroupSelect03").val(),$(".number").val())
      alert("Thank you!Your order has been received")
      $("#size").text(Parameter.pizzaSizeAmount())
      $("#toppings").text(Parameter.toppingsAmount())
      $("#crust").text(Parameter.crustAmount())
      $("#number1").text(Parameter.pizzaNumber)
      $("#table").hide()
      
     
      var boolean = confirm("Do you want your pizza to be delivered?")
      if (boolean === true){alert("Thank you!Your total will be"+ "" +Parameter.total()+"" +"You will receive your delivery soon and the amount for delivery is 300") 
      }else {
        alert("Thank you!Your total will be"+ "" +Parameter.total())
    
      }
      
    })
    
    $("#reset").click(function(){
      location.reload()
    })

  })

  


  
  

  

  

  

  