function setSpecialState(item) {
    if (item.isSpecial) {
        if (item.value > 30 && item.value <= 70) {
            item.specialResult = 'Intermediate Special';
        } else {
            item.specialResult = 'Extreme Special';
        }
    } else {
        item.specialResult = 'Not Special';
    }
}

function setComplexity(item) {
    if (item.details.importance > 3) {
        if (item.details.complexity > 5) {
            item.advancedResult = 'High Importance, High Complexity';
        } else {
            item.advancedResult = 'High Importance, Low Complexity';
        }
    } else {
        item.advancedResult = 'Low Importance';
    }
}

function procesItem(item) {
    setSpecialState(item);
    setComplexity(item);
}

function procesData(data) {
    data.forEach(item => procesItem(item));
    return data;
}

function calculateStatistic(item) {
    if (item.details.importance > 3) {
        highImportanceCount++;
    } else {
        lowImportanceCount++;
    }
}

function calculateStatistics(data) {
    let highImportanceCount = 0;
    let lowImportanceCount = 0;

    data.forEach(item => {
        calculateStatistic(item);
    });
}

module.exports = {
    procesData,
    calculateStatistics
}