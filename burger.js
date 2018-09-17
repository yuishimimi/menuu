     var mildBurger = {
        Name:"Mild Burger",
        Meat:"chicken",
        veggies:" pickles",
        cheese:"american",
        price: 5,
        ounces:"28oz"
       
     };
     var spicyBurger = {
        Name:"Spicy Burger",
        Meat:"beef",
        veggies:"onions",
        cheese:"bleu",
        price: 6,
        ounces:"32oz"
     };
      
     function buyMild(){
       var total=(mildBurger.price*1.04712).toFixed(2);
       document.getElementById('mildBurg').innerHTML="You owe $" +total;
     }
     
     function buySpicy(){
       var total=(spicyBurger.price*1.04712).toFixed(2);
       document.getElementById('spicyBurg').innerHTML="You owe $" +total;
     }
    function callOne() {
      document.getElementById('oneMild').innerHTML = mildBurger.Name + "<br>" + mildBurger.Meat + "<br>" + mildBurger.veggies + "<br>" + mildBurger.cheese  + "<br>" + mildBurger.ounces + "<br" + mildBurger.price;
    }
    function callTwo() {
      document.getElementById('twoSpicy').innerHTML = spicyBurger.Name + "<br>" + spicyBurger.Meat + "<br>" + spicyBurger.veggies + "<br>" + spicyBurger.cheese  + "<br>" + spicyBurger.ounces + "<br" + spicyBurger.price;
    }

