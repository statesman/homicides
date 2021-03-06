// JavaScript Document

	//GENDER CHART
$(function () {
        $('#genderContainer').highcharts({
            chart: {
                type: 'bar'
            },
			colors: [
			   '#1aadce',
			   '#0d233a'
			],
			credits: {
            enabled: false
        },
            title: {
                text: 'Total homicides, by gender'
            },
			//subtitle: {
             // text: 'There were 28 homicide victims in 2013.'
            //},
            xAxis: {
                categories: ['2013', '2014']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of victims'
                },
				stackLabels: {
                   enabled: true,
                   style: {
                      fontWeight: 'bold',
                      color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                  }
                }
            },
			legend: {reversed: true },
            plotOptions: {
                series: {
                    stacking: 'normal',
					dataLabels: {
                       //enabled: true,
                      //  color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
                series: [{
					//2013, 2014
                name: 'Male',
                data: [22, 25]
            }, {
                name: 'Female',
                data: [6, 11]
            }]
        });
    });

	//RACE ETHNICITY CHART
	$(function () {
        $('#raceContainer').highcharts({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Victims by race/ethnicity'
            },
			colors: [
			   '#1aadce',
			   '#8bbc21',
			   '#492970',
			   '#f28f43',//orange
			   '#a6c96a',
			   '#c42525',
			   '#910000',
			   '#2f7ed8',
			   '#0d233a',//black
			   '#77a1e5',//lt blue

			],
           // subtitle: {
            //    text: 'Source: Austin Police Dept.'
           // },
            xAxis: {
                categories: ['2013', '2014'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of victims',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ''
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                //2013, 2014
                name: 'Hispanic',
                data: [11, 11]
            }, {
                name: 'White',
                data: [9, 15]
            }, {
                name: 'Black',
                data: [8, 8]
            }, {
                name: 'Asian',
                data: [0, 2]
            }]
        });
    });


		//METHOD CHART
	$(function () {
        $('#methodContainer').highcharts({
            chart: {
                type: 'column'
            },
			colors: [
			   '#1aadce',
			   '#0d233a',
			   '#8bbc21',
			   '#910000',
			   '#2f7ed8',
			   '#492970',
			   '#f28f43',
			   '#77a1e5',
			   '#c42525',
			   '#a6c96a'
			],
            title: {
                text: 'Homicide methods'
            },
            subtitle: {
                text: '*Other indicates more than one method'
            },
            xAxis: {
                categories: ['Blunt force trauma', 'Hit and run', '*Other', 'Shooting', 'Stabbing', 'Suffocation', 'Unknown'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
				 tickInterval: 3,
                title: {
                    text: 'Homicides',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' deaths'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        formatter: function() {
                            if (this.y != 0) {
                              return this.y;
                            } else {
                              return null;
                            }
                        }
                    }
                }
            },
            credits: {
                enabled: false
            },
			//bluntforce, hit-run, other, shooting, stabbing, suffocation, unknown
            series: [{
                name: '2013',
                data: [/*blunt*/4, /*hit-run*/1, /*other*/1, /*shooting*/15, /*stabbing*/6, /*suffocation*/1, /*unknown*/0]
            },{
                name: '2014',
                data: [/*blunt*/2, /*hit-run*/4, /*other*/0, /*shooting*/14, /*stabbing*/3, /*suffocation*/1, /*unknown*/11]
            }]
        });
    });


// 2013 age chart
$(function () {
        $('#ageContainer2013').highcharts({
            chart: {
                type: 'column'
            },
			colors: [
			   '#1aadce',
			   '#0d233a'
			],
            title: {
                text: 'Age of homicide victims'
            },
            xAxis: {
                categories: ['0-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70+']
            },
            yAxis: {
                min: 0,
				tickInterval: 2,
                title: {
                    text: 'Number of homicides'
                },
               // stackLabels: {
               //     enabled: true,
                //    style: {
                 //       fontWeight: 'bold',
                 //       color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                //    }
               // }
            },
			credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        formatter: function() {
                            if (this.y != 0) {
                              return this.y;
                            } else {
                              return null;
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Male',
                data: [/*U20*/1, /*20s*/6, /*30s*/5, /*40s*/6, /*50s*/2, /*60s*/1, /*70s*/1]
            }, {
                name: 'Female',
                data: [/*U20*/1, /*20s*/1, /*30s*/1, /*40s*/2, /*50s*/1, /*60s*/0, /*70s*/0]
            }]
        });
    });

	// 2014 age chart
$(function () {
        $('#ageContainer2014').highcharts({
            chart: {
                type: 'column'
            },
			colors: [
			   '#1aadce',
			   '#0d233a'
			],
            title: {
                text: 'Age of homicide victims'
            },
            xAxis: {
                categories: ['0-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70+']
            },
            yAxis: {
                min: 0,
				tickInterval: 2,
                title: {
                    text: 'Number of homicides'
                },
               // stackLabels: {
               //     enabled: true,
                //    style: {
                 //       fontWeight: 'bold',
                 //       color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                //    }
               // }
            },
			credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        formatter: function() {
                            if (this.y != 0) {
                              return this.y;
                            } else {
                              return null;
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Male',
                data: [/*U20*/5, /*20s*/7, /*30s*/8, /*40s*/2, /*50s*/2, /*60s*/0, /*70s*/1]
            }, {
                name: 'Female',
                data: [/*U20*/0, /*20s*/4, /*30s*/0, /*40s*/3, /*50s*/2, /*60s*/1, /*70s*/1]
            }]
        });
    });


// month chart
$(function () {
        $('#monthContainer').highcharts({
            chart: {
                type: 'column'
            },
			colors: [
			   '#1aadce',
			   '#0d233a',
			   '#8bbc21',
			   '#910000',
			   '#2f7ed8',
			   '#492970',
			   '#f28f43',
			   '#77a1e5',
			   '#c42525',
			   '#a6c96a'
			],
            title: {
                text: 'Homicide incidents by month'
            },
            xAxis: {
                categories: ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of homicides'
                },
               // stackLabels: {
               //     enabled: true,
                //    style: {
                 //       fontWeight: 'bold',
                 //       color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                //    }
               // }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y;
                }
            },
            plotOptions: {
                column: {
                   // stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: '2013',
                data: [0, 3, 2, 4, 0, 2, 5, 0, 4, 2, 2, 4]
            },{
                name: '2014',
                data: [3, 3, 5, 1, 0, 2, 3, 1, 3, 4, 6, 5]
            }]
        });
    });

