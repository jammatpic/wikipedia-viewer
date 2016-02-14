$(document).ready(function() {
    $("#search-form").submit(function(event) {
        event.preventDefault()
        var input = $(".search-bar").val();
        var apiCall;
        /*$.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein&srprop=snippet&srlimit=10", function(json) {
            alert(json.search[0].title);
        });*/
    });
});