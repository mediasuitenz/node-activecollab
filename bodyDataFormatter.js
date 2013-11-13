module.exports = function (endpoint, data) {
    
    //set up object to be returned
    var processedData = {};

    //process the data, wrapping each key in AC friendly format
    //keys need to look like task[name] or project[name]
    for (key in data) {
        var processedKey = endpoint + '[' + key + ']'
        processedData[processedKey] = data[key];
    }

    //add submitted = submitted to the object
    processedData['submitted'] = 'submitted';

    //return the processed object
    return processedData;
}