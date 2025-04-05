new Swiper(".mySwiper", {
    direction: "vertical",
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


let items = document.querySelectorAll('.filter-sections div');
animate(items);

each('.filter-links li a', function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        filterLinks(el);
    });
});

function filterLinks(element) {
    let filter = element.getAttribute('data-filter');

    each('.view', function (e) {
        e.classList.remove('view');
    });

    if (filter === 'all') {
        animate(items);
    } else {
        let selectedItems = document.querySelectorAll('.' + filter);
        animate(selectedItems);
    }
}

function each(selector, callback) {
    let elements = document.querySelectorAll(selector);
    elements.forEach(callback);
}

function animate(itemList) {
    (function show(counter) {
        setTimeout(function () {
            itemList[counter].classList.add('view');
            counter++;
            if (counter < itemList.length) show(counter);
        }, 50);
    })(0);
}

each('.filter-links li a', function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();

        each('.filter-links a.active', function (link) {
            link.classList.remove('active');
        });

        el.classList.add('active');

        filterLinks(el);
    });
});

// Counter Number animation
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
const obj2 = document.getElementById("value2");
const obj3 = document.getElementById("value3");
const obj4 = document.getElementById("value4");
const obj5 = document.getElementById("value5");
animateValue(obj, 0, 10, 3000);
animateValue(obj2, 0, 2, 2000);
animateValue(obj3, 0, 40, 3000);
animateValue(obj4, 0, 12, 3000);
animateValue(obj5, 0, 160, 3000);

// Net Animation

