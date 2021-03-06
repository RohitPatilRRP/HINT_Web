if (window.FileReader) {
      function handleFileSelect(evt) {
        var files = evt.target.files;
        var f = files[0];
        var reader = new FileReader();
		
          reader.onload = (function(theFile) {
            return function(e) {
              document.getElementById('list').innerHTML = ['<img src="', e.target.result,'" title="', theFile.name, '" width="100%"/>'].join('');
            };
          })(f);
    
          reader.readAsDataURL(f);
      }
	 } else {
	  alert('This browser does not support FileReader');
	}
    
document.getElementById('files').addEventListener('change', handleFileSelect, false);