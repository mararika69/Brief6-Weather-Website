document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".stars i");
    const ratingInput = document.getElementById("ratingInput");

    ratingInput.addEventListener("input", () => {
        const rating = parseInt(ratingInput.value);
        stars.forEach((star, index) => {
            star.classList.toggle("active", index < rating);
        });
    });
});

function logout() {
    localStorage.removeItem("email");
    window.location.href = "../login/index.html";
}

function updatePreview() {
    const commentInput = document.querySelector('textarea[name="comment"]');
    const preview = document.getElementById('commentPreview');
    preview.textContent = commentInput.value;
}

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const comment = formData.get('comment');
    const rating = parseInt(document.getElementById('ratingInput').value);

    if (comment.trim() === "") {
        alert("Please enter a comment.");
        return;
    }

    fetch('/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: comment, rating: rating })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById('commentPreview').textContent = '';
        this.reset();
    })
    .catch(error => console.error('Error:', error));
});
