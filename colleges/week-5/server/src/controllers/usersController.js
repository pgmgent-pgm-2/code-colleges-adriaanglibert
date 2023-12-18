function addUser(request, response) {
    users.push(request.query);

    response.json({
        'message': 'Nieuwe user gepost!'
    });

    console.log(users);
}

module.exports = {
    addUser
}