const navList = document.getElementById("navList");
const toggleBtn = document.getElementById("toggleBtn");

// navList.style.display = "block"; // Hide the navList initially

toggleBtn.addEventListener("click", () => {
  if (navList.style.display === "none") {
    navList.style.display = "block"; // Show the navList when button is clicked
  } else {
    navList.style.display = "none"; // Hide the navList when button is clicked again
  }
});

// Add this code to handle page refresh
window.addEventListener("load", () => {
  navList.style.display = "none"; // Ensure navList is hidden on page load
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
