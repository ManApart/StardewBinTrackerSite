var cropHistory;
var views = {}
var buttons = {}
var year = 0
var season = 0
var day = 0


function readFileFromEvent(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function (loadEvent) {
    var contents = loadEvent.target.result
    cropHistory = parseDataFile(contents)
    console.log('read file', cropHistory)
    setDayView(0, 0, 0)
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

  loadYearChart(document.getElementById("year-chart").getContext('2d'), cropHistory, year)

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

  loadSeasonChart(document.getElementById("season-chart").getContext('2d'), cropHistory, year, season)

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
  const dayData = cropHistory.years[year][season][day]

  console.log('set day', year, season, day, dayData)

  if (!dayData) {
    console.log('no day data')
    $('#day-table').html("No Data for this day");
  } else {
    var template = $('#day-table-template').html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, dayData);
    $('#day-table').html(rendered);

  }
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
  document.getElementById('shipping-bin').addEventListener('change', readFileFromEvent, false)

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

  const urlParams = new URLSearchParams(window.location.search);
  const useExampleData = urlParams.get('sample');

  if (useExampleData) {
    this.console.log('Showing example')

    cropHistory = parseDataFile(sampleData)
    setYearView(1)
    // setSeasonView(1, 0)
    // setDayView(0, 0, 0)
  }

}




