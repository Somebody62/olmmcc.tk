function closeNotification() {
    var element = document.getElementById("notificationDiv");
    if (element != null) {
        element.parentNode.removeChild(element);
    }
}

function keydown(event) {
    if (event.keyCode == 27) {
        closeNotification();
    }
}
document.onkeydown = keydown;
let notificationDiv = document.createElement('div');
notificationDiv.id = 'notificationDiv';
notificationDiv.innerHTML = '<p id="notificationP">$errortext</p>';
let close = document.createElement('img');
close.src = '/images/close.gif';
close.id = 'closeNotification';
document.getElementById('myPage').appendChild(notificationDiv);
document.getElementById('notificationDiv').appendChild(close);
close.onclick = closeNotification;