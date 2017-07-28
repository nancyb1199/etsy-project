// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let avg = 0;
  let sum = 0;
  let length = data.length;
  for( let i = 0; i < length; i++ ){
    sum += data[i].price;
}
  avg = sum / length;
  console.log("The average price is $" + avg.toFixed(2));
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let items = [];
  let length = data.length;
  for( let i = 0; i < length; i++ ){
    /* would like to add a check for USD currency type */
    let newobj = {};
    if (data[i].price >= 14 && data[i].price <= 18 && data[i].currency_code == "USD"){
      /* console.log(data[i].price); */
      newobj = data[i];
    /*  console.log(newobj); */
      items.push(newobj);
    }
  } /* end i loop */
  /* I only have 4 answers because I added the check for USD currency since the
  question says USD. I also add this little header line...*/
  console.log("Items that cost between $14 and $18:")
  for( let j = 0; j < items.length; j++ ){
  console.log(items[j].title);
  }
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let length = data.length;
  for( let i = 0; i < length; i++ ){
    if (data[i].currency_code == "GBP"){
      console.log(data[i].title + " costs " + data[i].price + " pounds")
    }
}
}

// 4: Display a list of all items who are made of wood.
function question4 () {
  let items = [];
  for( let i = 0; i < data.length; i++ ){
    let xlength = data[i].materials.length;
    let newobj = {};
    for( let x = 0; x < xlength; x++){
      if ( data[i].materials[x] == "wood" ){
        newobj = data[i];
        items.push(newobj);
      } /* if stmt */
    } /* end x loop */
  } /* end i loop */
  for ( let j = 0; j < items.length; j++){
  console.log(items[j].title + " is made of wood");
  } /* end j loop */
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  for( let i = 0; i < data.length; i++ ){
    let tstlength = data[i].materials.length;
    if ( tstlength >= 8 ){
      console.log(data[i].title + " has " + tstlength + " materials");
      for ( let j = 0; j < tstlength; j++ ){
        console.log("- " + data[i].materials[j]);
      } /* j loop */
    } /* if stmt */
  } /* i loop */
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let count = 0;
  for( let i = 0; i < data.length; i++ ){
    if (data[i].who_made == "i_did"){
      count = count + 1;
    }
  }
  console.log(count + " items were made by their sellers");
}
