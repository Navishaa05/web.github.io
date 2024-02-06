
document.addEventListener("DOMContentLoaded", function() {
    const profileLink = document.querySelector('nav a[href="#profile"]');
    const profilePicture = document.getElementById('profile-picture');

    profileLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Scroll to the profile section
        document.getElementById('profile').scrollIntoView({ behavior: "smooth" });

        // Enlarge the profile picture
        profilePicture.classList.add('enlarged');
    });
});

