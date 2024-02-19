// Problem 7

const foodDeliveryService = {
    serviceName: "TastyBites Delivery",
    location: "Foodville",
    restaurants: {
      italianCorner: {
        menu: {
          pizza: { available: 20, price: 12 },
          pasta: { available: 30, price: 10 },
          salad: { available: 15, price: 8 },
        },
        orders: [
          { id: 1, items: ["pizza", "pasta"], total: 22 },
          { id: 2, items: ["salad", "pasta"], total: 18 },
          { id: 3, items: ["pizza"], total: 12 },
        ],
      },
      burgerJoint: {
        menu: {
          burger: { available: 25, price: 8 },
          fries: { available: 40, price: 4 },
          drink: { available: 30, price: 2 },
        },
        orders: [
          { id: 1, items: ["burger", "fries"], total: 12 },
          { id: 2, items: ["drink", "burger", "fries"], total: 14 },
          { id: 3, items: ["drink"], total: 2 },
        ],
      },
    },
    restaurantNames: ["italianCorner", "burgerJoint"],
  };
  
  // Level-Problem 7-1
  function findDetails(foodDeliveryService) {
    const details = {};
  
    for (const restaurantName of foodDeliveryService.restaurantNames) {
      const restaurant = foodDeliveryService.restaurants[restaurantName];
  
      // Check if the restaurant and its menu exist
      if (!restaurant || !restaurant.menu) {
        console.error(`Error: Invalid structure for ${restaurantName}`);
        continue;
      }
  
      const menu = restaurant.menu;
      const restaurantNameLower = restaurantName.toLowerCase();
  
      // Check if menu has any items
      if (Object.keys(menu).length === 0) {
        console.error(`Error: No items in the menu for ${restaurantName}`);
        continue;
      }
  
      details[`${restaurantNameLower}Available`] = Object.values(menu).reduce(
        (total, item) => total + item.available,
        0
      );
      details[`${restaurantNameLower}Price`] = menu[Object.keys(menu)[0]].price;
    }
  
    return details;
  }
  
  console.log(findDetails(foodDeliveryService).pizzaAvailable); // 20
  console.log(findDetails(foodDeliveryService).burgerAvailable); // 25
  console.log(findDetails(foodDeliveryService).pizzaPrice); // 12
  console.log(findDetails(foodDeliveryService).burgerPrice); // 8
  

  
  // Level-Problem 7-2
  function calculateTotalRevenue(foodDeliveryService) {
    let totalRevenue = 0;
  
    for (const restaurantName of foodDeliveryService.restaurantNames) {
      const orders = foodDeliveryService.restaurants[restaurantName].orders;
      totalRevenue += orders.reduce((sum, order) => sum + order.total, 0);
    }
  
    return totalRevenue;
  }
  
  console.log(calculateTotalRevenue(foodDeliveryService)); // 80
   
  // Problem 8
  
  function studentData(firstName, lastName, age, marksArray, ...hobbies) {
    const fullName = `${firstName} ${lastName}`;
    
    return {
      fullName: fullName,
      age: age,
      hobbies: hobbies,
      getInfo: function () {
        return `${fullName}'s age is ${age}.`;
      },
      getResult: function () {
        const averageMarks = marksArray.reduce((sum, mark) => sum + mark, 0) / marksArray.length;
        return averageMarks >= 50 ? "Result: PASS" : "Result: FAIL";
      },
    };
  }
  
  // Example invocation
  let obj1 = studentData(
    "john",
    "stark",
    38,
    [50, 60, 70],
    "Singing",
    "Coding",
    "Meditating"
  );
  console.log(JSON.stringify(obj1)); // {"fullName":"john stark","age":38,"hobbies":["Singing","Coding","Meditating"]}
  console.log(obj1.getInfo()); // john stark's age is 38.
  console.log(obj1.getResult()); // Result: PASS
    
  //don't remove below export statement part
  export {
      studentData,
      calculateTotalRevenue,
      findDetails
  };
  