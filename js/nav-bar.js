(function() {
    navBarFadeIn()
    highlightNavBar()
    listenNavBar()
    
    window.addEventListener('scroll', function() {
        highlightNavBar()
    })
    
    function navBarFadeIn() {
        setTimeout(() => {
            topNavBar.classList.remove('offset')
        }, 300)
    }
    
    function highlightNavBar() {
        if(window.scrollY > 0) {
            topNavBar.classList.add('active')
        } else {
            topNavBar.classList.remove('active')
        }
        let tags = document.getElementsByClassName('fadeinElement')
        for(var i = 0; i < tags.length; i++) {
            let bottom = tags[i].getBoundingClientRect().bottom
            if(bottom > 120) {
                break
            }
        }
        let tagId = tags[i].id
        let aTag = document.querySelector('a[href="#' + tagId + '"]')
        let liTags = aTag.parentNode.parentNode.children
        for(let i = 0; i < liTags.length; i++) {
            liTags[i].classList.remove('highlight')
        }
        aTag.parentNode.classList.add('highlight')
    }
    
    function listenNavBar() {
        let liTags = document.querySelectorAll('nav.navBar > ul > li')
        let aTags = document.querySelectorAll('nav.navBar > ul > li > a')    
        for(let i = 0; i < liTags.length; i++) {
            liTags[i].onmouseenter = function() {
                this.classList.add('active')
            }
            liTags[i].onmouseleave = function() {
                this.classList.remove('active')
            }
        }
        for(let i = 0; i < aTags.length - 1; i++) {
            aTags[i].onclick = function(e) {
                e.preventDefault()
                let href = this.getAttribute('href')
                let element = document.querySelector(href)
                let currentTop = window.scrollY
                let targetTop = element.offsetTop - 80
                // tween
                var position = { y: currentTop }
                new TWEEN.Tween(position)
                    .to({ y: targetTop }, 500)
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .onUpdate(function() { 
                        window.scrollTo(0, position.y)
                    })
                    .start()
            }
        }
        // Setup the animation loop.
        animate()
        function animate() {
            requestAnimationFrame(animate)
            TWEEN.update()
        }
    }
})()