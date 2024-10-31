
let clickCount = sessionStorage.getItem('clickCount') ? parseInt(sessionStorage.getItem('clickCount')) : 0;

document.getElementById("click-count").innerText = "Number of Anime's about which you've read the Information: " + clickCount;

function updateClickCount() {
    clickCount++;
    sessionStorage.setItem('clickCount', clickCount);
    document.getElementById("click-count").innerText = "Number of Anime's about which you've read the Information: " + clickCount;
}

document.querySelectorAll('.click-counter').forEach(item => {
    item.addEventListener('click', updateClickCount);
});