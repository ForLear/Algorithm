<template>
    <div id="map"></div>
</template>

<script>
import * as util from '@/utils/utils'
import { getMaps } from '../../api/map'
// import { ERR_OK } from '../../api/config'

/* eslint-disable */
export default {
	name: 'googleMaps',
	data () {
		return {
		}
	},
	mounted () {
		// (function _getMaps () {
		// 	getMaps().then(res => {
		// 		console.log(res)
		// 	})
		// })()
		function initMap () {
			let map
			map = new google.maps.Map(document.getElementById('map'), {
				zoom: 2,
				center: new google.maps.LatLng(2.8, -187.3),
				mapTypeId: 'terrain'
			});
			console.log(map)
			// Create a <script> tag and set the USGS URL as the source.
			var script = document.createElement('script');
			// This example uses a local copy of the GeoJSON stored at
			// http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
			script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
			document.getElementsByTagName('head')[0].appendChild(script);
		}

		// Loop through the results array and place a marker for each
		// set of coordinates.
		window.eqfeed_callback = function (results) {
			for (var i = 0; i < results.features.length; i++) {
				var coords = results.features[i].geometry.coordinates;
				var latLng = new google.maps.LatLng(coords[1], coords[0]);
				var marker = new google.maps.Marker({
					position: latLng,
					map: map
				});
			}
		}
		// (function start () {
		// 	let mapApi = document.createElement('script')
		// 	mapApi.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDISIySawILeW2QUGjU4BfN9t3GLzhsL9s&callback=initMap'
		// 	mapApi.async = "async"
		// 	mapApi.defer = "defer"
		// 	document.getElementsByTagName('body')[0].appendChild(mapApi)
		// 	console.log(document.getElementsByTagName('body'))
		// })()
	},
	methods: {
		// _getMaps () {
		// 	getMaps().then(res => {
		// 		console.log(res)
		// 	})
		// }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 500px;
  height: 500px;
}
</style>