// day chart
$(function () {
        $('#dayContainer').highcharts({
            chart: {
                type: 'column'
            },
			colors: [
			   '#1aadce',
			   '#0d233a',
			   '#8bbc21',
			   '#910000',
			   '#2f7ed8',
			   '#492970',
			   '#f28f43',
			   '#77a1e5',
			   '#c42525',
			   '#a6c96a'
			],
            title: {
                text: 'Homicides by weekday'
            },
            xAxis: {
                categories: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of homicides'
                },
               // stackLabels: {
               //     enabled: true,
                //    style: {
                 //       fontWeight: 'bold',
                 //       color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                //    }
               // }
            },
			credits: {
                enabled: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y;
                }
            },
            plotOptions: {
                column: {
                    //stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: [{
                name: '2013',
                data: [3, 1, 5, 5, 3, 7, 4]
            },{
                name: '2014',
                data: [4, 8, 4, 2, 8, 2, 8]
            }]
        });
    });


		//RELATIONSHIP CHART
	$(function () {
        $('#relationshipContainer').highcharts({
            chart: {
                type: 'column'
            },
			colors: [
			   '#1aadce',
			   '#0d233a',
			   '#8bbc21',
			   '#910000',
			   '#2f7ed8',
			   '#492970',
			   '#f28f43',
			   '#77a1e5',
			   '#c42525',
			   '#a6c96a'
			],
            title: {
                text: 'Suspect relationship to victim'
            },
            //subtitle: {
              //  text: '*Although police shootings in the line of duty resulted in three homicide cases, the officers involved are not considered suspects in this database unless they are indicted on criminal charges. None of the officers have been indicted.'
            //},
            xAxis: {
                categories: ['Acquaintance', 'Boyfriend', 'Brother', 'Daughter', 'Father', 'Friend', 'Girlfriend', 'Husband', 'Mother', 'Other family', 'Police*', 'Sister', 'Son', 'Stranger', 'Unknown', 'Wife'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of homicides',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },

            tooltip: {
                valueSuffix: ' deaths'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '2013',
                data: [/*Acquaintance*/5, /*Boyfriend*/0, /*Brother*/0, /*Daughter*/0, /*Father*/0, /*Friend*/0, /*Girlfriend*/1, /*Husband*/2, /*Mother*/0, /*Other family*/1, /*Police*/1, /*Sister*/0, /*Son*/2, /*Stranger*/5, /*Unknown*/0, /*Wife*/0]
            },{
                name: '2014',
                data: [/*Acquaintance*/5, /*Boyfriend*/2, /*Brother*/0, /*Daughter*/0, /*Father*/0, /*Friend*/2, /*Girlfriend*/0, /*Husband*/0, /*Mother*/1, /*Other family*/4, /*Police*/0, /*Sister*/0, /*Son*/0, /*Stranger*/4, /*Unknown*/2, /*Wife*/0]
            }]
        });
    });






//murder container
$(function () {
        $('#murderGenderContainer').highcharts({
            chart: {
                type: 'column'
            },
			credits: {
            enabled: false
        },
            title: {
                text: 'Total homicides, by gender'
            },
			//subtitle: {
              //  text: 'Source: Austin Police Dept.'
           // },
            xAxis: {
                categories: ['2008', '2009', '2010', '2011', '2012']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of victims'
                },
				stackLabels: {
                  enabled: true,
                   style: {
                       fontWeight: 'bold',
                       color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                   }
                }
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
					dataLabels: {
                       //enabled: true,
                      //  color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
                series: [{
					//2008, 2009, 2010, 2011, 2012
                name: 'Male',
                data: [19, 17, 29, 14, 26]
            }, {
                name: 'Female',
                data: [4, 5, 9, 13, 8]
            },]
        });
    });


	//RACE ETHNICITY CHART
	$(function () {
        $('#murderRaceContainer').highcharts({
            chart: {
                type: 'column'
            },
			colors: [
   '#2f7ed8',
   '#0d233a',
   '#8bbc21',
   '#910000',
   '#1aadce',
   '#492970',
   '#f28f43',
   '#77a1e5',
   '#c42525',
   '#a6c96a'
],
            title: {
                text: 'Victims by race/ethnicity'
            },
            subtitle: {
               text: '*Other includes Asian and Indian'
            },
            xAxis: {
                categories: ['2008', '2009', '2010', '2011', '2012'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of victims',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
			        legend: {
            verticalAlign: 'top',
            x: 0,
            y: 40
        },
            tooltip: {
                valueSuffix: ''
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
				//2008, 2009, 2010, 2011, 2012
                name: 'Hispanic',
                data: [18, 10, 13, 9, 12]
            }, {
                name: 'White',
                data: [2, 7, 12, 10, 12]
            }, {
                name: 'Black',
                data: [3, 5, 12, 4, 9]
			}, {
                name: 'Other*',
                data: [0, 0, 1, 4, 1]
            }]
        });
    });


	// month chart
	$(function () {
        $('#murderMonthContainer').highcharts({
            chart: {
                type: 'areaspline'
            },
			colors: [
   '#2f7ed8',
   '#0d233a',
   '#8bbc21',
   '#910000',
   '#1aadce',
   '#492970',
   '#f28f43',
   '#77a1e5',
   '#c42525',
   '#a6c96a'
],
            title: {
                text: 'Homicides by month'
            },
            xAxis: {
                categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of homicides',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ''
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                },
				areaspline: {
                    fillOpacity: 0.5
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '2008',
                data: [0, 3, 2, 3, 1, 3, 4, 3, 0, 3, 0, 2]
            }, {
                name: '2009',
                data: [1, 0, 0, 2, 3, 1, 6, 4, 1, 2, 0, 2]
            }, {
                name: '2010',
                data: [3, 1, 2, 5, 3, 2, 3, 2, 5, 4, 5, 3]
            }, {
                name: '2011',
                data: [2, 1, 2, 4, 2, 1, 0, 5, 4, 2, 2, 2]
            }, {
                name: '2012',
                data: [3, 1, 2, 6, 2, 4, 3, 1, 4, 2, 5, 1]
            }]
        });
    });

	// relationship chart
	$(function () {
        $('#murderRelContainer').highcharts({
            chart: {
                type: 'bar'
            },
			colors: [
   '#2f7ed8',
   '#0d233a',
   '#8bbc21',
   '#910000',
   '#492970',
   '#1aadce',

   '#f28f43',
   '#77a1e5',
   '#c42525',
   '#a6c96a'
],
            title: {
                text: 'Victim-suspect relationship'
            },
            xAxis: {
                categories: ['2008', '2009', '2010', '2011', '2012', '2013'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percent of homicides',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            plotOptions: {
                series: {
                    stacking: 'percent'
                }
            },
            credits: {
                enabled: false
            },
			legend: {
            reversed: true
        	},
            series: [{
                name: 'Acquaintance',
                data: [39, 36, 29, 59, 31, 35],

            }, {
                name: 'Family/Significant Other',
                data: [22, 5, 26, 19, 24, 30],

            }, {
                name: 'Stranger',
                data: [26, 50, 34, 15, 36, 23],

            }, {
                name: 'Roommate',
                data: [0, 0, 5, 0, 3, 0],

            }, {
                name: 'Undetermined',
                data: [13, 9, 6, 7, 6, 12],

            }]
        });
    });
