var categories = getCategories()
var cropHistory;
var views = {}
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
  // if (newYear >= 0 && newYear < cropHistory.years.length) {
  //   year = newYear
  // }
  setDate(newYear, season, day)
  // console.log('set year', year, cropHistory.years[year])
  // season = 0
  // day = 0

  const total = getShippedTotal(getDaysInYear(cropHistory, year)).toLocaleString()

  var template = $('#year-view-title-template').html();
  Mustache.parse(template);
  var rendered = Mustache.render(template, {
    name: cropHistory.name,
    year: year,
    total: total
  });
  $('#year-view-title').html(rendered);

  loadYearChart(document.getElementById("year-chart").getContext('2d'), cropHistory, year)

  showDiv(views, "yearView")
}

function setSeasonView(newYear, newSeason) {
  if (!cropHistory.years[newYear]) {
    console.log('No data for year ' + newYear)
    return
  }
  setDate(newYear, newSeason, day)
  // console.log('set season', cropHistory.years[year][season])

  const total = getShippedTotal(getDaysInSeason(cropHistory, year, season)).toLocaleString()

  var template = $('#season-view-title-template').html();
  Mustache.parse(template);
  var rendered = Mustache.render(template, {
    name: cropHistory.name,
    year: year,
    season: seasons[season],
    total: total
  });
  $('#season-view-title').html(rendered);

  loadSeasonChart(document.getElementById("season-chart").getContext('2d'), cropHistory, year, season)

  showDiv(views, "seasonView")
}

function setDayView(newYear, newSeason, newDay) {
  if (!cropHistory.years[newYear] || !cropHistory.years[newYear][newSeason]) {
    console.log('No data for year ' + newYear + ' season ' + newSeason)
    return
  }
  setDate(newYear, newSeason, newDay)
  const dayData = cropHistory.years[year][season][day]

  // console.log('set day', year, season, day, dayData)

  if (!dayData) {
    console.log('no day data')
    $('#day-table').html("No data for " + day + " of " + seasons[season] + " in year " + year);
  } else {
    var template = $('#day-table-template').html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, {
      name: cropHistory.name,
      season: seasons[season],
      dayData: dayData,
      total: dayData.getTotal().toLocaleString()
    });
    $('#day-table').html(rendered);

  }
  showDiv(views, "dayView")
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

function setDate(newYear, newSeason, newDay) {
  if (newDay <= 0) {
    newDay = daysInSeason - 1
    newSeason = newSeason - 1
  }

  if (newSeason < 0) {
    newSeason = seasons.length - 1
    newYear = newYear - 1
  }

  if (newYear <= 0) {
    newYear = 1
    newSeason = 0
    newDay = 1
  }

  if (newDay >= daysInSeason) {
    newDay = 1
    newSeason = newSeason + 1
  }

  if (newSeason >= seasons.length) {
    newSeason = 0
    newYear = newYear + 1
  }

  if (newYear >= cropHistory.years.length) {
    newYear = cropHistory.years.length - 1
    newSeason = seasons.length - 1
    newDay = daysInSeason - 1
  }
  console.log('old dates', year, season, day)
  year = newYear
  season = newSeason
  day = newDay
  console.log('new dates', year, season, day)
}

window.onload = function () {
  document.getElementById('shipping-bin').addEventListener('change', readFileFromEvent, false)

  views = {
    "instructions": document.getElementById('instructions'),
    "yearView": document.getElementById('year-view'),
    "seasonView": document.getElementById('season-view'),
    "dayView": document.getElementById('day-view')
  }
  showDiv(views, "instructions")

  const urlParams = new URLSearchParams(window.location.search);
  const useExampleData = urlParams.get('sample');

  if (useExampleData) {

    cropHistory = parseDataFile(sampleData)
    this.console.log('Showing example', this.cropHistory)
    setYearView(1)
    // setSeasonView(1, 0)
    // setDayView(0, 0, 0)
  }

}




