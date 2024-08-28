document.addEventListener("DOMContentLoaded", function () {
    fetch("projects.json")
        .then(res => res.json()
            .then(data => {
                const projDetail = data.projects[0]
                const proj = document.getElementById("project")

                const nameEl = document.createElement("p")
                nameEl.textContent = projDetail.name + " - " + projDetail.link + " | " + projDetail.description;

                proj.appendChild(nameEl)

            console.log(data.projects[0])

            })
    )
    .catch(error => console.error("error in fetching", error))
})