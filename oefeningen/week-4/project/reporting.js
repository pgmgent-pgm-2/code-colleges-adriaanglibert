function showItemDetails(item) {
    console.log(`ID: ${item.id}, Value: ${item.value}, Category: ${item.category}, Special Result: ${item.specialResult}, Advanced Result: ${item.advancedResult}`);
}

function showDataReport(data) {
    console.log("Even More Extended Data Processing Report:");

    console.log("===========================================");

    data.forEach(item => {
        showItemDetails(item);
    });
}

module.exports = {
    showDataReport
}