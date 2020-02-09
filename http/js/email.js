function submitChange() {
    let formData = new FormData();
    formData.append("session", window.localStorage.getItem("session"));
    formData.append("code", document.getElementById('code').value);
    sendReq(formData, "https://api.olmmcc.tk/change_email", (json) => {
        if (json.success == true) {
            window.localStorage.setItem("notification", "Your email address has been successfully changed.");
            window.location = "/account";
        } else {
            createNotification("Something went wrong. Your code may be incorrect.");
        }
    });
}
document.getElementById('verify').addEventListener('click', submitChange);
document.getElementById('code').addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        submitChange();
    }
});
