var cropHistory;
var views = {}
var buttons = {}
var year = 0
var season = 0
var day = 0


function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        var contents = e.target.result
        cropHistory = parseDataFile(contents)
        console.log('read file', cropHistory)
        // localStorage.setItem("CropHistory", JSON.stringify(parsed))
        // window.location.href = "./year.html"
        setYearView(0)
    };
    reader.readAsText(file);
}

function setYearView(newYear) {
    if (newYear >= 0 && newYear < cropHistory.years.length) {
        year = newYear
    }
    console.log('set year', year, cropHistory.years[year])
    season = 0
    day = 0
    showDiv(views, "yearView")
    hideDiv(buttons, "viewYearButton")
}

function setSeasonView(year, newSeason) {
    if (!cropHistory.years[year]) {
        console.log('No data for year ' + year)
        return
    }
    if (newSeason >= 0 && newSeason < cropHistory.years[year].length) {
        season = newSeason
        day = 0
    }
    console.log('set season', year, season, cropHistory.years[year][season])
    showDiv(views, "seasonView")
    hideDiv(buttons, "viewSeasonButton")
}

function setDayView(year, season, newDay) {
    if (!cropHistory.years[year] || !cropHistory.years[year][season]) {
        console.log('No data for year ' + year + ' season ' + season)
        return
    }
    if (newDay >= 0 && newDay < cropHistory.years[year][season].length) {
        day = newDay
    }
    console.log('set day', year, season, day, cropHistory.years[year][season][day])
    showDiv(views, "dayView")
    hideDiv(buttons, "viewDayButton")
}

function showDiv(divs, keyToShow) {
    Object.keys(divs).forEach((key, index) => {
        if (key == keyToShow) {
            divs[key].style.display = "block"
        } else {
            divs[key].style.display = "none"
        }
    })
}

function hideDiv(divs, keyToHide) {
    Object.keys(buttons).forEach((key, index) => {
        if (key == keyToHide) {
            divs[key].style.display = "none"
        } else {
            divs[key].style.display = "block"
        }
    })
}


window.onload = function () {
    document.getElementById('shipping-bin').addEventListener('change', readSingleFile, false)

    views = {
        "instructions": document.getElementById('instructions'),
        "yearView": document.getElementById('year-view'),
        "seasonView": document.getElementById('season-view'),
        "dayView": document.getElementById('day-view')
    }
    buttons = {
        "shippingBin": document.getElementById('shipping-bin-wrapper'),
        "viewYearButton": document.getElementById('view-year-button'),
        "viewSeasonButton": document.getElementById('view-season-button'),
        "viewDayButton": document.getElementById('view-day-button')
    }
    showDiv(views, "instructions")
    showDiv(buttons, "shippingBin")


}

