//Generate facebook post text from product details, discounts, name and description

// Declares the variable that are used to iterate through the array
let request = "iPhone SE (2nd Gen)"
let number  = 0

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
    {
      name: 'iPhone SE (2nd Gen)',
      locations: ['Shoppee', 'Lazada', 'Amazon'],
      pricing: 1199,
      discount: 800,
      description: '64GB ROM, 8GB RAM,  ',
    },
    {
      name: 'Acer Swift 3 Infinity 4 SF314-511-57RH',
      locations: ['Shoppee', 'Lazada', 'Amazon'],
      pricing: 2540,
      discount: 560,
      description: 'Intel Core i5 RAM 16GB SSD 512GB ',
    },
  ];


  for (index = 0; index < pricings.length; index++) {
    if (pricings[index].name = request) {
    number = index;
    }
}

//calls the tuto.pug
let res = rosaenlgPug.renderFile('intern.pug', {
    language: 'en_US',
    pricing: pricings[number],
    cache: true,
  });
  console.log(res);