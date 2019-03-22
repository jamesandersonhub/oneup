<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneUp Health</title>
    <link href="styles.css" type="text/css" rel="stylesheet"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://embed.twitch.tv/embed/v1.js"></script>
    <script src="animation.js"></script>
  </head>
  <body>
    <div id="left-col">

    </div>
    <div id="right-col">

    </div>
    <div id="Center">
      <div id="header">
        <img id="logo" src="images/1uplogo.png" alt="1up logo"/>
        <div id="social">
          <a href=""><img class="icon" src="images/Facebook.png" alt="facebook icon"/></a>
          <a href=""><img class="icon" src="images/Google Plus.png" alt="google plus icon"/></a>
          <a href=""><img class="icon" src="images/Instagram.png" alt="instagram icon"/></a>
          <a href=""><img class="icon" src="images/Pintrest.png" alt="pintrest icon"/></a>
          <a href=""><img class="icon" src="images/Tumblr.png" alt="tumblr icon"/></a>
        </div>
      </div>
      <div id="content">
          <div id="banner">
            <div id="twitch-embed"></div>
          </div>
          <div id="supplements" class="holder">
              <img class="ddhead" src="images/ddSupplements.png" alt="supplements drop down"/>
              <div id="supplement-dropdown" class="dropdown">
                  <div class="frame">
                    <img class="last" id="supbck" onclick="suplast()" src="images/leftArrow.png" alt="back arrow"/>
                    <a href="" target="_blank" id="suplnk1"><div id="supimg1" class="prodimg1"></div></a>
                    <a href="" target="_blank" id="suplnk2"><div id="supimg2" class="prodimg2"></div></a>
                    <a href="" target="_blank" id="suplnk3"><div id="supimg3" class="prodimg3"></div></a>
                    <a href="" target="_blank" id="suplnk4"><div id="supimg4" class="prodimg4"></div></a>
                    <img class="next" id="supnxt" onclick="supnext()" src="images/rightArrow.png"/>
                  </div>
              </div>
          </div>
          <div id="protein" class="holder">
              <img class="ddhead" src="images/ddProtein.png" alt="protein drop down"/>
              <div id="protein-dropdown" class="dropdown">
                  <div class="frame">
                    <img class="last" id="probck" onclick="prolast()" src="images/leftArrow.png" alt="back arrow"/>
                    <a href="" target="_blank" id="prolnk1"><div id="proimg1" class="prodimg1"></div></a>
                    <a href="" target="_blank" id="prolnk2"><div id="proimg2" class="prodimg2"></div></a>
                    <a href="" target="_blank" id="prolnk3"><div id="proimg3" class="prodimg3"></div></a>
                    <a href="" target="_blank" id="prolnk4"><div id="proimg4" class="prodimg4"></div></a>
                    <img class="next" id="pronxt" onclick="pronext()" src="images/rightArrow.png"/>
                  </div>
              </div>
          </div>
          <div id="energy" class="holder">
              <img class="ddhead" src="images/ddEnergy.png" alt="energy drop down"/>
              <div id="energy-dropdown" class="dropdown">
                  <div class=frame>
                    <img class="last" id="enebck" src="images/leftArrow.png" onclick="enelast()" alt="back arrow"/>
                    <a href="" target="_blank" id="enelnk1"><div id="eneimg1" class="prodimg1"></div></a>
                    <a href="" target="_blank" id="enelnk2"><div id="eneimg2" class="prodimg2"></div></a>
                    <a href="" target="_blank" id="enelnk3"><div id="eneimg3" class="prodimg3"></div></a>
                    <a href="" target="_blank" id="enelnk4"><div id="eneimg4" class="prodimg4"></div></a>
                    <img class="next" id="enenxt" src="images/rightArrow.png" onclick="enenext()" alt="next arrow"/>
                  </div>
              </div>
          </div>
          <div id="ergonomics" class="holder">
              <img class="ddhead" src="images/ddErgonomics.png" alt="ergonomics drop down"/>
              <div id="ergonomics-dropdown" class="dropdown">
                  <div class=frame>
                    <img class="last" id="ergbck" src="images/leftArrow.png" onclick="erglast()" alt="back arrow"/>
                    <a href="" target="_blank" id="erglnk1"><div id="ergimg1" class="prodimg1"></div></a>
                    <a href="" target="_blank" id="erglnk2"><div id="ergimg2" class="prodimg2"></div></a>
                    <a href="" target="_blank" id="erglnk3"><div id="ergimg3" class="prodimg3"></div></a>
                    <a href="" target="_blank" id="erglnk4"><div id="ergimg4" class="prodimg4"></div></a>
                    <img class="next" id="ergnxt" src="images/rightArrow.png" onclick="ergnext()" alt="next arrow"/>
                  </div>
              </div>
          </div>
          <div id="peripherals" class="holder">
              <img class="ddhead" src="images/ddPeripherals.png" alt="peripherals drop down"/>
              <div id="peripherals-dropdown" class="dropdown">
                  <div class=frame>
                    <img class="last" id="perbck" src="images/leftArrow.png" onclick="perlast()" alt="back arrow"/>
                    <a href="" target="_blank" id="perlnk1"><div id="perimg1" class="prodimg1"></div></a>
                    <a href="" target="_blank" id="perlnk2"><div id="perimg2" class="prodimg2"></div></a>
                    <a href="" target="_blank" id="perlnk3"><div id="perimg3" class="prodimg3"></div></a>
                    <a href="" target="_blank" id="perlnk4"><div id="perimg4" class="prodimg4"></div></a>
                    <img class="next" id="pernxt" src="images/rightArrow.png" onclick="pernext()" alt="next arrow"/>
                  </div>
              </div>
          </div>
          <div id="accessories" class="holder">
              <img class="ddhead" src="images/ddAccessories.png" alt="accessories drop down"/>
              <div id="accessories-dropdown" class="dropdown">
                  <div class=frame>
                    <img class="last" id="accbck" src="images/leftArrow.png" onclick="acclast()" alt="back arrow"/>
                    <a href="" target="_blank" id="acclnk1"><div id="accimg1" class="prodimg1"></div></a>
                    <a href="" target="_blank" id="acclnk2"><div id="accimg2" class="prodimg2"></div></a>
                    <a href="" target="_blank" id="acclnk3"><div id="accimg3" class="prodimg3"></div></a>
                    <a href="" target="_blank" id="acclnk4"><div id="accimg4" class="prodimg4"></div></a>
                    <img class="next" id="accnxt" src="images/rightArrow.png" onclick="accnext()" alt="next arrow"/>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </body>
</html>
