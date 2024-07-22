document.addEventListener("DOMContentLoaded", () => {

  const ul = document.querySelector("ul");
  const items = ul.querySelectorAll("li");
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text === "mouse" || text === "dog") {
      item.remove();
    }
  });

  ul.classList.add("list");
  ul.querySelectorAll("li").forEach(item => {
    item.classList.add("listItem");
  });

  const liBugatti = document.createElement("li");
  liBugatti.textContent = "Bugatti";
  ul.prepend(liBugatti);

  const liFord = document.createElement("li");
  liFord.textContent = "Ford";
  ul.append(liFord);

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

  const img = document.createElement("img");
  img.src = "bmw.png";
  document.body.appendChild(img);

  const paragraph = document.querySelector("p");
  paragraph.classList.remove("red", "italic");

  const h1Wrapper = document.getElementById("h1Wrapper");
  const h1 = document.createElement("h1");
  h1.textContent = "this is h1 tag";
  h1Wrapper.appendChild(h1);

  h1.style.color = "blue";
  h1.style.fontSize = "40px";

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