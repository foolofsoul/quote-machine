var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var cite = document.getElementById("cite");
var tweet = document.getElementById("tweet");

btn.addEventListener("click", newQuote);

function newQuote(e) {
  e.preventDefault();
  var xhttp = new XMLHttpRequest();
  var json;
  var twitLink;
  var twitCite;
  xhttp.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200) {
      json = JSON.parse(xhttp.responseText);
      quote.innerHTML = json.quote;
      cite.innerHTML = "- " + json.author;

      twitLink = encodeURIComponent(json.quote.split(" ").join(" "));
      twitCite = json.author.split(" ").join("");
      tweet.setAttribute("href", "https://twitter.com/intent/tweet?text=" + '"' + twitLink + '"' + "&hashtags=" + twitCite);

    }
  }
  
  json = null;
  
  xhttp.open("POST", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous", true);
  xhttp.setRequestHeader("X-Mashape-Authorization", "2KAIIMb9BbmshsIl8OkwQ3L4L7bep17iTbljsnQ5unBsutZlj5")
  xhttp.send();

}