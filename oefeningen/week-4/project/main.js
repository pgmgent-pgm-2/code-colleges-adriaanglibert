const { generateRandomData } = require("./data");
const { procesData } = require("./processing");
const { showDataReport } = require("./reporting");

const data = generateRandomData(100);
const processedData = procesData(data);
showDataReport(processedData);