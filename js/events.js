(function () {
    const events = [
        [{
            title: 'Participants registration begin',
            from: '9am',
        },
        {
            title: 'Opening Ceremony',
            from: '10:30am',
        },
        {
            title: 'Keynote session',
            from: '11am'
        },
        {
            title: 'lunch served',
            from: '12:30pm'
        },
        {
            title: 'Workshop 1 & 2 parallely',
            from: '1:30pm'
        },
        {
            title: 'hacking strarts',
            from: '2:30pm',
        },
        {
            title: 'Workshop 3 & 4 parallely',
            from: '6:30pm',
        },
        {
            title: 'dinner served',
            from: '7:30pm',
        },

        ],
        [
            {
                title: 'midnight snack served alongside campfire',
                from: '1am',
            },
            {
                title: 'Breakfast',
                from: '7:30am',
            },
            {
                title: 'Slideshow Karaoke',
                from: '10:30am',
            },
            {
                title: 'Break for lunch',
                from: '12:30pm',
            },
            {
                title: 'submission ends',
                from: '2pm',
            },
            {
                title: 'Jugdes briefing starts and demo',
                from: '2:30pm',
            },
            {
                title: 'scoring and top ten',
                from: '3:30pm',
            },
            {
                title: 'Top Ten Presentation',
                from: '4:30pm',
            },
            {
                title: 'Closing Ceremony',
                from: '5:30pm',
            },
            {
                title: 'Vote of thanks',
                from: '6:55pm',
            },
        ]
    ];
    var day1 = document.querySelector('.day1');
    var day2 = document.querySelector('.day2');
    events.forEach((day, ii) => {
        day.forEach((event, i) => {
            let from;
            let to;
            let d;
            try {
                if (event.from) from = event.from;
                else from = day[i - 1].to;


                if (event.to) to = event.to;
                else to = day[i + 1].from;


                if (event.d) d = event.d;

                else d = ' ';
            } catch (error) {
                console.log('its fine')
            }

            let card = document.createElement('div');
            card.setAttribute('class', 'schedule-card');
            card.innerHTML = `<div class="card-content">
                        <h3>${event.title}</h3>
                        <p class="timings">${from} to ${to}</p>
                        <p class="event-desc">${d}</p>
                    </div>`;
            if (ii) {
                day2.appendChild(card);
            } else {
                day1.appendChild(card);
            }
        })
    });
    document.querySelector('#phone a').setAttribute('href', 'tel:' + document.querySelector('#phone a').innerText);

    document.querySelectorAll('img').forEach(img => {
        img.onload = () => {
            img.style.opacity = 1;
        }
        setTimeout(() => {
            img.style.opacity = 1;
        }, 1000);
        if (img.getAttribute('data-src')) img.src = img.getAttribute('data-src');
    });

})();
