/**
 * @preserve
 * jQueryBeacon
 * https://github.com/nothrem/jQueryBeacon
 * (c) 2018
 */
(function ($) {

	$.beacon = function(url, data) {
		if (!url) {
			throw new Error('An URL is required to send a beacon.');
		}

		//Modern browsers supporting Fetch can use this method as a more advanced Beacon replacement
		if ('fetch' in window) {
			return fetch(url, {
				body: data, //include data of the beacon
				method: 'POST', //Beacon sends data via POST, so we must use same method
				cache: 'no-store', //POST should not be cached, but we can make sure of that
				keepalive: true //tell the fetch to simulate beacon (e.g. do not kill request when page closes or redirects)
			}).then(function(response) {
				return response; //fetch can react to response if page is still alive, so we can use it as well
			});
		}

		//Otherwise use beacon where supported
		if ('navigator' in window && 'sendBeacon' in navigator) {
			try {
				if (navigator.sendBeacon(url, data)) {
					return;
				}
			}
			catch (e) {
				//nothing - will be handler below
			}
		}

		//If the Beacon is not supported or fails, try synchronous ajax.
		try {
			$.ajax({
				async:  false,
				method: 'POST',
				url:    url,
				data:   data
			});
		}
		catch (e) {
			//Just to make sure we try everything, try to send asynchronous request if the synchronous one fails.
			$.ajax(url, {data: data});
		}
	};

}(window.jQuery));
