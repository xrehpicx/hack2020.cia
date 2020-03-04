const events = [
    [
        {
            title: 'Participants Registration begin',
            from: '9am',
            noto: true,
        },
        {
            title: 'Opening Ceremony',
            from: '10:30am',
        },
        {
            title: 'Keynote Session',
            from: '11am'
        },
        {
            title: 'Lunch Served',
            from: '12:30pm'
        },
        {
            title: 'Build Your First Skill for Amazon Alexa and<br>Build a Blockchain Taco Shop with Ark.io',
            from: '1:30pm'
        },
        {
            title: 'Hacking Starts',
            from: '2:30pm',
            noto: true,
        },
        {
            title: 'Build and Deploy a Full stack web app with AWS',
            from: '6:30pm',
        },
        {
            title: 'Dinner Served',
            from: '7:30pm',
            d: '',
            noto: true,
        },

    ],

    [
        {
            title: 'Midnight snack served alongside campfire',
            from: '1am',
            noto: true,
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
            title: 'Submission Ends',
            from: '2pm',
            noto: true,
        },
        {
            title: 'Jugdes briefing starts and demo',
            from: '2:30pm',
        },
        {
            title: 'Scoring and Top ten',
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
            title: 'Vote of Thanks',
            from: '6:55pm',
            noto: true,
        },
    ]
];

(function () {
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


                if (event.d !== undefined) {
                    d = event.d;
                    console.log('event is set to', event.d)
                }
                else {
                    if (event.d === undefined) d = '';
                    console.log('event is set to', event.d)
                }

            } catch (error) {
                console.log(error)
            }

            let card = document.createElement('div');
            card.setAttribute('class', 'schedule-card');
            if (!event.noto) {
                card.innerHTML = `<div class="card-content fadein">
                        <h3>${event.title}</h3>
                        <p class="timings">${from} to ${to}</p>
                        <p class="event-desc">${d}</p>
                    </div>`;
            } else {
                if (d === undefined) d = '';
                card.innerHTML = `<div class="card-content fadein">
                        <h3>${event.title}</h3>
                        <p class="timings">${from}</p>
                        <p class="event-desc">${d}</p>
                    </div>`;
            }

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
