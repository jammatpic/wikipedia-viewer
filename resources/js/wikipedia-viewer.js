
$(document).ready(function() {
    $("#search-form").submit(function(event) {
        event.preventDefault()
        var input = $(".search-bar").val();
        var html = "";
        var apiCall;
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein&srprop=snippet&srlimit=10",
            dataType: "jsonp",
            success: function(json) {
                for (var key in json.query.search[0]) {
                    html += json.query.search[0][key];
                }
                alert(html);
            }
        });

    });
});