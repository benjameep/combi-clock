var dotWidth = 100
var dotSize = dotWidth + "px"
//var colors = ["004358","1F8A70","BEDB39","FCDF1A","FD7517"].reverse()
var colors = ["DF5A49","E27A3F","EFC94C","45B29D","334D5C"]
var CORDS = [[],[],[]]
var tempCords = [[],[],[]]

function init() {
	getCoor()
	CORDS.forEach( (group,i) => {
		group.forEach( (cord,k) => {
			createDot(colors[k],i+"-"+k)
		})
	})
	window.setInterval( () => {
		makeArrangments()
		setCord()
	},500)
}

function createDot(color, id) {
	return $("<div></div>")
		.attr('id', id)
		.css({
			backgroundColor: color,
			width: dotSize,
			height: dotSize,
			borderRadius: dotSize,
			position:"fixed",
		}).appendTo("main")
}

function getCoor() {
	var width = dotWidth*1.4
	var height = Math.sqrt(3) / 2 * width;
	var centerX = (window.innerWidth - 4*width)/2
	var centerY = (window.innerHeight - 5*height)/2

	for (var i = 0; i < 5; i++) {

		var offset = Math.abs(i - 2);
		var group = (i - 2) ? (i - 2)/Math.abs(i - 2) + 1 : 1

		for (var k = 0; k < 4 - offset; k++) {
			CORDS[group].push({x:centerX + (offset * width) / 2 + (k * width),y:centerY + i*height})
		}
	}
}

function getTime() {
	var now = new Date()
	return {
		hours:(now.getHours()%12)*2 + Math.floor(now.getMinutes()/30),
		minutes:now.getMinutes()*2 + Math.floor(now.getSeconds()/30),
		seconds:now.getSeconds()*2 + Math.floor(now.getMilliseconds()/500),
	}
}

function setCord(){
	tempCords.forEach( (group,i) => {
		group.forEach( (cord,k) => {
			$("#"+i+"-"+k).animate({
				left: cord.x,
				top: cord.y
			},400)
		})
	})
}

function makeArrangments(){
	var time = getTime()
	tempCords[0] = scramble(CORDS[0],time.minutes)
	tempCords[1] = scramble(CORDS[1],time.hours)
	tempCords[2] = scramble(CORDS[2],time.seconds)
}

