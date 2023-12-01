const wasAGoodBoy = false;
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Dit is data van de cloud');
    }, 3000);
});

// console.log('Dit is de start van mijn code');
// myPromise
//     .then((data) => {
//         console.log('Vanaf nu gaan we deze data tonen', data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// console.log('Hier komt de rest van de code, ik wil dit niet blokkeren.');

function getUserDetails(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: userId, name: 'Bart' }
            resolve(user);
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

getUserDetails(123).then((userDetails => {
    console.log('Dit is de user', userDetails);
    getUserPosts(userDetails).then((allData) => {
        console.log(allData)
    })
}));

getUserDetails(123)
    .then((userDetails) => getUserPosts(userDetails))
    .then(allData => {
        console.log(allData)
    })
    .finally(() => {
        console.log('Finally!')
    });