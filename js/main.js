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
    for(let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function() {
            this.classList.add('active')
        }
        liTags[i].onmouseleave = function() {
            this.classList.remove('active')
        }
    }
}