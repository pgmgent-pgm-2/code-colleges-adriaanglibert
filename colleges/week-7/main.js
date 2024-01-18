const $form = document.getElementById('form');
const $button = $form.querySelector('button');

function getDataFromForm($form) {
    const formData = new FormData($form);

    const data = {};
    formData.forEach((value, key) => {
        return data[key] = value;
    });

    return JSON.stringify(data);
}

$button.addEventListener('click', e => {
    e.preventDefault();
    const recipe = getDataFromForm($form);
    console.log(recipe);
})


const user = {
    name: 'Jan',
    lastName: 'Modaal',
    age: 10,
}

const updateInfo = {
    age: 100,
    name: 'Frank'
}

const updatedUserManual = {
    name: 'Jan',
    lastName: 'Modaal',
    age: 10,
    age: 100,
    name: 'Frank'
}

const updatedUser = {
    ...user,
    ...updateInfo
}