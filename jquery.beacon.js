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
