const elements = [...document.querySelectorAll('.fadein'), ...document.querySelectorAll('.track-card'), ...document.querySelectorAll('.question'), ...document.querySelectorAll('.sponsor'), ...document.querySelectorAll('footer')];
var observer = new IntersectionObserver(fadein);

function fadein(entries) {
    /* console.log(entries) */
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) entry.target.style.animation = `fadein 200ms forwards ease-in`;
        else entry.target.style.animation = 'none';
    });
}

elements.forEach(ele => observer.observe(ele));
