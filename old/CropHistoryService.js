var cropHistorySrvc;
(function () {
  var app = angular.module('cropHistoryService', []);

  app.factory('cropHistoryService', function ($http) {
    cropHistorySrvc = this;
    console.log("init data");
    //[year][season][day] returns the day and its crops
    parseDataLink("resources/TrackStats.csv", $http);

    this.categories = getCategories();

    return {
      parseDataLink: function (dataLink) {
        parseDataLink(dataLink, $http);
      },
      parseDataFile: function (dataFile) {
        parseDataFile(dataFile);
      }
    }

  });

  function parseDataLink(filePath, $http) {
    $http.get(filePath).success(function (data) {
      parseDataFile(data);
    });
  }
  function parseDataFile(file) {
    var csvResult = parseCSV(file, ",");
    var playerName = csvResult[0][0];
    var farmName = csvResult[0][1];
    var playerStart = csvResult[0][2];
    var days = parseDaysFrom(csvResult);
    cropHistorySrvc.cropHistory = createCropHistory(playerName, farmName, playerStart, days);
    if (chartCtrl != null) {
      if (chartCtrl.getTimePeriodZoom() != 2) {
        chartCtrl.zoomTimePeriod(false);
      } else {
        chartCtrl.createGraph();
      }
    }
  }

  function parseCSV(csv, delimiter) {
    //		console.log(csv.toString());
    var csvData = $.csv.toArrays(csv.toString(), { separator: delimiter });
    return csvData;
  }

  function parseDaysFrom(csv) {
    var days = new Array();
    for (var i = 1; i < csv.length; i++) {
      var day = parseDay(csv[i]);
      if (day != null) {
        days.push(day);
      }
    }
    //		console.log(days);
    return days;
  }

  function parseDay(lineText) {
    var days = new Array();
    for (var i = 0; i < csv.length; i++) {
      days.push(parseDay(csv[i]));
    }
    return days;
  }

  function parseDay(columns) {
    var cropCount = getCropCountFromTextArray(columns);
    if (cropCount == -1) {
      console.log("Invalid number of columns, skipping " + columns);
      return null;
    }

    var day = new TrackedDay(columns[0], columns[1], columns[2]);

    var crops = new Array();
    for (var i = 0; i < cropCount; i++) {
      var x = i * 5 + 3;
      crops.push(new TrackedCrop(columns[x], columns[x + 1], columns[x + 2], columns[x + 3], columns[x + 4], day))
    }

    createCategories(day, crops);

    return day;
  }

  function TrackedDay(year, season, day) {
    this.year = year;
    this.season = season;
    this.day = day;
    this.categories = new Array();
    this.getTotal = function () {
      var total = 0;
      for (var i = 0; i < this.categories.length; i++) {
        if (this.categories[i] != null) {
          total += this.categories[i].total;
        }
      }
      return total;
    }
  }
  function TrackedCrop(name, count, price, category, parentSheetIndex, trackedDay) {
    this.name = name;
    this.count = +count;
    this.price = +price;
    this.category = +category;
    this.parentSheetIndex = +parentSheetIndex;
    this.trackedDay = trackedDay;
  }
  function CropCategory(index, name, color) {
    this.index = index;
    this.name = name;
    this.color = color;
    this.trackedCrops = new Array();
    this.total = 0;
  }


  function createCategories(day, crops) {

    for (var i = 0; i < crops.length; i++) {
      var crop = crops[i];
      var catIndex = crop.category;
      if (!(catIndex in day.categories)) {
        var catFromController = cropHistorySrvc.categories[catIndex];
        day.categories[catIndex] = new CropCategory(catIndex, catFromController.name, catFromController.color);
      }
      day.categories[catIndex].trackedCrops.push(crop);
    }

    for (var i = 0; i < day.categories.length; i++) {
      var category = day.categories[i];
      if (category != null) {
        var total = 0;
        for (var j = 0; j < category.trackedCrops.length; j++) {
          var crop = category.trackedCrops[j];
          total += (crop.count * crop.price);
        }
        category.total = total;
      }
    }

  }

  function getCropCountFromTextArray(columns) {
    if (columns == null || columns.length <= 3) {
      return -1;
    }
    var length = columns.length;
    length -= 3;
    //each crop is 5 columns
    if (length % 5 != 0) {
      return -1;
    }
    return length / 5;
  }

  function createCropHistory(playerName, farmName, playerStart, days) {
    var cropMap = {
      name: playerName,
      farm: farmName,
      key: (playerName + farmName + playerStart),
      years: new Array()
    };

    for (var i = 0; i < days.length; i++) {
      var day = days[i];
      if (!(day.year in cropMap.years)) {
        cropMap.years[day.year] = new Array();
      }
      if (!(day.season in cropMap.years[day.year])) {
        cropMap.years[day.year][day.season] = new Array();
      }
      if (!(day.day in cropMap.years[day.year][day.season])) {
        cropMap.years[day.year][day.season][day.day] = day;
      }
    }
    console.log(cropMap);
    return cropMap;
  }



  function getCategories() {
    var categories = new Array();
    categories.push({
      name: "Other",
      color: "#000000"
    });
    categories.push({
      name: "Furniture",
      color: "#6419be"
    });
    categories.push({
      name: "Artifact",
      color: "#ff005a"
    });
    categories.push({
      name: "Forage",
      color: "#0a8232"
    });
    categories.push({
      name: "Flower",
      color: "#db36d3"
    });
    categories.push({
      name: "Fruit",
      color: "#ff93d3"
    });
    categories.push({
      name: "Vegetable",
      color: "#008000"
    });
    categories.push({
      name: "Seed",
      color: "#a52a2a"
    });
    categories.push({
      name: "Monster Loot",
      color: "#320a46"
    });
    categories.push({
      name: "Artisan Goods",
      color: "#009b6f"
    });
    categories.push({
      name: "Cooking",
      color: "#dda0dd"
    });
    categories.push({
      name: "Decor",
      color: "#008b8b"
    });
    categories.push({
      name: "Fishing Tackle",
      color: "#8b0000"
    });
    categories.push({
      name: "Bait",
      color: "#a9a9a9"
    });
    categories.push({
      name: "Trash",
      color: "#708090"
    });
    categories.push({
      name: "Fertilizer",
      color: "#ff0064"
    });
    categories.push({
      name: "Animal Product",
      color: "#406672"
    });
    categories.push({
      name: "Resource",
      color: "#6e005a"
    });
    categories.push({
      name: "Mineral",
      color: "#94a128"
    });
    categories.push({
      name: "Crafting",
      color: "#dc3c00"
    });
    categories.push({
      name: "Fish",
      color: "#00008b"
    });
    return categories;
  }

})();