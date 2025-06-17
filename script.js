// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
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

    updateDateTime();
    setInterval(updateDateTime, 60000);

    const bootScreen = document.querySelector('.boot-screen');
    const desktop = document.querySelector('.desktop');

    setTimeout(() => {
        bootScreen.classList.add('fade-out');
        desktop.style.display = 'block';
    }, 3000);

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
        },
        safari: {
            title: 'Safari',
            content: `<div class="safari-bar"><span class="safari-url">https://gurunathanr.blogspot.com/</span></div><iframe class="safari-frame" src="https://gurunathanr.blogspot.com/" frameborder="0"></iframe>`
        },
        iphone: {
            title: 'iPhone',
            content: `
                <div class="iphone-frame">
                    <div class="iphone-screen">
                        <div class="iphone-boot-screen">
                            <div class="iphone-boot-logo">
                                <div class="iphone-apple-logo"></div>
                                <div class="iphone-loading-bar">
                                    <div class="iphone-loading-progress"></div>
                                </div>
                            </div>
                        </div>
                        <div class="status-bar">
                            <span class="status-time">9:41</span>
                            <div class="status-icons">
                                <span class="status-text"></span>
                                <img src="https://img.icons8.com/ios-filled/50/000000/wifi--v1.png" alt="Wi-Fi" class="status-wifi"/>
                                <img src="https://img.icons8.com/ios-filled/50/000000/full-battery.png" alt="Battery" class="status-battery"/>
                                <span class="status-text"></span>
                            </div>
                        </div>
                        <div class="dynamic-island"></div>
                        <div class="iphone-widgets-grid">
                            <!-- Calendar Widget -->
                            <div class="iphone-widget calendar-widget">
                                <div class="widget-header">
                                    <span class="widget-day">WEDNESDAY</span>
                                    <span class="widget-date">27</span>
                                </div>
                                <div class="widget-event-list">
                                    <div class="widget-event">
                                        <span class="event-color-bar green"></span>
                                        <span class="event-title">Gym</span>
                                        <span class="event-time">10:00-11:30AM</span>
                                    </div>
                                    <div class="widget-event">
                                        <span class="event-color-bar yellow"></span>
                                        <span class="event-title">Lunch & Learn</span>
                                        <span class="event-time">12-1PM</span>
                                    </div>
                                </div>
                                <span class="widget-footer">Calendar</span>
                            </div>
                            <!-- Weather Widget -->
                            <div class="iphone-widget weather-widget">
                                <div class="weather-location">San Francisco</div>
                                <div class="weather-temp">58&deg;</div>
                                <div class="weather-description">Mostly Cloudy</div>
                                <div class="weather-high-low">H:66&deg; L:56&deg;</div>
                                <div class="weather-hourly">
                                    <div class="hourly-item"><span>10AM</span><img src="https://img.icons8.com/ios-filled/50/ffffff/cloud.png"/><span class="hourly-temp">59&deg;</span></div>
                                    <div class="hourly-item"><span>11AM</span><img src="https://img.icons8.com/ios-filled/50/ffffff/cloud.png"/><span class="hourly-temp">62&deg;</span></div>
                                    <div class="hourly-item"><span>12PM</span><img src="https://img.icons8.com/ios-filled/50/ffffff/partly-cloudy-day.png"/><span class="hourly-temp">63&deg;</span></div>
                                    <div class="hourly-item"><span>1PM</span><img src="https://img.icons8.com/ios-filled/50/ffffff/partly-cloudy-day.png"/><span class="hourly-temp">65&deg;</span></div>
                                    <div class="hourly-item"><span>2PM</span><img src="https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png"/><span class="hourly-temp">66&deg;</span></div>
                                    <div class="hourly-item"><span>3PM</span><img src="https://img.icons8.com/ios-filled/50/ffffff/sun--v1.png"/><span class="hourly-temp">66&deg;</span></div>
                                </div>
                                <span class="widget-footer">Weather</span>
                            </div>
                        </div>
                        <div class="iphone-apps-grid">
                            <div class="iphone-app-icon"><img src="https://img.icons8.com/ios-filled/100/1E90FF/new-post.png" alt="Mail"/><span class="iphone-app-name">Mail</span></div>
                            <div class="iphone-app-icon"><img src="https://img.icons8.com/ios-filled/100/FF6347/news.png" alt="News"/><span class="iphone-app-name">News</span></div>
                            <div class="iphone-app-icon"><img src="https://img.icons8.com/ios-filled/100/000000/clock.png" alt="Clock"/><span class="iphone-app-name">Clock</span></div>
                        </div>
                        <div class="iphone-search-bar">
                            <img src="https://img.icons8.com/ios-filled/50/cccccc/search--v1.png" alt="Search"/>
                            <span>Search</span>
                        </div>
                        <div class="iphone-dock">
                            <div class="iphone-dock-icon" data-app="phone"><img src="https://img.icons8.com/ios-filled/100/00FF7F/phone.png" alt="Phone"/></div>
                            <div class="iphone-dock-icon" data-app="safari"><img src="https://img.icons8.com/ios-filled/100/00BFFF/safari--v1.png" alt="Safari"/></div>
                            <div class="iphone-dock-icon" data-app="messages"><img src="https://img.icons8.com/ios-filled/100/32CD32/speech-bubble--v1.png" alt="Messages"/></div>
                        </div>
                    </div>
                </div>
            `
        },
        phone: {
            title: 'Phone',
            content: `
                <div class="phone-dialer">
                    <div class="dialer-display">+919003015441</div>
                    <div class="dialer-keypad">
                        <div class="keypad-row">
                            <button class="dialer-button">1<span></span></button>
                            <button class="dialer-button">2<span>ABC</span></button>
                            <button class="dialer-button">3<span>DEF</span></button>
                        </div>
                        <div class="keypad-row">
                            <button class="dialer-button">4<span>GHI</span></button>
                            <button class="dialer-button">5<span>JKL</span></button>
                            <button class="dialer-button">6<span>MNO</span></button>
                        </div>
                        <div class="keypad-row">
                            <button class="dialer-button">7<span>PQRS</span></button>
                            <button class="dialer-button">8<span>TUV</span></button>
                            <button class="dialer-button">9<span>WXYZ</span></button>
                        </div>
                        <div class="keypad-row">
                            <button class="dialer-button">*<span></span></button>
                            <button class="dialer-button">0<span>+</span></button>
                            <button class="dialer-button">#<span></span></button>
                        </div>
                    </div>
                    <div class="dialer-call-button">
                        <button class="call-button"><img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="Call"/></button>
                    </div>
                </div>
            `
        }
    };

    let zIndexCounter = 10;
    const openWindows = {};

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
                    <span class="close"></span>
                    <span class="minimize"></span>
                    <span class="maximize"></span>
                </div>
                <div class="window-title">${appTemplates[app].title}</div>
            </div>
            <div class="window-content">${appTemplates[app].content}</div>
            <div class="resize-handle"></div>
        `;
        win.style.display = 'block';
        win.style.position = 'absolute';
        const winWidth = 600;
        const winHeight = 400;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        win.style.width = winWidth + 'px';
        win.style.height = '';
        
        win.style.left = Math.max(0, (viewportWidth - winWidth) / 2) + 'px';
        win.style.top = Math.max(0, (viewportHeight - winHeight) / 2) + 'px';

        desktop.appendChild(win);
        openWindows[app] = win;
        makeDraggable(win);
        addWindowControls(win, app);
        win.addEventListener('mousedown', () => focusWindow(win));
        focusWindow(win);

        const bootScreen = win.querySelector('.iphone-boot-screen');
        if (bootScreen) {
            setTimeout(() => {
                bootScreen.classList.add('hidden');
            }, 3000); // 3 seconds boot animation to match CSS fade-out
        }

        // Phone Dialer Logic
        if (app === 'phone') {
            const dialerDisplay = win.querySelector('.dialer-display');
            const dialerButtons = win.querySelectorAll('.dialer-button');
            const callButton = win.querySelector('.call-button');

            dialerButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const value = button.textContent.trim().charAt(0); // Get the main number/symbol
                    if (dialerDisplay.textContent === '+919003015441') {
                        dialerDisplay.textContent = ''; // Clear initial number if present
                    }
                    dialerDisplay.textContent += value;
                });
            });

            callButton.addEventListener('click', () => {
                alert(`Calling ${dialerDisplay.textContent}...`); // Simulate calling
            });
        }
    }

    function focusWindow(win) {
        zIndexCounter++;
        win.style.zIndex = zIndexCounter;
    }

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

    function makeDraggable(win) {
        let dragTarget = win;

        let isDragging = false;
        let offsetX, offsetY;

        const mouseMoveHandler = function (e) {
            if (!isDragging) return;
            win.style.left = (e.clientX - offsetX) + 'px';
            win.style.top = (e.clientY - offsetY) + 'px';
        };

        const mouseUpHandler = function () {
            isDragging = false;
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        dragTarget.addEventListener('mousedown', (e) => {
            if (e.target.closest('.window-controls') || e.target.closest('.resize-handle')) {
                return;
            }
            
            isDragging = true;
            focusWindow(win);
            offsetX = e.clientX - win.offsetLeft;
            offsetY = e.clientY - win.offsetTop;
            document.body.style.userSelect = 'none';

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        });
    }

    document.querySelectorAll('.icon, .dock-item').forEach(icon => {
        icon.addEventListener('click', () => {
            const app = icon.getAttribute('data-app');
            if (app && app !== 'trash') {
                createWindow(app);
            }
        });
    });
});
