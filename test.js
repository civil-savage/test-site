
  $(function() {
  $("#tabs").tabs({
beforeLoad: function( event, ui) {
ui.panel.html('<div align="center"><img src="ajax-loader.gif"  alt="loading" width="20%"  style="vertical-align:middle;" \></div>');
},
 
});

});
