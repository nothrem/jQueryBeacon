jQueryBeacon
============
https://github.com/nothrem/jQueryBeacon

jQuery plugin that allow to send reliably data to a server without expected response.

When you need to make sure a data reach the server but you don't care for a response,
 you should use the Beacon instead of an asynchronous AJAX. AJAX may get killed by the browser
 when user navigates away from the page, synchronous request pauses browser rendering 
 and is also deprecated in browsers that support Beacon and Service Workers.
 
This plugin serves as a polyfill that uses either native sendBeacon() method or send
synchronous AJAX request on browsers that does not support the Beacon.

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




License
-------

See the `LICENSE` file.
