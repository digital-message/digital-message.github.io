d3 = require('d3');
js_yaml = require('js-yaml');

window.onload = function () {
  content = d3.select('#content').style({"margin":"1em","padding":"1em"});

  yaml_div = content.append('div');
  yaml_code = yaml_div.append('textarea').attr({"rows":50}).style({"width":"100%"}).node();
  d3.text('sample.yaml', function (e, d) { yaml_code.value = d });

  button = content.append('button').html('View SVG and code').style({margin: '1em'});
  output = d3.select('#content').append('div');
  button.on('click', function (e) {
    try { 
      data = js_yaml.load(yaml_code.value)
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
    } catch(error) { 
      yaml_code.value = js_yaml.dump(error);
   }
  });
}
