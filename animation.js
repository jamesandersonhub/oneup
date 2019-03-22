//set images
//used to set cap on transitions
var trancnt = 0;
$(window).on("resize", function() {
    if($("body").width() < 450){
        trancnt = 5;
    }else if($("body").width() < 615){
        trancnt = 4;
    }else if($("body").width() < 780){
        trancnt = 3;
    }else if($("body").width() > 780){
        trancnt = 2;
    }
})
//protein gallery
var procnt = 0;
var protein = [["https://amzn.to/2zQqBbE", "https://images-eu.ssl-images-amazon.com/images/I/51y62uzn33L._SL160_.jpg"], ["https://amzn.to/2SH5M9J", "https://images-eu.ssl-images-amazon.com/images/I/51iaKoOa5iL._SL160_.jpg"], ["https://amzn.to/2zO1fLy", "https://images-eu.ssl-images-amazon.com/images/I/41PJiSKVWnL._SL160_.jpg"], ["https://amzn.to/2SC2XGC", "https://images-eu.ssl-images-amazon.com/images/I/41EPM-ZQBnL._SL160_.jpg"], ["https://amzn.to/2zKZRJu", "https://images-eu.ssl-images-amazon.com/images/I/41LepzrLzyL._SL160_.jpg"], ["https://amzn.to/2zSa2fg", "https://images-eu.ssl-images-amazon.com/images/I/51otnSS-giL._SL160_.jpg"]];
function setproimg(n) {
    $("#prolnk1").attr("href", protein[n][0]);
    $("#proimg1").css("background-image", "url( "+protein[n][1]+")");
    $("#prolnk2").attr("href",protein[n+1][0]);
    $("#proimg2").css("background-image","url("+protein[n+1][1]+")");
    $("#prolnk3").attr("href",protein[n+2][0]);
    $("#proimg3").css("background-image","url("+protein[n+2][1]+")");
    $("#prolnk4").attr("href",protein[n+3][0]);
    $("#proimg4").css("background-image","url("+protein[n+3][1]+")");
}
function pronext(){
        if(procnt < trancnt){
            procnt = procnt+1;
            setproimg(procnt);
        }
    }
function prolast(){
        if(procnt > 0){
            procnt = procnt-1;
            setproimg(procnt);
        }
    }
//supplement gallery
var supcnt = 0;
var supple = [["https://amzn.to/2C0K1fv", "https://images-eu.ssl-images-amazon.com/images/I/51n4FhcOVUL._SL160_.jpg"], ["https://amzn.to/2zMc5Sc", "https://images-eu.ssl-images-amazon.com/images/I/41WU3o%2BRC%2BL._SL160_.jpg"], ["https://amzn.to/2zQfdwu", "https://images-eu.ssl-images-amazon.com/images/I/4161U9DRD3L._SL160_.jpg"], ["https://amzn.to/2SDwnUZ", "https://images-eu.ssl-images-amazon.com/images/I/51yDpwAq7FL._SL160_.jpg"], ["https://amzn.to/2Ut0n7S", "https://images-eu.ssl-images-amazon.com/images/I/41z18lzVkiL._SL160_.jpg"], ["https://amzn.to/2RQt9xy", "https://images-eu.ssl-images-amazon.com/images/I/41m4swi82rL._SL160_.jpg"]];
function setsupimg(n){
    $("#suplnk1").attr("href",supple[n][0]);
    $("#supimg1").css("background-image","url("+supple[n][1]+")");
    $("#suplnk2").attr("href",supple[n+1][0]);
    $("#supimg2").css("background-image","url("+supple[n+1][1]+")");
    $("#suplnk3").attr("href",supple[n+2][0]);
    $("#supimg3").css("background-image","url("+supple[n+2][1]+")");
    $("#suplnk4").attr("href",supple[n+3][0]);
    $("#supimg4").css("background-image","url("+supple[n+3][1]+")");
}
function supnext(){
        if(supcnt < trancnt){
            supcnt = supcnt+1;
            setsupimg(supcnt);
        }
    }
function suplast(){
        if(supcnt > 0){
            supcnt = supcnt-1;
            setsupimg(supcnt);
        }
    }
