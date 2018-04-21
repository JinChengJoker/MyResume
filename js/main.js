window.onload = function() {
    var loading = document.getElementById('loading')
    loading.classList.remove('active')
}

window.onscroll = function() {
    if(window.scrollY > 0) {
        topNavBar.classList.add('active')
    } else {
        topNavBar.classList.remove('active')
    }
}

listenNavBar()

portfolio1.onclick = function() {
    filterBar.className = "filterBar filter1"
}
portfolio2.onclick = function() {
    filterBar.className = "filterBar filter2"
}
portfolio3.onclick = function() {
    filterBar.className = "filterBar filter3"
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
            let top = element.offsetTop
            window.scrollTo(0 ,top - 80)
        }
    }
}