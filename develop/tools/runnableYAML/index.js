d3 = require('d3');
js_yaml = require('js-yaml');

window.onload = function () {
  content = d3.select('#content').style({"margin":"1em","padding":"1em"});

  yaml_div = content.append('div');
  yaml_code = yaml_div.append('textarea').attr({"rows":20}).style({"width":"100%"}).node();

  button = content.append('button').html('Inspect data and run').style({margin: '1em'});
  button.on('click', function (e) {
    try { 
      data = js_yaml.load(yaml_code.value)
      var output = js_yaml.dump(data);
      console.log(data);
      if(data.hasOwnProperty('run')) { eval(data.run); }
      document.location.hash = btoa(unescape(encodeURIComponent(output)));
    } catch(error) { 
      yaml_code.value = js_yaml.dump(error);
   }
  });

  if(document.location.hash) {
    yaml_code.value = decodeURIComponent(escape(atob(document.location.hash.replace(/^#/, ''))));
    data = js_yaml.load(yaml_code.value)
    console.log(data);
    if(data.hasOwnProperty('run')) { eval(data.run); }
  }
  else {
    yaml_code.value = decodeURIComponent(escape(atob("dGl0bGU6IEFCQwphcHBsZTog6Iu55p6cCmJhbmFuYTog6aaZ6JWJCmNoZXJyeTog5qix5qGDCnJ1bjogfAogIGJvZHkgPSBkMy5zZWxlY3QoJ2JvZHknKTsKICBkbCA9IGJvZHkuYXBwZW5kKCdkbCcpOwogIGZvciAoayBpbiBkYXRhKSB7CiAgICBkbC5hcHBlbmQoJ2R0JykuaHRtbChrKTsKICAgIGRsLmFwcGVuZCgnZGQnKS5hcHBlbmQoJ3ByZScpLmh0bWwoZGF0YVtrXSkKICB9Cg==")));
  }
  if(data.hasOwnProperty('title')) { d3.select('title').html(data['title']) }
}
