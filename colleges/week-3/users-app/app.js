const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchData(url, callback) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            callback(data);
        } else {
            throw new Error('Er ging iets mis met de API.');
        }
    } catch (error) {
        console.error(error.message);
    }
}

function renderList(data) {
    const $list = document.getElementById('users-list');

    $list.innerHTML = '';

    data.forEach(item => {
        renderListItem($list, item);
    });
}

function renderListItem($list, item) {
    const $listItem = document.createElement('div');
    $listItem.innerHTML = `
            <article>
                <em>User ID is: ${item.userId}</em><br>
                <strong>${item.title}</strong>
                <p>
                    ${item.body}
                </p>
            </article>
        `;
    $list.appendChild($listItem);
}

function getParams() {
    const currentUrl = new URL(window.location.href)
    return currentUrl.searchParams;
}

function getParam(name) {
    const params = getParams();
    return params.get(name);
}

function filterData() {
    const $filterForm = document.getElementById('filter');

    $filterForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })
}

function init() {
    let api = API_URL;

    if (getParams().has('user')) {
        api = `${API_URL}?userId=${getParam('user')}`;
    }

    fetchData(api, renderList);
}

init();
