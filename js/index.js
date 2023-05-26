
const header = document.getElementById('header');

window.addEventListener('scroll',() => {
    const headerHeight = header.offsetHeight;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollY < headerHeight) {
        header.classList.remove('active')
    } else {
        header.classList.add('active')
    }
});

document.getElementById("btn_open").onclick = function () {
    document.querySelector(".nav_detail").classList.add('active')
    document.querySelector(".dimmed").classList.add('active')
};


document.getElementById("btn_close").onclick = function () {
    document.querySelector(".nav_detail").classList.remove('active')
    document.querySelector(".dimmed").classList.remove('active')
};

document.getElementById("dimmed").onclick = function () {
    document.querySelector(".nav_detail").classList.remove('active')
    document.querySelector(".dimmed").classList.remove('active')
};



document.getElementById("career_job").addEventListener("mouseover", mouseOverJob);

function mouseOverJob() {
    document.getElementById("career_job").classList.add('active')
    document.getElementById("career_talent").classList.remove('active')
}

document.getElementById("career_talent").addEventListener("mouseover", mouseOverTalent);

function mouseOverTalent() {
    document.getElementById("career_talent").classList.add('active')
    document.getElementById("career_job").classList.remove('active')
}


/**
 * 스와이프 이벤트
 **/
var swiper5 = new Swiper(".slide_tab", {
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    observer:true,
    observeParents:true,
});
var swiper6 = new Swiper(".slide_con", {
    spaceBetween: 30,
    pagination: {
        el: ".slide_circle",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper5,
    },
    observer:true,
    observeParents:true,
});



history.scrollRestoration = "manual";

/**
 * 숫자 카운팅 이벤트
 **/
const count01 = document.getElementById("count01");
const count02 = document.getElementById("count02");
const count03 = document.getElementById("count03");

function numberCounting(obj, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    let current = start;
    const timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function numberIncreaseEvent() {
    numberCounting(count01, 0, 463, 1000);
    numberCounting(count02, 0, 30, 1200);
    numberCounting(count03, 0, 6, 1300);
}

let isAddedAnimateClass = false;

document.addEventListener('scroll', () => {
    if (!isAddedAnimateClass && document.querySelector('.scroll_box').classList.contains('animate')) {
        isAddedAnimateClass = true;
        numberIncreaseEvent()
    }
})