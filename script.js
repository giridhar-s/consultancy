// JavaScript to close the dropdown after a selection is made
const dropdownItems = document.querySelectorAll(".dropdown-item");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Loop through each item and add a click event listener
dropdownItems.forEach((item) => {
 item.addEventListener("click", function () {
  const dropdown = this.closest(".dropdown");
  const dropdownToggle = dropdown.querySelector(".dropdown-toggle");

  // Close the dropdown by removing 'show' class
  dropdownMenu.classList.remove("show");

  // Optionally trigger a Bootstrap dropdown toggle manually
  if (dropdownToggle) {
   dropdownToggle.classList.remove("show");
  }
 });
});
