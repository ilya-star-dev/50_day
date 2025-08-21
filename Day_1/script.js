let panels = document.querySelectorAll(".panel")
panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        deleteActive()
        panel.classList.add("active")
    })
})

function deleteActive() {
    panels.forEach((panel) => {
        panel.classList.remove("active")
    })
}
