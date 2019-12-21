// import { parseDataFile } from './fileParser.mjs'

function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    console.log(file)
    var reader = new FileReader();
    reader.onload = function (e) {
        var contents = e.target.result;
        const parsed = parseDataFile(contents)
        console.log('read file', parsed);
    };
    reader.readAsText(file);
}

window.onload = function () {
    document.getElementById('open').addEventListener('change', readSingleFile, false);
}

