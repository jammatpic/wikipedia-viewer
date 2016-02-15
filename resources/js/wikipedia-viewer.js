$(document).ready(function() {
    $("#search-form").submit(function(event) {
        event.preventDefault()
        // all in function after in order to sequence fade animations
        $('.results').fadeOut(300, function() { 
            $(this).empty();
            var input = $(".search-bar").val();
            input = input.replace(/d\\+/g, "+");
            var html = "";
            var apiCall;
            if (input == "") {
                $("<h4 class='bold title text-center'>No results found</h4>").appendTo(".results");
                $('.results').fadeIn(300);
            } else {
                $.ajax({
                //adding input to api call
                    url: "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srprop=snippet&srlimit=10&srsearch="+input,
                    dataType: "jsonp",
                    success: function(json) {
                        if (json.query.searchinfo.totalhits === 0) {
                            $("<h4 class='bold title text-center'>No results found</h4>").appendTo(".results");
                            $('.results').fadeIn(300);
                        } else {
                            for (var key in json.query.search) {
                                // building link
                                title = json.query.search[key].title;
                                title = title.replace(/ /g, "_");
                                // displaying title and description for each returned page
                                $("<h4 class='bold title'>"+"<a href='https://en.wikipedia.org/wiki/"+title+"'>"+json.query.search[key].title+"</a></h4>").appendTo(".results");
                                $("<p class='description'>"+json.query.search[key].snippet+"...</p>").appendTo(".results");
                            }
                            $('.results').fadeIn(300);
                        }
                    }
                });
            }
        });
    });
});