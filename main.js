let Myname = document.querySelector('header');

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/tamrat33");
req.send();

function reqListener () {
  console.log(this.responseText);


  // Parse our response text
  let data = JSON.parse(this.responseText);
  let list = '';

  // Select the parent element from the page
  let list = document.getElementById( 'list' );

  console.log( list );

  // Create a new elements
  let li1 = document.createElement( "li" );
  let li2 = document.createElement( "li" );
  let li3 = document.createElement( "li" );

  // Create the text for each element
  let li1Content = document.createTextNode(  );
  let li2Content = document.createTextNode( "" );
  let li3Content = document.createTextNode( "" );

  // Attach the li nodes to the list node
  list.appendChild( li1 );
  list.appendChild( li2 );
  list.appendChild( li3 );

  // Attach the text nodes to the li nodes
  li1.appendChild( li1Content );
  li2.appendChild( li2Content );
  li3.appendChild( li3Content );
