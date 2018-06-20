
function initNews() {
    var newAPI = "../api/new";
    $.getJSON(newAPI, {
        format: "json"
    })
        .done(function (data) {

            console.log(data);

                $("#img1").attr("src", data.articles["0"].urlToImage);
                $("#title1").text(data.articles["0"].title);
                $("#desc1").text(data.articles["0"].description);
                $("#lnk1").attr("href", data.articles["0"].url);                

                $("#img2").attr("src", data.articles["1"].urlToImage);
                $("#title2").text(data.articles["1"].title);
                $("#desc2").text(data.articles["1"].description);
                $("#lnk2").attr("href", data.articles["1"].url);

                $("#img3").attr("src", data.articles["3"].urlToImage);
                $("#title3").text(data.articles["3"].title);
                $("#desc3").text(data.articles["3"].description);
                $("#lnk3").attr("href", data.articles["3"].url);
        });
}

initNews();