//energy gallery
var enecnt = 0;
var energy =[["https://amzn.to/2zGbgKH", "https://images-eu.ssl-images-amazon.com/images/I/61WzKWppWLL._SL160_.jpg"], ["https://amzn.to/2QjdLN8", "https://images-eu.ssl-images-amazon.com/images/I/51RVA5gr4AL._SL160_.jpg"], ["https://amzn.to/2BUOiRF", "https://images-eu.ssl-images-amazon.com/images/I/51i9VTXZ3zL._SL160_.jpg"], ["https://amzn.to/2L3czI2", "https://images-eu.ssl-images-amazon.com/images/I/51-GbloQO5L._SL160_.jpg"], ["https://amzn.to/2B08u2L", "https://images-eu.ssl-images-amazon.com/images/I/419dZgkLeGL._SL160_.jpg"], ["https://amzn.to/2BW0IbS", "https://images-eu.ssl-images-amazon.com/images/I/51rQ5gZUbcL._SL160_.jpg"]];
function seteneimg(n){
    $("#enelnk1").attr("href",energy[n][0]);
    $("#eneimg1").css("background-image","url("+energy[n][1]+")");
    $("#enelnk2").attr("href",energy[n+1][0]);
    $("#eneimg2").css("background-image","url("+energy[n+1][1]+")");
    $("#enelnk3").attr("href",energy[n+2][0]);
    $("#eneimg3").css("background-image","url("+energy[n+2][1]+")");
    $("#enelnk4").attr("href",energy[n+3][0]);
    $("#eneimg4").css("background-image","url("+energy[n+3][1]+")");
}
function enenext(){
        if(enecnt < trancnt){
            enecnt = enecnt+1;
            seteneimg(enecnt);
        }
    }
function enelast(){
        if(enecnt > 0){
            enecnt = enecnt-1;
            seteneimg(enecnt);
        }
    }
//capped at 2 as their are only 6 images
//ergonomic gallery
var ergcnt = 0;
var ergon = [["https://amzn.to/2QKB0PW", "https://images-eu.ssl-images-amazon.com/images/I/5150Jiz4kJL._SL160_.jpg"], ["https://amzn.to/2QgtigS", "https://images-eu.ssl-images-amazon.com/images/I/41uYu1g9Q8L._SL160_.jpg"], ["https://amzn.to/2L2RLAj", "https://images-eu.ssl-images-amazon.com/images/I/51wexfI0olL._SL160_.jpg"], ["https://amzn.to/2QmUJWx", "https://images-eu.ssl-images-amazon.com/images/I/51ejWjyhbNL._SL160_.jpg"], ["https://amzn.to/2PpdKly", "https://images-eu.ssl-images-amazon.com/images/I/51Qo8-SFVuL._SL160_.jpg"], ["https://amzn.to/2QIxo0A", "https://images-eu.ssl-images-amazon.com/images/I/4176JashUaL._SL160_.jpg"]];
function setergimg(n){
    $("#erglnk1").attr("href",ergon[n][0]);
    $("#ergimg1").css("background-image","url("+ergon[n][1]+")");
    $("#erglnk2").attr("href",ergon[n+1][0]);
    $("#ergimg2").css("background-image","url("+ergon[n+1][1]+")");
    $("#erglnk3").attr("href",ergon[n+2][0]);
    $("#ergimg3").css("background-image","url("+ergon[n+2][1]+")");
    $("#erglnk4").attr("href",ergon[n+3][0]);
    $("#ergimg4").css("background-image","url("+ergon[n+3][1]+")");
}
function ergnext(){
        if(ergcnt < trancnt){
            ergcnt = ergcnt+1;
            setergimg(ergcnt);
        }
    }
function erglast(){
        if(ergcnt > 0){
            ergcnt = ergcnt-1;
            setergimg(ergcnt);
        }
    }
//peripheral gallery
var percnt= 0;
var perip = [["https://amzn.to/2zNDi6Q", "https://images-eu.ssl-images-amazon.com/images/I/514V%2BHSWboL._SL160_.jpg"], ["https://amzn.to/2PlF8B3", "https://images-eu.ssl-images-amazon.com/images/I/41s6XZCkWVL._SL160_.jpg"], ["https://amzn.to/2Sy8s9l", "https://images-eu.ssl-images-amazon.com/images/I/51G8RylcDRL._SL160_.jpg"], ["https://amzn.to/2PrEMZt", "https://images-eu.ssl-images-amazon.com/images/I/514cV6xMKrL._SL160_.jpg"], ["https://amzn.to/2PpJ6Zu", "https://images-eu.ssl-images-amazon.com/images/I/417db0YzKlL._SL160_.jpg"], ["https://amzn.to/2B1NEA4", "https://images-eu.ssl-images-amazon.com/images/I/41ch3mPOqPL._SL160_.jpg"]];
function setperimg(n){
    $("#perlnk1").attr("href",perip[n][0]);
    $("#perimg1").css("background-image","url("+perip[n][1]+")");
    $("#perlnk2").attr("href",perip[n+1][0]);
    $("#perimg2").css("background-image","url("+perip[n+1][1]+")");
    $("#perlnk3").attr("href",perip[n+2][0]);
    $("#perimg3").css("background-image","url("+perip[n+2][1]+")");
    $("#perlnk4").attr("href",perip[n+3][0]);
    $("#perimg4").css("background-image","url("+perip[n+3][1]+")");
}
function pernext(){
        if(percnt < trancnt){
            percnt = percnt+1;
            setperimg(percnt);
        }
    }
