document.addEventListener("DOMContentLoaded", function() {
    const billForm = document.getElementById("bill-form");
    const billContainer = document.getElementById("bill-container");
  
    billForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const customerName = document.getElementById("customer-name").value;
      const itemName = document.getElementById("item-name").value;
      const itemQuantity = parseInt(document.getElementById("item-quantity").value);
      const itemPrice = parseFloat(document.getElementById("item-price").value);
  
      if (!customerName || !itemName || !itemQuantity || !itemPrice) {
        alert("Please fill in all fields.");
        return;
      }
  
      const total = itemQuantity * itemPrice;
  
      const billHTML = `
        <div class="bill">
          <p><strong>Customer:</strong> ${customerName}</p>
          <p><strong>Item:</strong> ${itemName}</p>
          <p><strong>Quantity:</strong> ${itemQuantity}</p>
          <p><strong>Price:</strong> $${itemPrice.toFixed(2)}</p>
          <p><strong>Total:</strong> $${total.toFixed(2)}</p>
        </div>
      `;
  
      billContainer.insertAdjacentHTML("beforeend", billHTML);
  
      // Reset form
      billForm.reset();
    });
  });
  