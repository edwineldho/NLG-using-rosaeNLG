//Generate facebook post text from product details, discounts, name and description

// Declares the variable that 
let request = ""


//calls the rosaenlg library
const rosaenlgPug = require('rosaenlg');


//This is the initial input which is used in order to generate the caption
let pricings = [
    {
      name: 'Asus ROG Phone 5 Ultimate',
      locations: ['Shoppee', 'Lazada', 'Amazon'],
      pricing: 2201,
      discount: 800,
      description: 'an internal RAM of 18GB, ROM 512GB Snapdragon 888 5G ',
    },
  ];


//calls the tuto.pug
let res = rosaenlgPug.renderFile('intern.pug', {
    language: 'en_US',
    pricings: pricings,
    cache: true,
  });
  console.log(res);