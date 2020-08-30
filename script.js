const coinArray = ["BTC", "ETH", "XRP", "BCH", "ADA", "XLM", "NEO", "LTC", "EOS", "XEM"]
var URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=";
var currency = "&tsyms=USD"
var returnArray = [];
var apiKey = "&api_key=YWq0JeKUpCNYNzFC0ussbsqrj1wviR5a"
var queryURL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + apiKey

const getAllPrices = async (coinArray) => {
  const cArray = coinArray.map(async c => {
    const response = await getPrice(c)
    return response
  });
  const newArray = await Promise.all(cArray);
  // ... do some stuff
  return newArray
}
const getPrice = (a) => {
  return new Promise((resolve, reject) => {
        $.ajax({
             url: URL + a + currency,
             method: "GET",
        })
             .then((response) => {
                 resolve(response.RAW)
             })
     })
 }


////////////////////////////////////////////////////
 getAllPrices(coinArray).then((newArray) => {
   // using spread operator to copy the array -- because these are complex objects
   returnArray = [...newArray]
   // entire array of complex objects
   console.log("======= Array of Complex Objects  =======")
   console.log(returnArray)
   console.log("Results for 1st item in the array")
   BTCPrice = returnArray[0].BTC.USD.PRICE
   ETHPrice = returnArray[1].ETH.USD.PRICE
   XRPPrice = returnArray[2].XRP.USD.PRICE
   BCHPrice = returnArray[3].BCH.USD.PRICE
   ADAPrice = returnArray[4].ADA.USD.PRICE
   XLMPrice = returnArray[5].XLM.USD.PRICE
   NEOPrice = returnArray[6].NEO.USD.PRICE
   LTCPrice = returnArray[7].LTC.USD.PRICE
   EOSPrice = returnArray[8].EOS.USD.PRICE
   XEMPrice = returnArray[9].XEM.USD.PRICE

   console.log("Results for 1st item in the array")
  
   var BTCHigh = returnArray[0].BTC.USD.HIGHDAY
   var ETHHigh = returnArray[1].ETH.USD.HIGHDAY
   var XRPHigh = returnArray[2].XRP.USD.HIGHDAY
   var BCHHigh = returnArray[3].BCH.USD.HIGHDAY
   var ADAHigh = returnArray[4].ADA.USD.HIGHDAY
   var XLMHigh = returnArray[5].XLM.USD.HIGHDAY
   var NEOHigh = returnArray[6].NEO.USD.HIGHDAY
   var LTCHigh = returnArray[7].LTC.USD.HIGHDAY
   var EOSHigh = returnArray[8].EOS.USD.HIGHDAY
   var XEMHigh = returnArray[9].XEM.USD.HIGHDAY

   var BTCLow = returnArray[0].BTC.USD.LOWDAY
   var ETHLow = returnArray[1].ETH.USD.LOWDAY
   var XRPLow = returnArray[2].XRP.USD.LOWDAY
   var BCHLow = returnArray[3].BCH.USD.LOWDAY
   var ADALow = returnArray[4].ADA.USD.LOWDAY
   var XLMLow = returnArray[5].XLM.USD.LOWDAY
   var NEOLow = returnArray[6].NEO.USD.LOWDAY
   var LTCLow = returnArray[7].LTC.USD.LOWDAY
   var EOSLow = returnArray[8].EOS.USD.LOWDAY
   var XEMLow = returnArray[9].XEM.USD.LOWDAY

   console.log("Price for coin BTC = " + BTCPrice + " USD")
   console.log("Price for coin ETH = " + ETHPrice + " USD") 
   console.log("Price for coin XRP = " + XRPPrice + " USD")
   console.log("Price for coin BCH = " + BCHPrice + " USD") 
   console.log("Price for coin ADA = " + ADAPrice + " USD")
   console.log("Price for coin XLM = " + XLMPrice + " USD") 
   console.log("Price for coin NEO = " + NEOPrice + " USD")
   console.log("Price for coin LTC = " + LTCPrice + " USD") 
   console.log("Price for coin EOS = " + EOSPrice + " USD")
   console.log("Price for coin XEM = " + XEMPrice + " USD") 
  


   $("#Search").on("click",function(event) {
    event.preventDefault();
    
    
    var cryptoCur = document.getElementById("cryptocur").value

    if (cryptoCur == "BTC") {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "Today's Price: $ " + (BTCPrice) + " USD"
      $("#TodaysPrice").append(coins);


      
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  ['Low', 'High', 'Today'],
        datasets: [{
            label: 'USD Price for Bitcoin',
            data: [BTCLow,BTCHigh,BTCPrice],

            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Price in USD'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
  
    }
    else if (cryptoCur == "ETH") {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "Today's Price: $ " + (ETHPrice) + " USD"
      $("#TodaysPrice").append(coins);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Low', 'High', 'Today'],
        datasets: [{
            label: 'USD Price for ETH',
            data: [ETHLow,ETHHigh,ETHPrice],

            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    }

    else if (cryptoCur == 'XRP') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "Today's Price: $ " + (XRPPrice) + " USD"
      $("#TodaysPrice").append(coins);

      var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  ['Low', 'High', 'Today'],
        datasets: [{
            label: 'USD Price for XRP',
            data: [XRPLow,XRPHigh,XRPPrice],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    }

    else if (cryptoCur == 'BCH') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "Today's Price: $ " + (BCHPrice) + " USD"
      $("#TodaysPrice").append(coins);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  ['Low', 'High', 'Today'],
        datasets: [{
            label: 'USD Price for Bitcoin Cash',
            data: [BCHLow,BCHHigh,BCHPrice],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    }
    else if (cryptoCur == 'ADA') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "Today's Price: $ " + (ADAPrice) + " USD"
      $("#TodaysPrice").append(coins);

      var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  ['Low', 'High', 'Today'],
        datasets: [{
            label: 'USD Price for ADA',
            data: [ADALow,ADAHigh,ADAPrice],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    }
    else if (cryptoCur == 'XLM') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "Today's Price: $ " + (XLMPrice) + " USD"
      $("#TodaysPrice").append(coins);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  ['Low', 'High', 'Today'],
        datasets: [{
            label: 'USD Price for XLM',
            data: [XLMLow,XLMHigh,XLMPrice],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    }

    else if (cryptoCur == 'Neo') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "Today's Price: $ " + (NEOPrice) + " USD"
      $("#TodaysPrice").append(coins);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  ['Low', 'High', 'Today'],
        datasets: [{
            label: 'USD Price for NEO',
            data: [NEOLow,NEOHigh,NEOPrice],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    }

    else if (cryptoCur == 'LTC') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "Today's Price: $ " + (LTCPrice) + " USD"
      $("#TodaysPrice").append(coins);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  ['Low', 'High', 'Today'],
        datasets: [{
            label: 'USD Price for Litecoin',
            data: [LTCLow,LTCHigh, LTCPrice],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    }

    else if (cryptoCur == 'EOS') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "Today's Price: $ " + (EOSPrice) + " USD"
      $("#TodaysPrice").append(coins);

      var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  ['Low', 'High', 'Today'],
        datasets: [{
            label: 'USD Price for EOS',
            data: [EOSLow,EOSHigh,EOSPrice],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    }
    
    else if (cryptoCur == 'NEM') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "Today's Price: $ " + (XEMPrice) + " USD"
      $("#TodaysPrice").append(coins);
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:  ['Low', 'High', 'Today'],
        datasets: [{
            label: 'USD Price for NEM',
            data: [XEMLow,XEMHigh,XEMPrice],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{ 
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
      
    }


   })

   



});


