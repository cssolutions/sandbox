function pieChart() {
	this.options = {
	credits: {
		enabled: false
	},
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: false,
		plotShadow: false,
		shadow: false,
	},
	title: {
		text: ""
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,	 
			cursor: 'pointer',	 
			dataLabels: {
				enabled: true	 
      }	
		}
	},
	legend: {
	},
	series: [{
			type: 'pie',
			name: "",
			data: []
			}]
	};

	this.getOptions = function() {
		return this.options;
	}
}

function barChart() {
	this.options = {
	credits: {
		enabled: false
	},
	chart: {
		type: 'column',
		plotBackgroundColor: null,
		plotBorderWidth: false,
		plotShadow: false,
	},
	title: {
		text: ""
	},
	tooltip: {

	},
	plotOptions: {

	},
	series: [ {} ]
	};

	this.getOptions = function() {
		return this.options;
	}
}

function areaChart() {
	this.options = {
	credits: {
		enabled: false
	},
	chart: {
		zoomType: 'x',
		spacingRight: 20
	},
	legend: {
		enabled: false
	},
	title: {
		text: ""
	},
	tooltip: {
	},
	plotOptions: {
		area: {
			fillColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
				stops: [
					[0, Highcharts.getOptions().colors[0]],
					[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
			},
			lineWidth: 1,
			marker: {
				enabled: false
				},
			shadow: false,
			states: {
				hover: {
					lineWidth: 1
				}
				},
			threshold: null
		}
	},
	series: [ {
			type: 'area'
			}],
	
	xAxis: {
		type: 'datetime',
		maxZoom: 1 * 3600000, // 1 hours
		title: {
			text: null
			}
		}
	};

	this.getOptions = function() {
		return this.options;
	}
}

function lineChart() {
	this.options = {
	credits: {
		enabled: false
	},
	chart: {
		zoomType: 'x',
		spacingRight: 20
	},
	legend: {
		enabled: false
	},
	title: {
		text: ""
	},
	plotOptions: {
		line: {
			lineWidth: 1,
			marker: {
				enabled: true
				},
			states: {
				hover: {
					lineWidth: 1
				}
				}
		}
	},
	series: [ {
			}],
								
	xAxis: {
		type: 'datetime',
		maxZoom: 1 * 3600000, // 1 hours
		title: {
			text: null
			}
		}
	};

	this.getOptions = function() {
		return this.options;
	}
}

