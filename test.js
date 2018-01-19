// script = document.createElement( 'script' );
// script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
// document.body.appendChild(script)

function cheni() {
	var a = $('a[href*="; http"]').each(function() {
	  var url = $(this).attr('href');
	  url = url.replace("api/?q=ce:", "index.php#query=");
	  var links = url.split(";");
	  if (links[1].indexOf("%20") == 0) {
	  	links[1] = links[1].substr(3);
	  }
	  $(this).attr('href', links[1]);
	  $(this).text(links[1]);
	  $(this).after('<br/><b>URL2:</b><a href="' + links[0] + '" target="_blank">' + links[0] + '</a>');
	  console.log(url);
	});
}