const elements = [...document.querySelectorAll('.fadein'), ...document.querySelectorAll('.track-card'), ...document.querySelectorAll('.question'), ...document.querySelectorAll('.sponsor'), ...document.querySelectorAll('footer')];
var observer = new IntersectionObserver(fadein);
elements.forEach(ele => observer.observe(ele));
function fadein(entries) {
    /* console.log(entries) */
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) entry.target.style.opacity = '1';
        else entry.target.style.opacity = '0';
    });
}

