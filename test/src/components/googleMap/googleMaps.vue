<template>
  <div class="test_map">
    <div id="map"
         ref="mymap"></div>
    <div class="kingwell_test">
      <div>
        <span>经度：</span>
        <span class="latitude">{{latitude}}</span>
      </div>
      <div>
        <span>纬度：</span>
        <span class="longitude">{{longitude}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// 通过API加载谷歌地图
(function start () {
	let mapApi = document.createElement('script')
	mapApi.src = 'https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyDISIySawILeW2QUGjU4BfN9t3GLzhsL9s&callback=initMap'
	mapApi.async = "async"
	mapApi.defer = "defer"
	document.getElementsByTagName('body')[0].appendChild(mapApi)
})()
/* eslint-disable */
export default {
	name: 'googleMaps',
	data () {
		return {
			latitude: '',
			longitude: '',
			company: [],
			positions: [
				{
					lat: 40.756,
					lon: -73.986,
					info: '深圳'
				},
				{
					lat: 37.775,
					lon: -122.419,
					info: '广州'
				},
				{
					lat: 47.620,
					lon: -122.347,
					info: '香港'
				}
			]
		}
	},
	mounted () {
		// 保留this指向
		const that = this
		const initMap = function(){

			// HTML5 获取当前位置
			navigator.geolocation.getCurrentPosition(function (position) {
				//获取当前位置的经纬度
				let coords = position.coords;
				that.latitude = coords.latitude;
				that.longitude = coords.longitude;
				let Me = {lat: that.latitude, lng: that.longitude};
				// var markerMe = new google.maps.Marker({
				// 	position: coords,
				// 	map: map
				// });
				
				that.nowCenter = new google.maps.LatLng(that.latitude, that.longitude);
				console.log('that.nowCenter ', that.nowCenter)
				console.log('that.nowCenter ======', that.nowCenter)
				//设定地图属性
				let myOptions = {
					zoom: 10,
					center: that.nowCenter,
				}
				console.log('myOptions=============', myOptions.center)
				//创建地图对象
				console.log(that.$refs)
				var map = new google.maps.Map(that.$refs.mymap, myOptions);
				that.map = map
				//创建一个标记对象
				var marker = new google.maps.Marker({
					position: that.nowCenter,
					map: map,
					animation: google.maps.Animation.BOUNCE,
					title: '123'
				});
				//设置一个信息窗口
				let infowindow = new google.maps.InfoWindow({
					content: '当前所在位置' + that.nowCenter
				});
				infowindow.open(map, marker);
				console.log(that.results)
				
				that.addMarker(that.positions)
				return
				
				// infowindow.open(map, markerCompany);
				// that.company.push(new google.maps.LatLng(22.58, 113.96));
				// that.company.push(new google.maps.LatLng(22.594, 113.98));
				// that.company.push(new google.maps.LatLng(22.265, 113.43));
				// that.company.push(new google.maps.LatLng(22.295, 113.32));
				// that.company.push(new google.maps.LatLng(22.215, 113.23));
				console.log('mk1',that.company)

				for (let index = 0; index < that.company.length; index++) {
					var item = that.company[index];
					console.log('item=======', item)
					console.log('需要的map==========', that.map)
					//创建一个标记对象
					var marker = new google.maps.Marker({
						position: item,
						map: map,
						mapTypeId: google.maps.MapTypeId.TERRAIN
					});
				}
			});
		}

		// initMap挂载至window
		window.initMap = initMap
	},
	methods: {
		// 封装地图打点
		addMarker(positions) {
			const map = this.map
			positions.forEach(item => {
				const {lat, lon, info: title} = item
				const marker = new google.maps.Marker({
					position: {
						lat,
						lng: lon
					},
					map,
					title
				})
			})

			var flightPlanCoordinates = [
				{lat: 37.772, lng: -122.214},
				{lat: 21.291, lng: -157.821},
				{lat: -18.142, lng: 178.431},
				{lat: -27.467, lng: 153.027}
			];
			var flightPath = new google.maps.Polyline({
				path: flightPlanCoordinates,
				geodesic: true,
				strokeColor: '#FF0000',
				strokeOpacity: 1.0,
				strokeWeight: 2
			});

			flightPath.setMap(map);

			var goldStar = {
				path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
				fillColor: 'yellow',
				fillOpacity: 0.8,
				scale: 1,
				strokeColor: 'gold',
				strokeWeight: 14
			};

			var marker = new google.maps.Marker({
				position: map.getCenter(),
				icon: goldStar,
				map: map
			});
		},
		Result(position){
			for (var i = 0; i < position.length; i++) {
				var coords1 = position[i]
				that.company.push(new google.maps.LatLng(coords1.a,coords1.b));
				var markerCompany = new google.maps.Marker({
					position: that.coords,
					map: map,
					title: 'ddsvds',
				});
				infowindow.open(map, markerCompany);
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  height: 500px;
}
</style>