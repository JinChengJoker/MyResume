(function() {
    var view = document.getElementsByClassName('sectionElement')
    var controller = {
        scrollspy: function(view) {
            for(var i = 0; i < view.length; i++) {
                let bottom = view[i].getBoundingClientRect().bottom
                if(bottom > 120) {
                    break
                }
            }
            let tagId = view[i].id
            let aTag = document.querySelector('a[href="#' + tagId + '"]')
            let liTags = aTag.parentNode.parentNode.children
            for(let i = 0; i < liTags.length; i++) {
                liTags[i].classList.remove('highlight')
            }
            aTag.parentNode.classList.add('highlight')
        }
    }
    controller.scrollspy(view)
    
    window.addEventListener('scroll', function() {
        controller.scrollspy(view)
    })
})()