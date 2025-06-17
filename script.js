// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Update time and date
    function updateDateTime() {
        const now = new Date();
        const timeElement = document.querySelector('.time');
        const dateElement = document.querySelector('.date');
        
        timeElement.textContent = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
        
        dateElement.textContent = now.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    // Update time every minute
    updateDateTime();
    setInterval(updateDateTime, 60000);

    // Handle boot sequence
    const bootScreen = document.querySelector('.boot-screen');
    const desktop = document.querySelector('.desktop');

    setTimeout(() => {
        bootScreen.classList.add('fade-out');
        desktop.style.display = 'block';
    }, 3000);

    // App window templates
    const appTemplates = {
        about: {
            title: 'About Me',
            content: `<h2>About Me</h2><p>Welcome to my portfolio! I'm a passionate developer...</p>`
        },
        projects: {
            title: 'Projects',
            content: `<h2>My Projects</h2><div class="project-grid"><div class="project-card"><h3>Project 1</h3><p>Description of project 1...</p></div><div class="project-card"><h3>Project 2</h3><p>Description of project 2...</p></div></div>`
        },
        skills: {
            title: 'Skills',
            content: `<h2>My Skills</h2><div class="skills-grid"><div class="skill-item">HTML</div><div class="skill-item">CSS</div><div class="skill-item">JavaScript</div><div class="skill-item">React</div></div>`
        },
        contact: {
            title: 'Contact',
            content: `<h2>Contact Me</h2><div class="contact-info"><p>Email: your.email@example.com</p><p>LinkedIn: linkedin.com/in/yourprofile</p><p>GitHub: github.com/yourusername</p></div>`
        }
    };

    let zIndexCounter = 10;
    const openWindows = {};

    // Helper to create a window
    function createWindow(app) {
        if (openWindows[app]) {
            focusWindow(openWindows[app]);
            return;
        }
        const win = document.createElement('div');
        win.className = 'window';
        win.style.zIndex = ++zIndexCounter;
        win.innerHTML = `
            <div class="window-header">
                <div class="window-controls">
                    <span class="close">×</span>
                    <span class="minimize">−</span>
                    <span class="maximize">□</span>
                </div>
                <div class="window-title">${appTemplates[app].title}</div>
            </div>
            <div class="window-content">${appTemplates[app].content}</div>
        `;
        win.style.display = 'block';
        win.style.position = 'absolute';
        win.style.top = `${80 + Math.random() * 100}px`;
        win.style.left = `${200 + Math.random() * 100}px`;
        desktop.appendChild(win);
        openWindows[app] = win;
        makeDraggable(win);
        addWindowControls(win, app);
        win.addEventListener('mousedown', () => focusWindow(win));
        focusWindow(win);
    }

    // Focus window (bring to front)
    function focusWindow(win) {
        zIndexCounter++;
        win.style.zIndex = zIndexCounter;
    }

    // Add window controls
    function addWindowControls(win, app) {
        const closeBtn = win.querySelector('.close');
        const minimizeBtn = win.querySelector('.minimize');
        const maximizeBtn = win.querySelector('.maximize');
        closeBtn.addEventListener('click', () => {
            win.remove();
            openWindows[app] = null;
        });
        minimizeBtn.addEventListener('click', () => {
            win.style.display = 'none';
        });
        maximizeBtn.addEventListener('click', () => {
            win.classList.toggle('maximized');
        });
    }

    // Make a window draggable
    function makeDraggable(win) {
        const header = win.querySelector('.window-header');
        let isDragging = false;
        let offsetX = 0, offsetY = 0;
        let mouseMoveHandler, mouseUpHandler;

        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            focusWindow(win);
            offsetX = e.clientX - win.offsetLeft;
            offsetY = e.clientY - win.offsetTop;
            document.body.style.userSelect = 'none';

            mouseMoveHandler = function(e) {
                if (!isDragging) return;
                win.style.left = (e.clientX - offsetX) + 'px';
                win.style.top = (e.clientY - offsetY) + 'px';
            };
            mouseUpHandler = function() {
                isDragging = false;
                document.body.style.userSelect = '';
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            };
            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        });
    }

    // App icon click handlers
    document.querySelectorAll('.icon, .dock-item').forEach(icon => {
        icon.addEventListener('click', () => {
            const app = icon.getAttribute('data-app');
            if (app && app !== 'trash') {
                if (!openWindows[app] || !desktop.contains(openWindows[app])) {
                    createWindow(app);
                } else {
                    openWindows[app].style.display = 'block';
                    focusWindow(openWindows[app]);
                }
            }
        });
    });
}); 