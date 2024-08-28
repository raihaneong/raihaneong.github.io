document.addEventListener("DOMContentLoaded", function () {
    fetch("projects.json")
        .then(res => res.json()
            .then(data => {
                const proj = document.getElementById("project")

                const nameEl = document.createElement("p")
                nameEl.textContent = data.projects[0];

                proj.appendChild(nameEl)

            console.log(data)

            })
    )
    .catch(error => console.error("error in fetching", error))
})