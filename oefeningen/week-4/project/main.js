const { generateRandomData } = require("./data");
const { procesData, calculateStatistics } = require("./processing");
const { showDataReport } = require("./reporting");

const data = generateRandomData(100);
const processedData = procesData(data);
showDataReport(processedData);

calculateStatistics(processedData);
showStatistics(processedData);

