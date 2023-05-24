const btnAcceptCookies = document.querySelector(".accept-cookie");
const btnDeclineCookies = document.querySelector(".decline-cookie");
const cookiePolicy = document.querySelector(".cookie-policy");

window.onload = function() {
    dataLayer = [];
    let analyticsAccepted = getCookieValue("analyticsAccepted");
    if (analyticsAccepted === "") {
        cookiePolicy.removeAttribute("hidden");
        btnAcceptCookies.addEventListener("click", () => {
            acceptAnalyticsCookie();
        })

        btnDeclineCookies.addEventListener("click", () => {
            declineAnalyticsCookie();
        })

    } else if (analyticsAccepted === "true") {
        dataLayer.push({'event': 'cookies-accept'});
    } else if (analyticsAccepted === "false") {
    }
};

function acceptAnalyticsCookie() {
    setCookie("analyticsAccepted", "true", 365);
    hideCookiePolicy();
}
  
function declineAnalyticsCookie() {
    setCookie("analyticsAccepted", "false", 365);
    hideCookiePolicy();
}
  
function hideCookiePolicy() {
    cookiePolicy.setAttribute("hidden", "hidden");
}

function getCookieValue(cookieName) {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
}

function setCookie(cookieName, cookieValue, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}
  