d3 = require('d3');
js_yaml = require('js-yaml');

window.onload = function () {
  content = d3.select('#content').style({"margin":"1em","padding":"1em"});

  yaml_div = content.append('div');
  yaml_code = yaml_div.append('textarea').attr({"rows":40}).style({"width":"100%"}).node();
  yaml_code.value = `
attr:
  xmlns : 'http://www.w3.org/2000/svg'
  version : 1.1
  width : 250
  height : 250
element:
  -
    tag : rect
    attr : 
      x : 25
      y : 25
      width : 200
      height : 200
      fill : lime
      stroke-width : 4
      stroke : pink
  - 
    tag : circle
    attr :
      cx : 125
      cy : 125
      r :  75
      fill : orange
  -
    tag : polyline 
    attr: 
      points : '50,150 50,200 200,200 200,100'
      stroke : red
      stroke-width : 4
      fill : none
  -    
    tag : line
    attr:  
      x1 : 50
      y1 : 50
      x2 : 200
      y2 : 200
      stroke : blue
      stroke-width : 4
`;

  button = content.append('button').html('View SVG and code').style({margin: '1em'});
  output = d3.select('#content').append('div');
  button.on('click', function (e) {
    try { 
      data = js_yaml.load(yaml_code.value)
      output.html('');
      var svg = output.append('svg');
      svg.attr(data.attr);
      for(i in data.element) {
        var e = data.element[i];
        var tag = svg.append(e.tag);
        tag.attr(e.attr);
      }
      output.append('div').style('color', 'green').text(svg.node().outerHTML);
    } catch(error) { 
      yaml_code.value = js_yaml.dump(error);
   }
  });
}
