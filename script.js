function createWindow(title, url) {
    const desktop = document.getElementById('desktop');
    const win = document.createElement('div');
    win.className = 'window';
    win.style.left = '100px';
    win.style.top = '100px';

    win.innerHTML = `
        <div class="window-header">
            <span>${title}</span>
            <button onclick="this.closest('.window').remove()">X</button>
        </div>
        <iframe class="window-content" src="${url}"></iframe>
    `;

    desktop.appendChild(win);
    makeDraggable(win);
}

function makeDraggable(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = el.querySelector('.window-header');

    header.onmousedown = (e) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        };
        document.onmousemove = (e) => {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        };
    };
}

// Simple Clock
setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();
}, 1000);
