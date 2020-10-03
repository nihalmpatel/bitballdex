var logoBaseUrl = "https://bitball-dex.com/token-logo/";
// var logoBaseUrl = "http://127.0.0.1:5500/token-logo/";

var tokenList = {
    "0xf8e554bd4572b05c18a4fbddeab989bd21dfbd77": {
        disable: false,
        symbol: "BOZZ",
        imgUrl: "bozz-token.png"
    },
    "0xd9336caf74a51bf27d58b1b68fecb4c5f6f4d7b7": {
        disable: true,
        symbol: "CSTT",
        imgUrl: "cstt-token.png"
    },
    "0x0009348015062f9292a53a3b6e3e3ba48e2093f3": {
        disable: false,
        symbol: "UB",
        imgUrl: "ub-token.png"
    }
};
var createdElement = false;

function disableToken() {

    var url = $(location).attr('href');
    var parts = url.split("/");
    var last_part = parts[parts.length - 1];
    var urlSymbol = (last_part.split("-")[0]);
    for (let tokenKey in tokenList) {
        if (urlSymbol === tokenList[tokenKey].symbol && tokenList[tokenKey].disable === true) {
            $("body").addClass("someAction");
            if (document.getElementById("disable-trade-content-id") === null) {
                addBlock()
            }
        }
    }
    if ($("body").hasClass("someAction")) {
        $(".buy-sell input").prop("disabled", true); //Enable
        $(".buy-sell button").prop("disabled", true); //Enable
    } else {
        $(".buy-sell input").prop("disabled", false); //Disable
        $(".buy-sell button").prop("disabled", false); //Disable
    }
}

function addBlock() {
    var aqDBS = document.createElement("div");
    aqDBS.setAttribute("class", "disable-trade-content");
    aqDBS.setAttribute("id", "disable-trade-content-id");
    var inPara = document.createElement("p");
    inPara.innerHTML = "Buy directly from Orderbook"
    var downIcon = document.createElement("i");
    downIcon.setAttribute("class", "fa fa-long-arrow-down");
    downIcon.setAttribute("aria-hidden", true)
    document.querySelector('.aq-invoice').appendChild(aqDBS);
    aqDBS.append(inPara);
    aqDBS.append(downIcon);
    createdElement = true;
}

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    if (element !== null) {
        element.parentElement.removeChild(element)
    }
}