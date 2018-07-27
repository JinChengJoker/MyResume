(function() {
    listenFadeIn()

    window.addEventListener('scroll', function() {
        listenFadeIn()
    })
    
    function listenFadeIn() {
        let height = document.documentElement.clientHeight
        let tags = document.getElementsByClassName('fadeIn')
        for(let i = 0; i < tags.length; i++) {
            let top = tags[i].getBoundingClientRect().top
            if(height - top > 100) {
                tags[i].classList.remove('offset')
            }
        }
    }
})()