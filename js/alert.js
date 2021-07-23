notifications_container = document.querySelector('.notifications');
var pushNotification = function (message, color) {
  notification = document.createElement('div');
  x_close = document.createElement('div');
  x_close.appendChild(document.createElement('div'));
  x_close.appendChild(document.createElement('div'));
  notification.appendChild(x_close);
  notification.appendChild(document.createElement('p').appendChild(document.createTextNode(message)));
  notification.classList.add(color);
  notifications_container.appendChild(notification);
  notification.firstChild.addEventListener('click', function() {
    this.parentNode.classList.add('fading_out');
    setTimeout(function () {
      notification.parentNode.removeChild(notification);
    }, 1000);
  });
  setTimeout(function () {
    notification.parentNode.removeChild(notification);
  }, 7000);
}