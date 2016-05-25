d3 = require('d3');
js_yaml = require('js-yaml');
LZString = require('lz-string');

window.onload = function () {
  input = d3.select('#content')
    .append('div')
    .attr('id', 'input')
    .style('margin', '1em')
    .style('padding', '1em');

  yaml_div = input.append('div');
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

  button = input.append('button').html('View SVG and code').style({margin: '1em'});
  output = d3.select('#content')
    .append('div')
    .attr('id', 'output')
    .style('margin', '1em')
    .style('padding', '1em');
  button.on('click', function (e) {
    try { 
      data = js_yaml.load(yaml_code.value)
      if(data.hasOwnProperty('title')) { d3.select('title').html(data['title']) };
      output.html('');
      var svg = output.append('svg')
        .style('border', '1px solid #CCC');
      svg.attr('xmlns', 'http://www.w3.org/2000/svg');
      svg.attr('version', '1.1');
      svg.attr(data.attr);
      for(i in data.element) {
        var e = data.element[i];
        var tag = svg.append(e.tag);
        tag.attr(e.attr);
        if (e.hasOwnProperty('text')){ tag.text(e.text); }
      }
      if(data.hasOwnProperty('js')) { eval(data.js); }
      output.append('div')
        .style('margin', '1em')
        .style('color', 'green')
        .text(svg.node().outerHTML);
      document.location.hash = LZString.compressToEncodedURIComponent(yaml_code.value);
    } catch(error) { 
      yaml_code.value = js_yaml.dump(error);
   }
  });
}
