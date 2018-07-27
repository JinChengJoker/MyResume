(function() {
    var view = document.getElementsByClassName('fadeinElement')
    var controller = {
        elementFadein: function(view) {
            let height = document.documentElement.clientHeight
            for(let i = 0; i < view.length; i++) {
                let top = view[i].getBoundingClientRect().top
                if(height - top > 100) {
                    view[i].classList.remove('offset')
                }
            }
        }
    }
    controller.elementFadein(view)

    window.addEventListener('scroll', function() {
        controller.elementFadein(view)
    })
})()