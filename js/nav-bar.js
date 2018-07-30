(function() {
    var view = document.getElementById('topNavBar')
    var controller = {
        navBarFadeIn: function(view) {
            setTimeout(() => {
                view.classList.remove('offset')
            }, 300)
        },
        highlightNavBar: function(view) {
            if(window.scrollY > 0) {
                view.classList.add('active')
            } else {
                view.classList.remove('active')
            }
        },
        listenNavBar: function(view) {
            let liTags = view.querySelectorAll('nav.navBar > ul > li')
            let aTags = view.querySelectorAll('nav.navBar > ul > li > a')    
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
    }
    controller.navBarFadeIn(view)
    controller.highlightNavBar(view)
    controller.listenNavBar(view)
    
    window.addEventListener('scroll', function() {
        controller.highlightNavBar(view)
    })
})()