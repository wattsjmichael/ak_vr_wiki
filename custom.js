document.addEventListener("DOMContentLoaded", function() {
  const correctPin = "snakp1851"; // Change this to your desired PIN

  if (!sessionStorage.getItem('pinVerified')) {  // Check if the PIN has already been verified
      const modalHTML = `
      <div id="pinModal" style="position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,1.0); z-index:9999; display:flex; align-items:center; justify-content:center;">
          <div style="background-color:white; padding:20px; border-radius:5px; width:300px;">
              <h2>Enter PIN</h2>
              <input type="password" id="pinInput" style="width:100%;">
              <button onclick="checkPin()">Submit</button>
          </div>
      </div>
      `;

      document.body.insertAdjacentHTML('beforeend', modalHTML);

      window.checkPin = function() {
          const enteredPin = document.getElementById("pinInput").value;
          if (enteredPin === correctPin) {
              document.getElementById("pinModal").style.display = "none";
              sessionStorage.setItem('pinVerified', 'true');  // Set the flag in localStorage
          } else {
              alert("Incorrect PIN. Please try again.");
          }
      };

      // Optional: Make the 'Enter' key trigger the checkPin function
      document.getElementById("pinInput").addEventListener("keyup", function(event) {
          if (event.key === "Enter") {
              checkPin();
          }
      });
  }
});