const uploadInput = document.getElementById("uploadInput");
const feed = document.getElementById("feed");

uploadInput.addEventListener("change", function(){
    const file = this.files[0];
        if(!file) return;

            const reader = new FileReader();
                reader.onload = function(e){
                        addPost(e.target.result);
                            }
                                reader.readAsDataURL(file);
                                });

                                function addPost(imgSrc){
                                    const post = document.createElement("div");
                                        post.className = "post";

                                            post.innerHTML = `
                                                    <img src="${imgSrc}">
                                                            <div class="actions">
                                                                        <span class="like">🥸</span>
                                                                                    <span class="comment">⌨️</span>
                                                                                            </div>
                                                                                                `;

                                                                                                    const likeBtn = post.querySelector(".like");
                                                                                                        const commentBtn = post.querySelector(".comment");

                                                                                                            likeBtn.addEventListener("click", () => {
                                                                                                                    likeBtn.style.opacity = likeBtn.style.opacity == "0.4" ? "1" : "0.4";
                                                                                                                        });

                                                                                                                            commentBtn.addEventListener("click", () => {
                                                                                                                                    commentBtn.style.opacity = commentBtn.style.opacity == "0.4" ? "1" : "0.4";
                                                                                                                                        });

                                                                                                                                            feed.prepend(post);
                                                                                                                                            }