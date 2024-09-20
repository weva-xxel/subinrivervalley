
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute('href'));
      targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});

// Dynamic search functionality
const searchInput = document.querySelector('.search-container input');
const portfolioItems = document.querySelectorAll('.portfolio-item');

searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  portfolioItems.forEach(item => {
      const title = item.querySelector('h4').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
});

// Modal functionality for product details
const detailsModalElement = document.getElementById("detailsModal");
const closeModalButton = document.querySelector(".modal .close");
const orderButton = document.querySelector(".modal .order-now");

// Function to open modal with product details
function openProductDetails(productType) {
  const product = getProductDetails(productType);
  document.getElementById("productTitle").innerText = product.title;
  document.getElementById("productImage").src = product.image;
  document.getElementById("productDescription").innerText = product.description;
  document.getElementById("productPrice").innerText = product.price;
  detailsModalElement.style.display = "block";
}

// Function to get product details based on type
function getProductDetails(productType) {
  const products = {
      steel1: {
          title: 'Steel Plate',
          image: 'images/steelplate.JPEG',
          description: 'High tensile strength, corrosion resistant, easy to weld, durable and long-lasting.',
          price: '$150 per meter'
      },
      steel2: {
          title: 'Steel Rod',
          image: 'images/steelrod.jpg',
          description: 'Perfect for construction and industrial applications. Durable and strong.',
          price: '$120 per meter'
      },
      steel3: {
          title: 'Steel Pipe',
          image: 'images/steelpipe.jpg',
          description: 'Manufactured to meet the highest industry standards. High tensile strength, corrosion-resistant coating.',
          price: '$120 per meter'
      }
  };
  return products[productType];
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target == modal) {
      closeModal();
  }
});

closeModalButton.addEventListener('click', closeModal);
orderButton.addEventListener('click', orderProduct);

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Function to handle order placement
function orderProduct() {
  alert("Order placed for " + document.getElementById("productTitle").innerText);
  closeModal();
}

// Add event listeners to portfolio items
portfolioItems.forEach(item => {
  item.addEventListener('click', function() {
      const productType = this.querySelector('a').href.split('#');
      openProductDetails(productType);
  });
});

// Animation on portfolio items
portfolioItems.forEach(item => {
  item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.05)';
      item.style.transition = 'transform 0.3s ease';
  });
  item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1)';
  });
});

// Add modal HTML if it doesn't exist
if (!document.getElementById("detailsModal")) {
  const modalHTML = `
      <div id="detailsModal" class="modal" style="display:none;">
          <div class="modal-content">
              <span class="close">&times;</span>
              <h2 id="productTitle"></h2>
              <img id="productImage" src="" alt="Product Image">
              <p id="productDescription"></p>
              <p id="productPrice"></p>
              <button class="order-now" onclick="orderProduct()">Order Now</button>
          </div>
      </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// FOOTER
// Get the form element
const contactForm = document.getElementById("contactForm");

// Add an event listener to the form for submission
contactForm.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // You can add additional code here to handle form submission
    console.log("Form submitted!");
});

    // Get the input fields
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    // Validate the email input
    if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate the phone number input
    if (!validatePhone(phone.value)) {
        alert("Please enter a valid phone number.");
        return;
    }

    // Validate the message input
    if (message.value.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    // Create a new FormData object
    const formData = new FormData();

    // Append the input values to the FormData object
    formData.append("email", email.value);
    formData.append("phone", phone.value);
    formData.append("message", message.value);

    // Send the form data to the server using the fetch API
    fetch("/contact", {
        method: "POST",
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

    // Reset the form fields
    form.reset();
;

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Phone number validation function
function validatePhone(phone) {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
}

// Animate the smart arts section
const smartArts = document.querySelector(".smart-arts");
const smartArtItems = document.querySelectorAll(".smart-art-item");

smartArts.addEventListener("mouseover", function() {
    smartArtItems.forEach((item) => {
        item.style.transform = "scale(1.1)";
        item.style.transition = "transform 0.3s ease-in-out";
    });
});

smartArts.addEventListener("mouseout", function() {
    smartArtItems.forEach((item) => {
        item.style.transform = "scale(1)";
        item.style.transition = "transform 0.3s ease-in-out";
    });
});

/*    types of steel*/
// Create a modal to input custom size
const modal = document.createElement('div');
modal.classList.add('modal');

// Add a close button to the modal
const closeButton = document.createElement('button');
closeButton.classList.add('close');
closeButton.textContent = 'Close';

// Add a form to the modal to input custom size
const form = document.createElement('form');
form.innerHTML = `
    <label for="width">Width:</label>
    <input type="number" id="width" name="width"><br><br>
    <label for="height">Height:</label>
    <input type="number" id="height" name="height"><br><br>
    <button type="submit">Submit</button>
`;

// Add event listener to the form to handle submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the input values
    const width = document.querySelector('#width').value;
    const height = document.querySelector('#height').value;

    // Handle the custom size order
    console.log(`Ordering custom size: ${width} x ${height}...`);
});

// Add the form and close button to the modal
modal.appendChild(closeButton);
modal.appendChild(form);

// Add the modal to the body
document.body.appendChild(modal);

// cat bot
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

// Simulated AI response
const responses = {
    "hello": "Hello! How can I assist you today?",
    "properties": "We offer various plates including Stainless Steel, Galvanized Sheets, Steel Plates, and Aluminum Plates. What would you like to know?",
    "recommend": "Based on your interest, I recommend checking out our Stainless Steel Plate for its corrosion resistance and high strength.",
    "bye": "Goodbye! Feel free to ask if you have more questions."
};

chatbotSend.addEventListener('click', () => {
    const userMessage = chatbotInput.value;
    if (userMessage) {
        displayMessage(userMessage, 'user');
        chatbotInput.value = '';
        generateResponse(userMessage.toLowerCase());
    }
});

function displayMessage(message, sender) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.className = sender;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the bottom
}

function generateResponse(message) {
    const response = responses[message] || "I'm sorry, I didn't understand that.";
    displayMessage(response, 'ai');
}



const recommendationList = document.getElementById('recommendation-list');

// Sample product data
const products = [
    {
        name: "Stainless Steel Plate",
        image: "images/stainless_steel_plate.jpg",
        description: "Corrosion resistant, high strength."
    },
    {
        name: "Galvanized Sheet",
        image: "images/galvanized_steel.jpg",
        description: "Zinc-coated for corrosion resistance."
    },
    {
        name: "Steel Plate",
        image: "images/steel_plate.jpg",
        description: "High strength, durable."
    },
    {
        name: "Aluminum Plate",
        image: "images/aluminium-plate.jpg",
        description: "Lightweight, corrosion-resistant."
    }
];

// Function to display recommendations
function displayRecommendations() {
    products.forEach(product => {
        const recommendation = document.createElement('div');
        recommendation.classList.add('recommendation');

        recommendation.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
        `;

        recommendationList.appendChild(recommendation);
    });
}

// Call the function to display recommendations
displayRecommendations();