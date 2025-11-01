let app = document.getElementById('app');

function createElement(tag, text = '', className = '') {
    let element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.className = className;
    return element;
}

function createLink(text, href, className = '') {
    let link = document.createElement('a');
    link.textContent = text;
    link.href = href;
    if (className) link.className = className;
    return link;
}

function router() {
    let hash = window.location.hash;
    
    app.innerHTML = '';
    
    if (hash === '#users' || hash === '') {
        showUsersPage();
    } else if (hash === '#users#todos') {
        showTodosPage();
    } else if (hash === '#users#posts') {
        showPostsPage();
    } else if (hash === '#users#posts#comments') {
        showCommentsPage();
    } else {
        app.appendChild(createElement('h1', 'Страница не найдена'));
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

function showUsersPage() {
    app.appendChild(createElement('h1', 'Пользователи'));
}

function showTodosPage() {
    app.appendChild(createElement('h1', 'Список задач'));
}

function showPostsPage() {
    app.appendChild(createElement('h1', 'Посты'));
}

function showCommentsPage() {
    app.appendChild(createElement('h1', 'Комментарии'));
}