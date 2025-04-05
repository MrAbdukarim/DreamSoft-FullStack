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
