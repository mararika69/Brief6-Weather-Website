document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".stars i");
    const ratingInput = document.getElementById("ratingInput");

    ratingInput.addEventListener("input", () => {
      const rating = parseInt(ratingInput.value);
      if (rating >= 1 && rating <= 5) {
        stars.forEach((star, index) => {
          star.classList.toggle("active", index < rating);
        });
      }
    });
  });
