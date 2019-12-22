var chartCtrl;
(function () {
  'use strict'
  var app = angular.module('chartController', ['chart.js']);

  app.directive("graphDir", function () {
    return {
      restrict: "E",
      templateUrl: "Graph.html"
    };
  });

  app.controller('chartController', function ($scope, cropHistoryService) {
    chartCtrl = this;
    //		console.log("init chart");

    this.year = 1;
    this.season = 0;
    this.day = 1;
    $scope.currentTrackedDay = null;

    this.createGraph = function () {
      createGraph();
    };

    this.getTimePeriodZoom = function () {
      return $scope.timePeriodZoom;
    }


    this.updateAsync = function () {
      $scope.$applyAsync();
    }
    //0 day, 1 season, 2 year
    $scope.timePeriodZoom = 2;
    $scope.chartTitle = "Products that Iceburg Shipped in Year 1";

    $scope.zoomTimePeriod = function (zoomIn) {
      if (!zoomIn && $scope.timePeriodZoom < 2) {
        $scope.timePeriodZoom++;
      }
      if (zoomIn && $scope.timePeriodZoom > 0) {
        $scope.timePeriodZoom--;
      }
      var zoomLevel = "day";
      if ($scope.timePeriodZoom == 1) {
        zoomLevel = "season";
      } else if ($scope.timePeriodZoom == 2) {
        zoomLevel = "year";
      }
      console.log("now viewing " + zoomLevel + " " + $scope.timePeriodZoom);
      $scope.setCurrentTrackedDay();
      createGraph();
    }
    this.zoomTimePeriod = function (zoomIn) {
      $scope.zoomTimePeriod(zoomIn);
    }


    $scope.nextPeriod = function () {
      if (chartCtrl.getTimePeriodZoom() == 0) {
        chartCtrl.day++;
        if (chartCtrl.day > 28) {
          chartCtrl.day = 1;
          chartCtrl.season++;
          if (chartCtrl.season > 3) {
            chartCtrl.season = 0;
            chartCtrl.year++;
          }
        }
      } else if (chartCtrl.getTimePeriodZoom() == 1) {
        chartCtrl.season++;
        chartCtrl.day = 1;
        if (chartCtrl.season > 3) {
          chartCtrl.season = 0;
          chartCtrl.year++;
        }
      } else {
        chartCtrl.year++;
        chartCtrl.season = 0;
        chartCtrl.day = 1;
      }
      console.log("now year " + chartCtrl.year + " season " + chartCtrl.season + " day " + chartCtrl.day);
      if (chartCtrl.getTimePeriodZoom() == 0) {
        $scope.setCurrentTrackedDay();
        updateGraphTitle();
      } else {
        createGraph();
      }
    }
    $scope.previousPeriod = function () {
      if (chartCtrl.getTimePeriodZoom() == 0) {
        if (chartCtrl.day > 1) {
          chartCtrl.day--;
        } else if (chartCtrl.day == 1 && chartCtrl.year > 1) {
          chartCtrl.day = 28;
          chartCtrl.season--;
          if (chartCtrl.season < 0) {
            chartCtrl.season = 3;
            chartCtrl.year--;
          }
        }
      } else if (chartCtrl.getTimePeriodZoom() == 1) {
        chartCtrl.day = 28;
        if (chartCtrl.season > 0) {
          chartCtrl.season--;
        } else if (chartCtrl.season == 0 && chartCtrl.year > 1) {
          chartCtrl.season = 3;
          chartCtrl.year--;
        }
      } else {
        if (chartCtrl.year > 1) {
          chartCtrl.year--;
          chartCtrl.season = 3;
          chartCtrl.day = 28;
        }
      }
      console.log("now year " + chartCtrl.year + " season " + chartCtrl.season + " day " + chartCtrl.day);
      if (chartCtrl.getTimePeriodZoom() == 0) {
        $scope.setCurrentTrackedDay();
        updateGraphTitle();
      } else {
        createGraph();
      }
    }
    $scope.setCurrentTrackedDay = function () {
      if (cropHistorySrvc == null || cropHistorySrvc.cropHistory == null) {
        $scope.currentTrackedDay = null;
        return null;
      }
      var history = cropHistorySrvc.cropHistory;
      setToNearestTrackedDay();
      if (chartCtrl.year in history.years && chartCtrl.season in history.years[chartCtrl.year] && chartCtrl.day in history.years[chartCtrl.year][chartCtrl.season]) {
        $scope.currentTrackedDay = history.years[chartCtrl.year][chartCtrl.season][chartCtrl.day];
        return $scope.currentTrackedDay;
      }
      $scope.currentTrackedDay = null;
      return null;
    }
    $scope.addCommas = function (number) {
      return addCommas(number);
    }


    if (cropHistorySrvc.cropHistory) {
      createGraph();
    }
  });





  function createGraph() {

    updateGraphTitle();


    var sourceData = getTimePeriodData(chartCtrl);
    var data = {
      labels: getLabels(chartCtrl.getTimePeriodZoom()),
      datasets: getDataSets(chartCtrl.getTimePeriodZoom(), cropHistorySrvc.categories, sourceData)
    };

    var ctx = document.getElementById("cropGraph").getContext("2d");
    $("cropGraph").css({
      "width": 800,
      "height": 400
    });
    if (chartCtrl.cropChart != null) {
      chartCtrl.cropChart.destroy();
    }
    chartCtrl.cropChart = new Chart(ctx).StackedBar(data, getGraphOptions());

    $("#cropGraph").click(
      function (evt) {
        var activePoints = chartCtrl.cropChart.getBarsAtEvent(evt);
        if (activePoints == null || activePoints.length == 0) {
          return;
        }
        console.log(activePoints);
        var label = activePoints[0].label;
        updateTimePeriod(label);
        chartCtrl.zoomTimePeriod(true);
      }
    );
  }

  function updateGraphTitle() {
    var scope = angular.element($("#graphDiv")).scope();
    var title = cropHistorySrvc.cropHistory.name + "'s Profit on " + cropHistorySrvc.cropHistory.farm + " Farm ";
    if (chartCtrl.getTimePeriodZoom() == 0) {
      title += "on Day " + chartCtrl.day + " of "
        + getLabels(false)[chartCtrl.season] + " of ";
    } else if (chartCtrl.getTimePeriodZoom() == 1) {
      title += "in " + getLabels(false)[chartCtrl.season] + " of ";
    } else {
      title += " in";
    }
    title += " Year " + chartCtrl.year;
    scope.chartTitle = title;

    chartCtrl.updateAsync();
  }


  function getTimePeriodData(chartCtrl) {
    var data = new Array();
    var history = cropHistorySrvc.cropHistory;
    if (chartCtrl.getTimePeriodZoom() == 1) {
      for (var i = 1; i < 29; i++) {
        if (chartCtrl.year in history.years && chartCtrl.season in history.years[chartCtrl.year] && i in history.years[chartCtrl.year][chartCtrl.season]) {
          var day = history.years[chartCtrl.year][chartCtrl.season][i];
          data.push(day);
        } else {
          data.push(null);
        }
      }
    } else if (chartCtrl.getTimePeriodZoom() == 2) {
      for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 29; i++) {
          if (chartCtrl.year in history.years && j in history.years[chartCtrl.year] && i in history.years[chartCtrl.year][j]) {
            var day = history.years[chartCtrl.year][j][i];
            data.push(day);
          } else {
            data.push(null);
          }
        }
      }
    }
    return data;
  }

  function getGraphOptions() {
    return {
      responsive: true,
      scaleShowVerticalLines: false,
      scaleLabel: "<%= addCommas(value) %>g",
      multiTooltipTemplate: function (d) {
        return d.datasetLabel + ': ' + addCommas(d.value) + 'g';
      },
      scaleGridLineColor: 'black'
    };
  }

  function updateTimePeriod(segmentLabel) {
    var labels = getLabels(chartCtrl.getTimePeriodZoom());
    var newPeriod = null;
    for (var i = 0; i < labels.length; i++) {
      if (labels[i] == segmentLabel) {
        newPeriod = i + 1;
        break;
      }
    }
    if (newPeriod != null) {
      if (chartCtrl.getTimePeriodZoom() == 1) {
        chartCtrl.day = newPeriod;
      } else if (chartCtrl.getTimePeriodZoom() == 2) {
        chartCtrl.season = newPeriod;
      }
    }

  }


  function getLabels(timePeriodZoom) {
    if (timePeriodZoom == 1) {
      var labels = new Array();
      for (var i = 1; i < 29; i++) {
        labels.push(i);
      }
      return labels;
    } else {
      return ["Spring ", "Summer ", "Fall ", "Winter "];
    }
  }
  function getDataSets(timePeriodZoom, categories, sourceData) {
    var dataSets = new Array();
    for (var i = 0; i < 21; i++) {
      var priceData = getShippedTotalForCategory(timePeriodZoom, sourceData, i);
      dataSets.push({
        label: categories[i].name,
        fillColor: categories[i].color,
        strokeColor: "#000",
        highlightFill: categories[i].color,
        highlightStroke: "#fff",
        data: priceData
      });
    }

    return dataSets;
  }

  function getShippedTotalForCategory(timePeriodZoom, days, category) {
    var shipTotals = new Array();
    for (var i = 0; i < days.length; i++) {
      if (days[i] == null || days[i].categories[category] == null) {
        shipTotals.push(0);
        continue;
      }
      shipTotals.push(days[i].categories[category].total);
    }
    //if whole year, sum into seasons
    if (timePeriodZoom == 2) {
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

  function setToNearestTrackedDay() {
    var history = cropHistorySrvc.cropHistory;
    if (!(chartCtrl.year in history.years)) {
      var closest = getClosestIndexInArray(history.years, chartCtrl.year);
      if (closest < chartCtrl.year) {
        chartCtrl.season = 3;
        chartCtrl.day = 28;
      }
      chartCtrl.year = closest;
    }
    if (!(chartCtrl.season in history.years[chartCtrl.year])) {
      var closest = getClosestIndexInArray(history.years[chartCtrl.year], chartCtrl.season);
      if (closest < chartCtrl.season) {
        chartCtrl.day = 28;
      }
      chartCtrl.season = closest;
    }
    if (!(chartCtrl.day in history.years[chartCtrl.year][chartCtrl.season])) {
      chartCtrl.day = getClosestIndexInArray(history.years[chartCtrl.year][chartCtrl.season], chartCtrl.day);
    }
    console.log("Updateing date to nearest: year " + chartCtrl.year + ", season " + chartCtrl.season + ", day " + chartCtrl.day);

  }
  function getClosestIndexInArray(array, desiredIndex) {
    var closest = null;
    var distance = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] != null) {
        if (closest == null) {
          closest = i;
          distance = Math.abs(i - desiredIndex);
        }
        var testDist = Math.abs(i - desiredIndex);
        if (testDist < distance) {
          closest = i;
          distance = testDist;
        }
      }
    }
    return closest;
  }



})();

function addCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}


