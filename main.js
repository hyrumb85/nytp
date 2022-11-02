alert('omit');
window.addEventListener("visibilitychange", function(event) {
    event.stopImmediatePropagation();
}, true);
