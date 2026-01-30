// SELECT ELEMENTS
const modal = document.getElementById("videoModal");
const demoVideo = document.getElementById("demoVideo");
const closeBtn = document.querySelector(".close");

// FUNCTION TO OPEN MODAL
function openDemo() {
  modal.style.display = "flex";

  // Load embedded videohP10?autoplay=1
  demoVideo.src = "https://youtu.be/dQw4w9WgXcQ?si=ANO3mVMI5Apxj6ae";
}

// CLOSE MODAL WHEN CLICKING X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  demoVideo.src = ""; // STOP video
});

// CLOSE MODAL WHEN CLICKING OUTSIDE CONTENT
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    demoVideo.src = ""; // STOP video
  }
});
