d3 = require('d3');
js_yaml = require('js-yaml');
LZString = require('lz-string');

window.onload = function () {
  input = d3.select('#input').style({"margin":"1em","padding":"1em"});

  yaml_div = input.append('div');
  yaml_code = yaml_div.append('textarea').attr({"rows":20}).style({"width":"100%"}).node();

  if(document.location.hash) {
    yaml_code.value = LZString.decompressFromEncodedURIComponent(document.location.hash.replace(/^#/, ''));
  }
  else {
    d3.text('sample.yaml', function (e, d) { yaml_code.value = d });
  }

  button = input.append('button').html('Inspect data and run').style({margin: '1em'});
  button.on('click', function (e) {
    try { 
      data = js_yaml.load(yaml_code.value)
      console.log(data);
      if(data.hasOwnProperty('run')) { eval(data.run); }
      document.location.hash = LZString.compressToEncodedURIComponent(yaml_code.value);
    } catch(error) { 
      yaml_code.value = js_yaml.dump(error);
   }
  });
}
