const daysInSeason = 29
const seasons = ["Spring", "Summer", "Fall", "Winter"]

function CropHistory(playerName, farmName, playerStart, days) {
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
  // console.log(cropMap);
  return cropMap;
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
  this.total = count * price
}

function CropCategory(index, name, color) {
  this.index = index;
  this.name = name;
  this.color = color;
  this.trackedCrops = new Array();
  this.total = 0;
}

function getDaysInYear(cropHistory, year) {
  var data = new Array();
  for (var j = 0; j < seasons.length; j++) {
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

function getShippedTotal(days) {
  return days.map(day => {
    if (day) {
      return day.getTotal()
    }
    return 0
  }).reduce((total, day) => {
    return total + day
  })
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