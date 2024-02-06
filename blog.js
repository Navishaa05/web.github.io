// Function to open blog in a new tab
function openBlog(blogId, url) {
    window.open(url, '_blank');
}

// Function to increment likes for a blog
function incrementLikes(blogId) {
    // Get the current number of likes from local storage
    let likes = parseInt(localStorage.getItem(blogId + '_likes')) || 0;
    likes++; // Increment likes
    // Update the like counter in the DOM and local storage
    document.getElementById('likes_' + blogId).textContent = likes;
    localStorage.setItem(blogId + '_likes', likes);
}

// Function to add a comment to a blog
function addComment(blogId) {
    let commentInput = document.getElementById('comment_input_' + blogId);
    let comment = commentInput.value;
    if (comment.trim() !== '') {
        // Get existing comments from local storage
        let comments = JSON.parse(localStorage.getItem(blogId + '_comments')) || [];
        comments.push(comment); // Add new comment
        localStorage.setItem(blogId + '_comments', JSON.stringify(comments));
        // Display comments in the DOM
        displayComments(blogId, comments);
        // Clear comment input field
        commentInput.value = '';
    }
}

// Function to display comments in the DOM
function displayComments(blogId, comments) {
    let commentsDiv = document.getElementById('comments_' + blogId);
    commentsDiv.innerHTML = ''; // Clear existing comments
    comments.forEach(comment => {
        let commentElement = document.createElement('div');
        commentElement.textContent = comment;
        commentsDiv.appendChild(commentElement);
    });
}

// Initialize like counters and comments from local storage
window.onload = function() {
    // Initialize likes
    ['blog1', 'blog2'].forEach(blogId => {
        let likes = parseInt(localStorage.getItem(blogId + '_likes')) || 0;
        document.getElementById('likes_' + blogId).textContent = likes;
    });

    // Initialize comments
    ['blog1', 'blog2'].forEach(blogId => {
        let comments = JSON.parse(localStorage.getItem(blogId + '_comments')) || [];
        displayComments(blogId, comments);
    });
};
