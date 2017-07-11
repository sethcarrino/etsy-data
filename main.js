// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.

function question1 () {
  let total = 0;
  let average = 0;
  for (var i = 0; i < data.length; i++) {
    if (total = total + data[i].price){
      average = total / data.length;
    }
  }
console.log("The average price is" + " " + average);
}








// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let array = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].price <= 18 && data[i].price >=14){
      array.push(data[i].title)
    }

  }
  console.log(array);


}



// 3: Which item has a "GBP" currency code? Display it's name and price.

// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs 18 pounds.

function question3 () {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP"){
    console.log(data[i].title + " costs " + data[i].price + " pounds.");
    }
  }

}




// 4: Display a list of all items who are made of wood.
function question4 () {
  let array = [];
  for (var i = 0; i < data.length; i++) {
    if (/wood/i.test(data[i].materials)) {
      array.push(data[i].title);
    }
  }
  console.log(array);
}




// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let array = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8){
      array.push(data[i].title + " has" + " " + data[i].materials.length + " materials.");
      array.push(data[i].materials);
    }
  }
  console.log(array);
}


// // 6: How many items were made by their sellers?
// 18 items were made by their sellers.

function question6 () {
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did"){
      console.log(" items were made by their sellers.");
    }
  }
}
