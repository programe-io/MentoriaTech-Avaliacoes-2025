function addRecipe() {
        const name = document.getElementById("recipeName").value;
            const steps = document.getElementById("recipeSteps").value;

                if (name.trim() === "" || steps.trim() === "") {
                        alert("Preencha os campos.");
                                return;
                                    }

                                        const recipeList = document.getElementById("recipeList");

                                            const recipeItem = document.createElement("article");
                                                recipeItem.classList.add("recipe");

                                                    recipeItem.innerHTML = `
                                                            <h3>${name}</h3>
                                                                    <p>${steps}</p>
                                                                        `;

                                                                            recipeList.appendChild(recipeItem);

                                                                                document.getElementById("recipeName").value = "";
                                                                                    document.getElementById("recipeSteps").value = "";
                                                                                    }
                                                                                    
}