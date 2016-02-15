$(document).ready(function() {
    $("#search-form").submit(function(event) {
        event.preventDefault()
        var input = $(".search-bar").val();
        input = input.replace(/d\\+/g, "+");
        var html = "";
        var apiCall;
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srprop=snippet&srlimit=10&srsearch="+input,
            dataType: "jsonp",
            success: function(json) {
                for (var key in json.query.search) {
                    // building link
                    title = json.query.search[key].title;
                    title = title.replace(/ /g, "_");
                    // displaying title and description for each returned page
                    $("<h4 class='bold title'>"+"<a href='https://en.wikipedia.org/wiki/"+title+"'>"+json.query.search[key].title+"</a></h4>").appendTo(".results");
                    $("<p class='description'>"+json.query.search[key].snippet+"...</p>").appendTo(".results");
                }
            }
        });

    });
});