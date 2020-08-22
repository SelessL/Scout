var APIkey = "9a690d0104msh334156481842de6p13b3a3jsn98714ffd81ea"
var queryURL = "https://coinpaprika1.p.rapidapi.com/exchanges=" + APIkey;

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coinpaprika1.p.rapidapi.com/exchanges",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
		"x-rapidapi-key": "9a690d0104msh334156481842de6p13b3a3jsn98714ffd81ea"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});