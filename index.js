

document.addEventListener("DOMContentLoaded", function () {
    fetch("projects.json")
        .then(res => res.json()
            .then(data => {
                const projDetail = data.projects
                
                projDetail.forEach(element => {
                    const proj = document.getElementById("project")
    
                    const nameEl = document.createElement("p")
                    nameEl.textContent = element.name + " - " + element.link + " | " + element.description;
    
                    proj.appendChild(nameEl)
                });

            console.log(data.projects[0])

            })
    )
    .catch(error => console.error("error in fetching", error))
})