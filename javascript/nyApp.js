//url backup https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=c56fadf04e2f4cec95905c2d760d3173


var searchTerm="";
var numberRequired =1;
var startYear="19900101";
var endYear="20180101";


var searchUrl// = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +searchTerm +"&api-key=c56fadf04e2f4cec95905c2d760d3173"; //+"&fq="+numberRequired
// console.log(searchUrl);

$(".btn").on("click", function(event){
    event.preventDefault();

    searchTerm = $("#TextInput").val().trim();
    searchUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +searchTerm +"&page="+numberRequired + "&begin_date="+startYear + "&end_date="+endYear + "&api-key=c56fadf04e2f4cec95905c2d760d3173";
    
    console.log(searchUrl);

    $.ajax({
        url:searchUrl,
        method: "GET"
    }).then(function(result){
        console.log(result);
        $("#content").text(result.response.docs[0].web_url); //reponse.docs[0].web_url);

    });

});




// response.docs.