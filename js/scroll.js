(() => {
    const elements = [document.querySelectorAll('.fadein'), document.querySelectorAll('.track-card'), document.querySelectorAll('.question'), document.querySelectorAll('.sponsor'), document.querySelectorAll('footer')];
    /* 
    var observer = new IntersectionObserver(fadein);
    
    function fadein(entries) {
     
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) entry.target.style.opacity = '1';
            else entry.target.style.opacity = '0';
        });
    } */

    Promise.all(elements.map(eles => {
        return new Promise((resolve, reject) => {
            const observer = new IntersectionObserver(fadein);
            function fadein(entries) {
                entries.forEach(entry => {
                    if (entry.intersectionRatio > 0) entry.target.style.opacity = '1';
                    else entry.target.style.opacity = '0';
                });
            }
            eles.forEach(e => observer.observe(e));
            resolve('done');
        })
    }));
})