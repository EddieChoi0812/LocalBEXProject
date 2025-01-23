// 侧边栏菜单交互
document.addEventListener('click', (e) => {
    if (e.target.matches('.sidebar-menu > li > a')) {
        const submenu = e.target.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
    }
});

// 动态更新内容标题
document.addEventListener('click', (e) => {
    if (e.target.matches('.sidebar-menu a')) {
        const title = e.target.textContent;
        document.getElementById('content-title').textContent = title;
    }
});

// 可调整宽度的分隔线
const resizeHandle = document.querySelector('.resize-handle');
const leftContent = document.querySelector('.left-content');
const rightContent = document.querySelector('.right-content');

let isResizing = false;

resizeHandle.addEventListener('mousedown', (e) => {
    isResizing = true;
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
});

function resize(e) {
    if (!isResizing) return;

    const containerRect = leftContent.parentElement.getBoundingClientRect();
    const offsetRight = containerRect.right - e.clientX;
    const minWidth = 300;

    if (offsetRight > minWidth) {
        rightContent.style.width = `${offsetRight}px`;
    }
}

function stopResize() {
    isResizing = false;
    document.removeEventListener('mousemove', resize);
}

// 任务列表交互
const taskList = document.querySelector('.task-list-body');

taskList.addEventListener('click', (e) => {
    if (e.target.matches('input[type="checkbox"]')) {
        const taskItem = e.target.closest('.task-item');
        taskItem.classList.toggle('selected', e.target.checked);
    }
});

// 初始化
document.querySelectorAll('.sidebar-menu > li > a').forEach(link => {
    link.addEventListener('click', (e) => e.preventDefault());
});

document.querySelectorAll('.dropdown a').forEach(link => {
    link.addEventListener('click', (e) => e.preventDefault());
});
