window.onscroll = function() {
    if(window.scrollY > 0) {
        topNavBar.classList.add('active')
    } else {
        topNavBar.classList.remove('active')
    }
}

portfolio1.onclick = function() {
    filterBar.className = "filterBar filter1"
}
portfolio2.onclick = function() {
    filterBar.className = "filterBar filter2"
}
portfolio3.onclick = function() {
    filterBar.className = "filterBar filter3"
}