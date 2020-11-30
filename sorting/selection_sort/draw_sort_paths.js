var FIX_MARGIN_TOP =35;

var displayArray = function(array, startX, startY,
        canvasX, canvasY, stepHeight) {

    textFont(createFont("monospace"), 12);
    fill(255, 0, 0);

    var cellMargin = 1;
    var cellWidth = canvasX / array.length;

    for (var index = 0; index < array.length; index++) {
        text(array[index], startX + index * cellWidth,
            startY + FIX_MARGIN_TOP + stepHeight);
    }
};

var drawLine = function(array, startX, startY, canvasX,
        canvasY, stepHeight, minIndex, index) {
    var cellWidth = canvasX / array.length;
    var firstY = FIX_MARGIN_TOP + stepHeight * index;

    stepHeight = stepHeight * (index + 1);
    line(startX + minIndex * cellWidth, startY + firstY,
        startX + index * cellWidth, startY + FIX_MARGIN_TOP + stepHeight);
};

// carryover from earlier exercised
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

// carryover from earlier exercised
var indexOfMinimum = function(array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};

// carryover from earlier exercised but with draw functionality added
var selectionSort = function(array, startX, startY,
        displayWidth, displayHeight) {
    var minIndex;
    var cellHeight = displayHeight / array.length;
    var rowGap = 24;

    displayArray(array, startX, startY, displayWidth, displayHeight, 0);

    for(var idx = 0; idx < array.length; idx++) {
        minIndex = indexOfMinimum(array, idx);
        swap(array, idx, minIndex);

        displayArray(array, startX, startY, displayWidth,
            displayHeight, rowGap * (index + 1));
        drawLine(array, startX, startY, displayWidth,
            displayHeight, rowGap, minIndex, index);
    }
};

var array = [5, 7, 99, 1, 9];
array = selectionSort(array, 0, 0, width/2, height/2);


// credit to https://github.com/dev-vishalgaurav/selection-sort-visualization
