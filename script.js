// We should wait for the page to load before running our Ajax request
$(document).ready(function(){
  // Now we start the Ajax GET request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get("sentence.html", function(response) {
    // Here we are getting the element on the page with the id of sentences and
    // inserting the response
    $("#sentences").html(response);
    //^^This will not be called if the sentence.html file request doesn't exist
    //therefore we go into the fail function below:
  }).fail(function(error) {
    // This is called when an error occurs and inserting the error
    $("#sentences").html('Something went wrong: ' + error);
  });
});
