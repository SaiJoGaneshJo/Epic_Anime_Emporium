function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    };
    document.getElementById("current-time").innerText = now.toLocaleString('en-US', options);
}
updateDateTime();
setInterval(updateDateTime, 1000);



 /*   function updateTime() {
        const now = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        document.getElementById('current-time').textContent = now.toLocaleTimeString([], options);
    }

    setInterval(updateTime, 1000);
    updateTime();*/
