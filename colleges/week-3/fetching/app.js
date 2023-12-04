const countriesPromise = fetch('https://restcountries.com/v3.1/all');

async function getCountries() {
    try {
        const response = await countriesPromise;
        if (response.status === 200) {
            console.log(response);
            const dataToText = await response.json();
            console.table(dataToText);
        } else {
            console.error('Er ging iets mis: ', response.status);
        }
    } catch (error) {
        console.error(error.message);
    }
}

// getCountries();

async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();
    console.log(post);
}

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const posts = await response.json();
    console.log(posts);
}

const postData = {
    title: 'Graduaat Programmeren',
    body: 'Dit is een test',
    userId: 1,
    id: 101
}

async function postPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'content-type': 'application/json'
        }
    });

    const json = await response.json();
    console.log(json);
}

async function replacePost(id, data) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    });

    const json = await response.json();
    console.log(json);
}
async function editPost(id, data) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    });

    const json = await response.json();
    console.log(json);
}

async function deletePost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    });

    const json = await response.json();
    console.log('Succesvol deleted!', json);
}

getPosts();
postPost();
getPost(3);

const newPostData = {
    "userId": 1,
    "id": 3,
    "title": "Dit is een nieuwe titel",
    "body": "Dit is nieuwe tekst."
}

const editedPostData = {
    "title": "Dit is nog een andere nieuwe titel",
}

replacePost(3, newPostData);
getPost(3);

editPost(3, editedPostData);
getPost(3);

deletePost(3);
getPosts();