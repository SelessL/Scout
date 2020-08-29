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
   // this is covered later in course when we hit es6
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
      coins.innerHTML = "$ " + (BTCPrice) + " USD"
      $("#TodaysPrice").append(coins);
      
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Bitcoin',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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
    else if (cryptoCur == "ETH") {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "$ " + (ETHPrice) + " USD"
      $("#TodaysPrice").append(coins);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'ETH',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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
      coins.innerHTML = "$ " + (XRPPrice) + " USD"
      $("#TodaysPrice").append(coins);

      var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'XRP',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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

    else if (cryptoCur == 'BCC') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "$ " + (BCHPrice) + " USD"
      $("#TodaysPrice").append(coins);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Bitcoin Cash',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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
      coins.innerHTML = "$ " + (XLMPrice) + " USD"
      $("#TodaysPrice").append(coins);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'XLM',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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
      coins.innerHTML = "$ " + (NEOPrice) + " USD"
      $("#TodaysPrice").append(coins);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Neo',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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

    else if (cryptoCur == 'LTE') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "$ " + (LTCPrice) + " USD"
      $("#TodaysPrice").append(coins);

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Litecoin',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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
      coins.innerHTML = "$ " + (EOSPrice) + " USD"
      $("#TodaysPrice").append(coins);

      var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'EOS',
            data: [
              9579.71,

              ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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
      coins.innerHTML = "$ " + (XEMPrice) + " USD"
      $("#TodaysPrice").append(coins);
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'NEM',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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


