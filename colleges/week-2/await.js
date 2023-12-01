const couldGetData = true;

async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (couldGetData) {
                const data = { userId: 1, name: 'Jan' }
                resolve(data);
            } else {
                const error = { message: 'Niet gelukt', code: 405 }
                reject(error);
            }
        }, 2000);
    })
}

// fetchData()
//     .then(result => {
//         console.log(result.name);
//     })
//     .catch(error => {
//         console.error(error.message);
//     });

async function showData() {
    const downloadedData = await fetchData();
    console.log(downloadedData);
}

showData();
console.log('Dit is de rest van mijn code');

function getUserDetails(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: userId, name: 'Bart' }
            // resolve(user);
            reject({ status: 500, message: 'Kon niet verbinden met de server' });
        }, 2000)
    });
}

function getUserPosts(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2'];
            resolve([user, posts]);
        }, 2000)
    })
}

async function getUser(id, callback) {
    try {
        const userDetails = await getUserDetails(id);
        const userPosts = await getUserPosts(userDetails);
        callback(userDetails, userPosts);
    } catch (error) {
        console.error('Er ging iets mis', error.message);
    } finally {
        console.log('Dit gebeurt altijd, of het nu misgaat of niet.')
    }
}

function showUser(user, posts) {
    console.log(`Mijn user is ${user.name} en zijn posts zijn: ${posts.join(', ')}`)
}

getUser(120, showUser);