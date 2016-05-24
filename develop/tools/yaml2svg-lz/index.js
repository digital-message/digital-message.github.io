d3 = require('d3');
js_yaml = require('js-yaml');
LZString = require('lz-string');

window.onload = function () {
  content = d3.select('#content').style({"margin":"1em","padding":"1em"});

  yaml_div = content.append('div');
  yaml_code = yaml_div.append('textarea')
    .attr('rows',50)
    .attr('spellcheck', false)
    .style('width', '100%')
    .node();

  if(document.location.hash) {
    yaml_code.value = LZString.decompressFromEncodedURIComponent(document.location.hash.replace(/^#/, ''));
  }
  else {
    d3.text('sample.yaml', function (e, d) { yaml_code.value = d });
  }

  button = content.append('button').html('View SVG and code').style({margin: '1em'});
  output = d3.select('#content').append('div');
  button.on('click', function (e) {
    try { 
      data = js_yaml.load(yaml_code.value)
      if(data.hasOwnProperty('title')) { d3.select('title').html(data['title']) };
      output.html('');
      var svg = output.append('svg');
      svg.attr('xmlns', 'http://www.w3.org/2000/svg');
      svg.attr('version', '1.1');
      svg.attr(data.attr);
      for(i in data.element) {
        var e = data.element[i];
        var tag = svg.append(e.tag);
        tag.attr(e.attr);
        if (e.hasOwnProperty('text')){ tag.text(e.text); }
      }
      output.append('div').style('color', 'green').text(svg.node().outerHTML);
      document.location.hash = LZString.compressToEncodedURIComponent(yaml_code.value);
    } catch(error) { 
      yaml_code.value = js_yaml.dump(error);
   }
  });
}
