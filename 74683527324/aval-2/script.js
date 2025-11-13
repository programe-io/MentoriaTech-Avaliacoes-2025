function likePost(button) {
        const likesSpan = button.nextElementSibling;
            let likes = parseInt(likesSpan.textContent);
                likes++;
                    likesSpan.textContent = likes;
                    }
}