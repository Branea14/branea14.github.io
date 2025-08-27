const copyEmail = (event) => {
    event.preventDefault()
    const email = event.currentTarget.dataset.email

    navigator.clipboard.writeText(email).then(() => {
        alert("Copied email: " + email)
    })
}
