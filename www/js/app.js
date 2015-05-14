(function (window, document, undefined) {

    var cycle = [{
        "date": "12 KISLEV 5775",
        "description": "0061.json"
    }, {
        "date": "13 KISLEV 5775",
        "description": "0071.json"
    }, {
        "date": "14 KISLEV 5775",
        "description": "0032.json"
    }, {
        "date": "15 KISLEV 5775",
        "description": "0031.json"
    }];

    function lookupRambamText(searchDate) {
        for (var i = 0, cycleLen = cycle.length; i < cycleLen; i++) {
            if (cycle[i]['date'] === searchDate) return i;
        }
    }

    console.log(lookupRambamText('14 KISLEV 5775'));

    var left = document.getElementById('left');
    var right = document.getElementById('right');

    left.addEventListener('click', function () {
        changeContent('left');
    }, false);

    right.addEventListener('click', function () {
        changeContent('right');
    }, false);

    function changeContent(direction) {
        alert('clicked' + ' ' + direction);
    }
})(window, document);