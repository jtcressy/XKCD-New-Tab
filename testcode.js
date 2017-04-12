$.ajax({
    url: "http://dynamic.xkcd.com/api-0/jsonp/comic?callback=?",
    dataType: "json",
    jsonpCallback: "xkcddata",
    success: function (response) {
        var num = Math.floor((Math.random() * response.num) + 1);
        rendercomic(num);
    }
})
function rendercomic(num) {
    $.ajax({
        url: "http://dynamic.xkcd.com/api-0/jsonp/comic/" + num + "?callback=?",
        dataType: "json",
        jsonpCallback: "xkcddata",
        success: function (data) {
            $("#xkcdcontent").append(
                $("<h1 style=text-align:center;/>").text(data.title),
                $("<img align=middle/>").attr({
                    src: data.img,
                    title: data.alt,
                    alt: data.title
                }),
                $("<h3 style=text-align:center;/>").text(data.alt),
                $("<p style=text-align:center;/>").text("link to comic: https://www.xkcd.com/" + data.num + "/")
            );
        }
    });
}

setTimeout(function() {
  location.reload();
}, 120000);