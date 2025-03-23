const headerInclude = async (tag,id) => {
  if ( $(tag + id).length == 1 ) {
    fetch(`/include/${tag}.html`)
    .then(response => {
      if ( !response.ok ) {
        throw new Error(`ResponseStatus: ${response.status}`);
      }
      return response.text()
    }).then(data => {
      $(tag + id).html(data);
    })
    .catch(error => { console.debug(error) });
  }
}
headerInclude("header","#header");
headerInclude("footer","#footer");

