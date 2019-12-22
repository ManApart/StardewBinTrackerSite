const numOfCategories = 21
const seasonsInYear = 4
const daysInSeason = 29
const seasons = ["Spring", "Summer", "Fall", "Winter"]
const chartOptions = {
  onClick: chartClick,
  scales: {
    xAxes: [{ stacked: true }],
    yAxes: [{ stacked: true }]
  }
}

var yearChart;
var seasonChart;

function loadYearChart(element, cropHistory, year) {
  const daysInYear = getDaysInYear(cropHistory, year)
  const datasets = getDataSets(true, categories, daysInYear)

  if (yearChart) {
    yearChart.destroy()
  }

  yearChart = new Chart(element, {
    type: 'bar',
    data: {
      labels: seasons,
      datasets: datasets
    },
    options: chartOptions
  });
}

function loadSeasonChart(element, cropHistory, year, season) {
  const daysOfSeason = getDaysInSeason(cropHistory, year, season)
  const datasets = getDataSets(false, categories, daysOfSeason)
  var labels = new Array();
  for (var i = 1; i < daysInSeason; i++) {
    labels.push("Day " + i);
  }

  if (seasonChart) {
    seasonChart.destroy()
  }

  seasonChart = new Chart(element, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: chartOptions
  });
}

function chartClick(event) {
  const bar = this.getElementAtEvent(event)[0];
  if (bar) {
    const label = bar._model.label
    const datasetLabel = bar._model.datasetLabel
    console.log('chart click', label, datasetLabel)

    if (seasons.includes(label)) {
      setSeasonView(year, seasons.indexOf(label))
    } else if (label.startsWith("Day ")) {
      setDayView(year, season, label.split(" ")[1])
    }
  }
}

function getDaysInYear(cropHistory, year) {
  var data = new Array();
  for (var j = 0; j < seasonsInYear; j++) {
    for (var i = 1; i < daysInSeason; i++) {
      if (year in cropHistory.years && j in cropHistory.years[year] && i in cropHistory.years[year][j]) {
        var day = cropHistory.years[year][j][i];
        data.push(day);
      } else {
        data.push(null);
      }
    }
  }
  return data
}

function getDaysInSeason(cropHistory, year, season) {
  var data = new Array();
  for (var i = 1; i < daysInSeason; i++) {
    if (year in cropHistory.years && season in cropHistory.years[year] && i in cropHistory.years[year][season]) {
      var day = cropHistory.years[year][season][i];
      data.push(day);
    } else {
      data.push(null);
    }
  }
  return data
}

function getDataSets(sumEachSeason, categories, days) {
  var dataSets = new Array();

  for (var i = 0; i < numOfCategories; i++) {
    if (categories && categories[i]) {
      var priceData = getShippedTotalForCategory(sumEachSeason, days, i);
      if (!priceData.every((price) => price == 0)) {
        dataSets.push({
          label: categories[i].name,
          data: priceData,
          backgroundColor: categories[i].color,
        });
      }
    }
  }

  return dataSets;
}

function getShippedTotalForCategory(sumEachSeason, days, category) {
  var shipTotals = new Array();
  for (var i = 0; i < days.length; i++) {
    if (!days || !days[i] || !days[i].categories || !days[i].categories[category]) {
      shipTotals.push(0);
      continue;
    }
    shipTotals.push(days[i].categories[category].total);
  }
  //if whole year, sum into seasons
  if (sumEachSeason) {
    return sumForSeasons(shipTotals);
  }

  return shipTotals;
}

function sumForSeasons(shipTotals) {
  var monthTotals = new Array();
  //spring
  var monthTotal = 0;
  for (var i = 1; i < 28; i++) {
    monthTotal += shipTotals[i];
  }
  monthTotals.push(monthTotal);
  //summer
  monthTotal = 0;
  for (var i = 29; i < 56; i++) {
    monthTotal += shipTotals[i];
  }
  monthTotals.push(monthTotal);
  //fall
  monthTotal = 0;
  for (var i = 56; i < 84; i++) {
    monthTotal += shipTotals[i];
  }
  monthTotals.push(monthTotal);
  //winter
  monthTotal = 0;
  for (var i = 84; i < 112; i++) {
    monthTotal += shipTotals[i];
  }
  monthTotals.push(monthTotal);
  return monthTotals;
}