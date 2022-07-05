var natural = require('natural');
var classifier = new natural.BayesClassifier();
//Training Dataset - Using Internal Dataset
classifier.addDocument("Display the price of the Asus ROG Phone 5 Ultimate","Asus ROG Phone 5 Ultimate");
classifier.addDocument("Could you help me locate the Asus ROG Phone 5 Ultimate","Asus ROG Phone 5 Ultimate");
classifier.addDocument('What are the specifications for the Asus ROG Phone 5 Ultimate', 'Asus ROG Phone 5 Ultimate');
classifier.addDocument('Where can I buy the Asus ROG Phone', 'Asus ROG Phone 5 Ultimate');
classifier.addDocument('What is the discount available for the Asus Phone 5 Ultimate', 'Asus ROG Phone 5 Ultimate');
classifier.addDocument('Why is the Asus ROG Ultimate so good?', 'Asus ROG Phone 5 Ultimate');
classifier.addDocument('Why should I buy the ROG Phone 5 Ultimate', 'Asus ROG Phone 5 Ultimate');
classifier.addDocument('Show me the result for Asus 5 Ultimate', 'Asus ROG Phone 5 Ultimate');
classifier.addDocument('Where to buy Asus ROG Phone 5 Ultimate', 'Asus ROG Phone 5 Ultimate');
classifier.addDocument('What is the RAM for the Asus ROG Phone 5 Ultimate', 'Asus ROG Phone 5 Ultimate');
classifier.addDocument('Memory of the Asus ROG Phone', 'Asus ROG Phone 5 Ultimate');
classifier.addDocument('Screen settings for Asus Phone Ultimate', 'Asus ROG Phone 5 Ultimate');

classifier.addDocument("Display the price of the iPhone SE (2nd Gen)","iPhone SE (2nd Gen)");
classifier.addDocument("Could you help me locate the iPhone SE (2nd Gen)","iPhone SE (2nd Gen)");
classifier.addDocument('What are the specifications for the iPhone SE (2nd Gen)', 'iPhone SE (2nd Gen)');
classifier.addDocument('Where can I buy the 2nd Gen iPhone SE', 'iPhone SE (2nd Gen)');
classifier.addDocument('What is the discount available for the iPhone SE', 'iPhone SE (2nd Gen)');
classifier.addDocument('Why is the iPhone (2nd Gen) so good?', 'iPhone SE (2nd Gen)');
classifier.addDocument('Why should I buy the iPhone', 'iPhone SE (2nd Gen)');
classifier.addDocument('Show me the result for iPhone SE', 'iPhone SE (2nd Gen)');
classifier.addDocument('Where to buy iPhone SE (2nd Gen)', 'iPhone SE (2nd Gen)');
classifier.addDocument('What is the RAM for the iPhone SE (2nd Gen)', 'iPhone SE (2nd Gen)');
classifier.addDocument('Memory of the iPhone SE', 'iPhone SE (2nd Gen)');
classifier.addDocument('Screen settings for iPhone SE (2nd Gen)', 'iPhone SE (2nd Gen)');

classifier.addDocument("Display the price of the Acer Swift 3 Infinity 4 SF314-511-57RH","Acer Swift 3 Infinity 4 SF314-511-57RH");
classifier.addDocument("Could you help me locate the Acer Swift 3 Infinity 4 SF314-511-57RH","Acer Swift 3 Infinity 4 SF314-511-57RH");
classifier.addDocument('What are the specifications for the Acer Swift 3 Infinity 4 SF314-511-57RH', 'Acer Swift 3 Infinity 4 SF314-511-57RH');
classifier.addDocument('Where can I buy the Acer Swift 3', 'Acer Swift 3 Infinity 4 SF314-511-57RH');
classifier.addDocument('What is the discount available for the Acer Swift Infinity', 'Acer Swift 3 Infinity 4 SF314-511-57RH');
classifier.addDocument('Why is the Acer Infinity 4 SF314-511-57RH so good?', 'Acer Swift 3 Infinity 4 SF314-511-57RH');
classifier.addDocument('Why should I buy the Acer Swift', 'Acer Swift 3 Infinity 4 SF314-511-57RH');
classifier.addDocument('Show me the result for Acer Swift 4 SF314-511-57RH', 'Acer Swift 3 Infinity 4 SF314-511-57RH');
classifier.addDocument('Where to buy Acer Swift 3 Infinity 4 SF314-511-57RH', 'Acer Swift 3 Infinity 4 SF314-511-57RH');
classifier.addDocument('What is the RAM for the Acer Swift 3 Infinity 4 SF314-511-57RH', 'Acer Swift 3 Infinity 4 SF314-511-57RH');
classifier.addDocument('Memory of the Acer 3 Infinity 4 SF314-511-57RH', 'Acer Swift 3 Infinity 4 SF314-511-57RH');
classifier.addDocument('Screen settings for Acer Swift 3 Infinity 4 SF314-511-57RH', 'Acer Swift 3 Infinity 4 SF314-511-57RH');

// Train
classifier.train();


// Persisting /Save
classifier.save('nvclassifier.json',function(err,classifier){});


