function prime_position(pos) {
    var num = 1;
    for (var i = 0; i < pos; i++) {
        num++;
        var prime = true;
        for (var j = num - 1; j > 1; j--) {
            if (num % j == 0) {
                prime = false;
                console.log(num); //logs the non-prime numbers between 1 and the final result
            }
        }
        if (!prime) {
            i--;
        }
    }
    return num;
}

function sort_subtract(num) {
    var fig = num.toString();
    var toSort = [];
    for (var i = 0; i < fig.length; i++) {
        toSort[i] = parseInt(fig.substring(i, i + 1));
    }

    var yArr = [];
    for (var h = 0; h < toSort.length; h++) {
        var smallest = toSort[h];
        var smIndex = 0;
        for (var g = 0; g < toSort.length; g++) {
            if (smallest > toSort[g]) {
                smallest = toSort[g];
                smIndex = g;
            }
        }
        yArr[h] = smallest;
        toSort[smIndex] = 10;
    }

    var xArr = [];
    var k = 0;
    for (var j = yArr.length - 1; j > -1; j--) {
        xArr[j] = yArr[k];
        k++;
    }

    var xStr = "";
    var yStr = "";
    for (var l = 0; l < yArr.length; l++) {
        xStr += (xArr[l]).toString();
        yStr += (yArr[l]).toString();
    }
    var x = parseInt(xStr);
    var y = parseInt(yStr);
    return x - y;
}