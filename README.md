jsonp
=====

## Helper to make a jsonp request.

Import json.min.js to your page:
```html
<script type="text/javascript" src="jsonp.min.js"></script>
```

Create a new Jsonp and pass your callback:

```javascript
var url = 'http://api.wipmania.com/jsonp';

new Jsonp(url).callback(
  function(data){
    console.log(data);
  }
);
```