function perlast(){
        if(percnt > 0){
            percnt = percnt-1;
            setperimg(percnt);
        }
    }
//accessories gallery
var acccnt= 0;
var acces = [["https://amzn.to/2SBufwN", "https://images-eu.ssl-images-amazon.com/images/I/41aap0xaHJL._SL160_.jpg"], ["https://amzn.to/2B0I7tu", "https://images-eu.ssl-images-amazon.com/images/I/51jSKI8fYAL._SL160_.jpg"], ["https://amzn.to/2SEi9Dn", "https://images-eu.ssl-images-amazon.com/images/I/51ZGwpd2c4L._SL160_.jpg"], ["https://amzn.to/2SDiENX", "https://images-eu.ssl-images-amazon.com/images/I/51vtePL8zxL._SL160_.jpg"],["https://amzn.to/2SBOavA", "https://images-eu.ssl-images-amazon.com/images/I/51efMW-SLGL._SL160_.jpg"], ["https://amzn.to/2RLiIeD", "https://images-eu.ssl-images-amazon.com/images/I/51XegFiTNzL._SL160_.jpg"]];
function setaccimg(n){
    $("#acclnk1").attr("href",acces[n][0]);
    $("#accimg1").css("background-image","url("+acces[n][1]+")");
    $("#acclnk2").attr("href",acces[n+1][0]);
    $("#accimg2").css("background-image","url("+acces[n+1][1]+")");
    $("#acclnk3").attr("href",acces[n+2][0]);
    $("#accimg3").css("background-image","url("+acces[n+2][1]+")");
    $("#acclnk4").attr("href",acces[n+3][0]);
    $("#accimg4").css("background-image","url("+acces[n+3][1]+")");
}
function accnext(){
        if(acccnt < trancnt){
            acccnt = acccnt+1;
            setaccimg(acccnt);
        }
    }
function acclast(){
        if(acccnt > 0){
            acccnt = acccnt-1;
            setaccimg(acccnt);
        }
    }
$(document).ready(function () {
  //twicthdiv
  new Twitch.Embed("twitch-embed", {
          width: "100%",
          height: 480,
          channel: "juecebox",
          align: "center"
        });
    if($("body").width() < 450){
        trancnt = 5;
    }else if($("body").width() < 615){
        trancnt = 4;
    }else if($("body").width() < 780){
        trancnt = 3;
    }else if($("body").width() > 780){
        trancnt = 2;
    }
    //image gallery"s initialise
    setproimg(0);
    setsupimg(0);
    seteneimg(0);
    setergimg(0);
    setperimg(0);
    setaccimg(0);
    //;
    // dropdown functionality
    $("#supplements > .ddhead").click(function(){
      $("#supplement-dropdown").slideToggle();
      $("#protein-dropdown").slideUp();
      $("#energy-dropdown").slideUp();
      $("#ergonomics-dropdown").slideUp();
      $("#peripherals-dropdown").slideUp();
      $("#accessories-dropdown").slideUp();
      })
    $("#protein > .ddhead").click(function(){
      $("#protein-dropdown").slideToggle();
      $("#supplement-dropdown").slideUp();
      $("#energy-dropdown").slideUp();
      $("#ergonomics-dropdown").slideUp();
      $("#peripherals-dropdown").slideUp();
      $("#accessories-dropdown").slideUp();
    })
    $("#energy > .ddhead").click(function(){
      $("#energy-dropdown").slideToggle();
      $("#supplement-dropdown").slideUp();
      $("#protein-dropdown").slideUp();
      $("#ergonomics-dropdown").slideUp();
      $("#peripherals-dropdown").slideUp();
      $("#accessories-dropdown").slideUp();
    })
    $("#ergonomics > .ddhead").click(function(){
      $("#ergonomics-dropdown").slideToggle();
      $("#supplement-dropdown").slideUp();
      $("#protein-dropdown").slideUp();
      $("#energy-dropdown").slideUp();
      $("#peripherals-dropdown").slideUp();
      $("#accessories-dropdown").slideUp();
    })
    $("#peripherals > .ddhead").click(function(){
      $("#peripherals-dropdown").slideToggle();
      $("#supplement-dropdown").slideUp();
      $("#protein-dropdown").slideUp();
      $("#energy-dropdown").slideUp();
      $("#ergonomics-dropdown").slideUp();
      $("#accessories-dropdown").slideUp();
    })
    $("#accessories > .ddhead").click(function(){
      $("#accessories-dropdown").slideToggle();
      $("#supplement-dropdown").slideUp();
      $("#protein-dropdown").slideUp();
      $("#energy-dropdown").slideUp();
      $("#ergonomics-dropdown").slideUp();
      $("#peripherals-dropdown").slideUp();
    })
})
