jQueryBeacon
============
https://github.com/nothrem/jQueryBeacon

jQuery plugin allows to send reliably data to a server
in cases where delivering the data to the server is more important than getting a response.

When you need to make sure a data reach the server, but you don't care for a response,
 you should use the Beacon instead of an asynchronous AJAX. AJAX may get killed by the browser
 when user navigates away from the page, synchronous request pauses browser rendering 
 and is also deprecated in browsers that support Beacon and Service Workers.
 
This plugin serves as a polyfill that uses either native sendBeacon() method or send
synchronous AJAX request on browsers that does not support the Beacon.

In a browser that support `fetch`, it can be used both to send persistent
request to the server and (optionally, when supported) react to its response. For browser that supports
the `fetch`, the `beacon()` method will return a `Promise`, which will resolve when the beacon ends.

Installation
-----

```> bower install jQueryBeacon```

Or just download or fork the repository at https://github.com/nothrem/jQueryBeacon .

Usage
-----

```
$.beacon(url, data);
```

You can send the Beacon with REST parameters:

```
$.beacon('/api/report/event/click/type/link');
```

...or GET parameters:

```
$.beacon('/api/report?event=click&type=link');
```

...or POST parameters:

```
$.beacon('/api/report', {event: 'click', 'type': link});
```

_Note: the POST data sending has not been tested in the current version yet. 
 It may need additional conversion to support both the Beacon and AJAX.
 Be careful when sending the data using the second parameter._

In a browser with `fetch` support, you can check the returned value to wait for response:

```
let promise = $.beacon(url, data);
if (promise) {
    promise.then(response => ... ); //Process response from fetch
} //else: beacon was used, cannot react to response
```

See the `fetch` documentation how to process fetch the response.

License
-------

See the `LICENSE` file.
