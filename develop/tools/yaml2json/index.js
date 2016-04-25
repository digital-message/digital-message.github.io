d3 = require('d3');
js_yaml = require('js-yaml');

window.onload = function () {
  content = d3.select('#content').style({"margin":"1em","padding":"1em"});

  yaml_div = content.append('div');
  yaml_code = yaml_div.append('textarea').attr({"rows":20}).style({"width":"100%"}).node();

  json_button = content.append('button').html('yaml to json').style({margin: '1em'});
  yaml_button = content.append('button').html('json to yaml').style({margin: '1em'});

  json_div = content.append('div');
  json_code = json_div.append('textarea').attr({"rows":20}).style({"width":"100%"}).node();

  yaml_button.on('click', function (e) {
    try { 
      data = JSON.parse(json_code.value);
      var output = js_yaml.dump(data);
      console.log(data);
      yaml_code.value = output;
      document.location.hash = btoa(unescape(encodeURIComponent(output)));
    } catch(error) { 
      yaml_code.value = js_yaml.dump(error);
   }
  });

  json_button.on('click', function (e) {
    try { 
      data = js_yaml.load(yaml_code.value);
      console.log(data);
      json_code.value = JSON.stringify(data);
      document.location.hash = btoa(unescape(encodeURIComponent(yaml_code.value)));
      if(data.hasOwnProperty('title')) { d3.select('title').html(data['title']) }
    } catch(error) { 
      json_code.value = JSON.stringify(error);
   }
  });

  if(document.location.hash) {
    yaml_code.value = decodeURIComponent(escape(atob(document.location.hash.replace(/^#/, ''))));
  }
  else {
    yaml_code.value = decodeURIComponent(escape(atob("dGl0bGU6IFlBTUwgPD0+IEpTT04KYXBwbGU6IOiLueaenApiYW5hbmE6IOmmmeiViQpjaGVycnk6IOaoseahgwo=")));
  }
  data = js_yaml.load(yaml_code.value)
  console.log(data);
  json_code.value = JSON.stringify(data);
  if(data.hasOwnProperty('title')) { d3.select('title').html(data['title']) }
}
