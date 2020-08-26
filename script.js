const coinArray = ["BTC", "ETH", "XRP", "BCH", "ADA", "XLM", "NEO", "LTC", "EOS", "XEM"]
var URL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=";
var currency = "&tsyms=USD"
var returnArray = [];
var apiKey = "&api_key=YWq0JeKUpCNYNzFC0ussbsqrj1wviR5a"
var queryURL = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + apiKey

var BTC = "BTC"
var ETH = "ETH"
var XRP = "XRP"
var BBC = "BBC"
var XLM = "XLM"
var Neo = "Neo"
var LTE = "LTE"
var EOS = "EOS"
var NEM = "NEM"

console.log(BTC)

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
    
    if (getElementById === "BTC") {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "$ " + (BTCPrice) + " USD"
      $("#TodaysPrice").append(coins);
  
    }
    else if ("ETH") {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "$ " + (ETHPrice) + " USD"
      $("#TodaysPrice").append(coins);
    }

    else if ('XRP') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "$ " + (XRPPrice) + " USD"
      $("#TodaysPrice").append(coins);
    }

    else if ('BCC') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "$ " + (BCHPrice) + " USD"
      $("#TodaysPrice").append(coins);
    }

    else if ('XLM') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "$ " + (XLMPrice) + " USD"
      $("#TodaysPrice").append(coins);
    }

    else if ('NEO') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "$ " + (NEOPrice) + " USD"
      $("#TodaysPrice").append(coins);
    }

    else if ('LTE') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "$ " + (LTCPrice) + " USD"
      $("#TodaysPrice").append(coins);
    }

    else if ('EOS') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "$ " + (EOSPrice) + " USD"
      $("#TodaysPrice").append(coins);
    }
    
    else if ('NEM') {
      var coins= document.getElementById("TodaysPrice");
      coins.innerHTML = "$ " + (XEMPrice) + " USD"
      $("#TodaysPrice").append(coins);
      
    }

   })
})
