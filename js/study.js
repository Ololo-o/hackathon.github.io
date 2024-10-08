const tabs = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('.page');

document.getElementById("tab1").style.backgroundColor = "var(--secondary-color)";
pages.forEach((page, index) => {
    if (index > 0) {
        page.style.display = 'none';
    }
});

tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        const tabNumber = event.currentTarget.dataset.tabNumber;
        changeTab(tabNumber);
    });
});

function changeTab(tabNumber) {
    pages.forEach((page) => {
        page.style.display = 'none';
    });
    document.querySelector(`#page${tabNumber}`).style.display = 'block';
    tabs.forEach((tab) => {
        tab.style.backgroundColor = "var(--white-color)";
    });
    document.querySelector(`#tab${tabNumber}`).style.backgroundColor = "var(--secondary-color)";
    if (tabNumber === 1) {
        document.querySelector(`#page1`).classList.add('course-info');
    }
}

function onYouTubePlayerAPIReady() {
    const iframe = document.getElementById('iframe-video');
    const videoId = 'g7tzDP3oI2Y';
    const player = new YT.Player(iframe.id, {
        videoId: videoId,
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

document.addEventListener('DOMContentLoaded', onYouTubePlayerAPIReady);

const messageTextarea = document.getElementById('notes');
const saveBtn = document.getElementById('notesBtn');

saveBtn.addEventListener('click', () => {
    const message = messageTextarea.value.trim();
    if (message) {
        localStorage.setItem('note', message);
        console.log('Message saved to localStorage:', message);
    } else {
        console.log('Please enter a message');
    }

});
const savedMessage = localStorage.getItem('note');
if (savedMessage) {
    messageTextarea.value = savedMessage;
}

function init() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i = 0; i < vidDefer.length; i++) {
        if (vidDefer[i].getAttribute('data-src')) {
            vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
        }
    }
}
window.onload = init;
