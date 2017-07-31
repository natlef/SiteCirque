$ ( ".bouton_rouge" ).click(function() {
	var valbtrouge = $( ".bouton_rouge").text();
	if (valbtrouge == 'Show the article' )
	{
  		$ ( ".bouton_rouge" ).text('Hidden the article');
  		$ ( ".lecture" ).css('visibility','visible') ;
  		$ ( ".lecture" ).css('height','auto');
  	}
  	else
  	{
  		$ ( ".bouton_rouge" ).text('Show the article');
  		$ ( ".lecture" ).css('visibility','Hidden');
  		$ ( ".lecture" ).css('height',0);
  	}
});

