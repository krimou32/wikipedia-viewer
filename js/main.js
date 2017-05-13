$(document).ready(function(){

  //Action search when "Submit" is clicked
  $("#searchBtn").on('click', function(){

    //Get the search terms from user input
    const searchValue = $("#searchValue").val()
    const searchResult = $("#search-result")

    //Call Wikipedia API to action the search process
    $.ajax({
      type: 'GET',
      url: 'https://en.wikipedia.org/w/api.php',
      data: {
        action: 'opensearch',
        search: searchValue
      },
      success: function(data) {
        //console.log(data)
        for(let i = 0; i < data[1].length; i++) {
          searchResult.prepend('<div class="well"><div><a href="' + data[3][i] + '" target="_blank">' + '<h1>' + data[1][i]+ '</h1></a></div><div>' + data[2] + '</div></div>')
        }
      },
      error: function(err) {
        alert("Error: " + err)
      }
    })
  })
})
