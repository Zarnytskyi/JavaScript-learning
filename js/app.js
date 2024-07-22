document.addEventListener("DOMContentLoaded", () => {
  // 1. Remove non-car items from the list
  const ul = document.querySelector("ul");
  const items = ul.querySelectorAll("li");
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text === "mouse" || text === "dog") {
      item.remove();
    }
  });

  // 2. Add class 'listItem' to all li elements and class 'list' to ul element
  ul.classList.add("list");
  ul.querySelectorAll("li").forEach(item => {
    item.classList.add("listItem");
  });

  // 3. Add a new li element with text 'Bugatti' to the beginning of the list
  const liBugatti = document.createElement("li");
  liBugatti.textContent = "Bugatti";
  ul.prepend(liBugatti);

  // 4. Add a new li element with text 'Ford' to the end of the list
  const liFord = document.createElement("li");
  liFord.textContent = "Ford";
  ul.append(liFord);

  // 5. Add input elements for name, surname, password, and password confirmation to the form
  const form = document.querySelector("form");
  const inputs = [
    { type: "text", placeholder: "Name" },
    { type: "text", placeholder: "Surname" },
    { type: "password", placeholder: "Password" },
    { type: "password", placeholder: "Confirm Password" },
  ];
  inputs.forEach(inputData => {
    const input = document.createElement("input");
    input.type = inputData.type;
    input.placeholder = inputData.placeholder;
    form.appendChild(input);
  });

  // 6. Add an image to the page
  const img = document.createElement("img");
  img.src = "https://via.placeholder.com/150"; // Placeholder image URL, replace with actual if needed
  document.body.appendChild(img);

  // 7. Remove the classes 'red' and 'italic' from the paragraph
  const paragraph = document.querySelector("p");
  paragraph.classList.remove("red", "italic");

  // 8. Add an h1 tag with the text 'this is h1 tag' to the div with id 'h1Wrapper'
  const h1Wrapper = document.getElementById("h1Wrapper");
  const h1 = document.createElement("h1");
  h1.textContent = "this is h1 tag";
  h1Wrapper.appendChild(h1);

  // 9. Set the h1 tag's text color to blue and font size to 40 pixels
  h1.style.color = "blue";
  h1.style.fontSize = "40px";

  // 10. Display products grouped by categories
  const products = [
    { category: "Electronics", items: [
      { name: "Wireless Mouse", price: 25.99 },
      { name: "Bluetooth Speaker", price: 45.99 },
      { name: "Noise Cancelling Headphones", price: 99.99 },
      { name: "Smart Watch", price: 199.99 },
      { name: "Digital Camera", price: 399.99 },
      { name: "Gaming Keyboard", price: 89.99 },
    ]},
    { category: "Footwear", items: [
      { name: "Running Shoes", price: 65 },
    ]},
    { category: "Fitness", items: [
      { name: "Yoga Mat", price: 20 },
    ]},
    { category: "Accessories", items: [
      { name: "Stainless Steel Water Bottle", price: 15.5 },
      { name: "Leather Wallet", price: 45 },
      { name: "Sunglasses", price: 120 },
      { name: "Backpack", price: 60 },
    ]},
    { category: "Home & Kitchen", items: [
      { name: "Cookware Set", price: 250 },
      { name: "Coffee Maker", price: 85 },
      { name: "Electric Kettle", price: 30 },
    ]},
    { category: "Personal Care", items: [
      { name: "Electric Toothbrush", price: 75 },
    ]},
    { category: "Furniture", items: [
      { name: "Office Chair", price: 150 },
      { name: "Standing Desk", price: 300 },
      { name: "Desk Lamp", price: 40 },
    ]},
    { category: "Apparel", items: [
      { name: "Running T-shirt", price: 25 },
    ]},
  ];

  const productsDiv = document.getElementById("products");

  products.forEach(category => {
    const categoryDiv = document.createElement("div");
    const categoryHeader = document.createElement("h2");
    categoryHeader.textContent = category.category;
    categoryDiv.appendChild(categoryHeader);

    const itemList = document.createElement("ul");
    category.items.forEach(item => {
      const itemLi = document.createElement("li");
      itemLi.textContent = `${item.name} $${item.price}`;
      itemList.appendChild(itemLi);
    });

    categoryDiv.appendChild(itemList);
    productsDiv.appendChild(categoryDiv);
  });
});