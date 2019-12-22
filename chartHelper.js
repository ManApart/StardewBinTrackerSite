const chartOptions = {
  onClick: chartClick,
  legend: {
    labels: {
      fontColor: "#00"
    }
  },
  tooltips: {
    mode: 'label'
  },
  scales: {
    xAxes: [{
      stacked: true,
      ticks: {
        fontColor: "#000"
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      stacked: true,
      ticks: {
        fontColor: "#000"
      }
    }],
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

function getDataSets(sumEachSeason, categories, days) {
  var dataSets = new Array();

  for (var i = 0; i < categories.length; i++) {
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