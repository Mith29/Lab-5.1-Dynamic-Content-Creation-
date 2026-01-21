Reflection Questions

1.How did you dynamically create and append new elements to the DOM?
I used document.createElement() to create the new elements and set their content and attributes like textContent, classList, and dataset, and then inserted them into the page using appendChild().


2.What steps did you take to ensure accurate updates to the total price?
I ensured accurate updates to the total price by storing both the price and quantity for each cart item, calculating the total for that item (price × quantity), and updating a running totalPrice variable whenever an item was added or removed. I also validated inputs to prevent invalid or empty values from affecting the calculation.


3.How did you handle invalid input for product name or price?
I handled invalid input by checking the values before adding a product. If the product name was empty, or the price or quantity was less than or equal to zero, the code stopped execution and did not add the item to the cart. This prevents incorrect or empty entries from affecting the cart or total pric


4.What challenges did you face when implementing the remove functionality?
Correctly identifying which item to remove — I solved this using event delegation on the cart <ul> and checking event.target to find the clicked button’s parent <li>.

Updating the total price accurately — I had to make sure to subtract price × quantity of the removed item, not just the unit price, to keep the total correct.

Handling the dataset values safely — I needed to convert the stored data-price and data-qty from strings to numbers to avoid NaN issues during calculations.