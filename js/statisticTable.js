function buildStatisticTable(number, limit) {
    var data = loadData(number, limit)

    if (data === null) {
        $("body").html("<div class='alert alert-danger'>" +
            "<p>Sorry random service is unavalliable or due to the rules of <a href='https://www.random.org'>https://www.random.org</a> " +
            "you have used your quota for now. </p> <p>Details  <a href='https://www.random.org/quota'>https://www.random.org/quota</a></p></div>")
    }

    var counter = countMatches(data);
    var statistic = getMatchesStatistic(counter, number)

    //header
    $("#statistic-table").append($('<tr/>')
        .append($('<th/>').text("Item"))
        .append($('<th/>').text("Quantity"))
        .append($('<th/>').text("Percent")));

    //body
    var keys = Object.keys(statistic).sort(function (arg1, arg2) { return arg1.length - arg2.length });
    var length = keys.length;
    for (var i = 0; i < length; i++) {
        var key = keys[i];
        var $row = $('<tr/>');
        $row.append($('<td/>').text(key));
        $row.append($('<td/>').text(counter[key]))
        $row.append($('<td/>').text(statistic[key]));
        $("#statistic-table").append($row);
    }
}