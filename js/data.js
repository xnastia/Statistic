function loadBatch(number) {
    batch = null
    response = $.ajax({
        type: "GET",
        url: "https://www.random.org/integers/?num=" + number + "&min=0&max=1&col=1&base=10&format=plain",
        cache: false,
        async: false
    })

    if (response.status == 200) {
        batch = response.responseText.split("\n").filter(function (a) { return a != "" }).map(function (a) { return parseInt(a); })
    }

    return batch;
}

function loadData(number, limit) {
    iters = Math.ceil(number / limit)
    data = []

    for (var i = 0; i < iters; i++) {
        batch = loadBatch(Math.min(limit, number - data.length))

        if (batch != null) {
            data = data.concat(batch)
        }
        else {
            return null;
        }
    }

    return data;
}
