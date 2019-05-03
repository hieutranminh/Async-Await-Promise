// align center with JS
document.addEventListener("DOMContentLoaded", function () {
  function getEle (id) {
    return document.getElementById(id);
  }
  function centerBox () {
    var divBox = getEle('box');
    var widthDivBox = divBox.offsetWidth;
    var heightDivBox = divBox.offsetHeight;
    var positionX = (window.innerWidth - widthDivBox) / 2;
    var positionY = (window.innerHeight - heightDivBox) / 2;
    divBox.style.cssText = `left:${positionX}px; top:${positionY}px`;
  }
  centerBox();
  window.addEventListener("resize", centerBox)
})


<!-- BOOKING -->
<section id="booking" class="booking">
    <div class="booking_container">
        <div class="booking_content">
            <p>来場予定日・来場人数把握のため、事前予約をお願いしております。<br>
                お手数おかけしますが下記フォームよりご予約のほど宜しくお願い申し上げます。</p>
                <a href="#" class="btn_book">
                    <img src="./assets/images/icon_pen.png" alt="iconpen">
                    <span>予約はこちら</span>
                </a>
        </div>
    </div>
</section>
<footer id="footer_01" class="footer_01">
    <div class="footer_01_container">
        <div class="footer_01_content">
            <h4>ACCESS</h4>
            <p class="title">アクセス</p>
            <div class="box">
                <div class="map"></div>
                <div class="text">
                    <div class="box_text">
                        <p>住所 ：</p>
                        <span>東京都渋谷区東3-13-11 A-PLACE恵比寿東 9F <br>
                        JR恵比寿駅西口より徒歩6分 <br>
                        東京メトロ日比谷線恵比寿駅5番出口より徒歩5分</span>
                    </div>
                    <div class="box_text">
                        <p>TEL ：</p>
                        <span>03-6821-9393</span>
                    </div>
                    <div class="box_text">
                        <p>FAX ：</p>
                        <span>03-6821-9395</span>
                    </div>
                    <div class="box_text">
                        <p>URL ：</p>
                        <span>http://www.gumi.co.jp/</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>



// BOOKING
.booking {
  background-color: #e0e0e0;
  &_container {
    max-width: 1000px;
    margin: auto;
    text-align: center;
    @include flex;
    justify-content: center;
    align-items: center;
  }
  &_content {
    padding: 102px 142px;
    p {
      font-size: 19px;
      font-weight: bold;
      line-height: 40px;
      color: #242424;
    }
    a {
      @include inline-flex;
      background-color: #9f080d;
      color: #ffffff;
      padding: 22px 210px;
      margin-top: 37px;
      text-decoration: none;
      span {
        font-size: 24px;
        font-weight: bold;
        padding-left: 10px;
      }
    }
  }
}
// FOOTER 01
.footer_01 {
  background-color: #222222;
  &_container {
    max-width: 1000px;
    margin: auto;
    @include flex;
    justify-content: center;
    align-items: center;
  }
  &_content {
    color: #ffffff;
    h4 {
      text-align: center;
    }
    .title {
      text-align: center;
    }
  }
}




@mixin inline-flex() {
  //display: -webkit-box;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
}
