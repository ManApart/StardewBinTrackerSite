var categories = getCategories()

function parseDataFile(file) {
  var csvResult = parseCSV(file, ",");
  var playerName = csvResult[0][0];
  var farmName = csvResult[0][1];
  var playerStart = csvResult[0][2];
  var days = parseDaysFrom(csvResult);
  return CropHistory(playerName, farmName, playerStart, days);
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



function createCategories(day, crops) {
  for (var i = 0; i < crops.length; i++) {
    var crop = crops[i];
    var catIndex = crop.category;
    if (!(catIndex in day.categories)) {
      var category = categories[catIndex];
      day.categories[catIndex] = new CropCategory(catIndex, category.name, category.color);
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
