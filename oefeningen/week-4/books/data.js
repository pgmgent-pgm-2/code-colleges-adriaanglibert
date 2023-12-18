function addItems(items, startIndex = 1, idName = 'id') {
    return items.map((item, index) => {
        return {
            ...item,
            [idName]: startIndex + index
        }
    });
}

module.exports = {
    addItems
}