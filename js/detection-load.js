(function() {
    var view = document.getElementById('loading')
    var controller = {
        removeClass: function(view) {
            view.classList.remove('active')
        }
    }
    controller.removeClass(view)
})()