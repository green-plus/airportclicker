var numAir = 0;
var nameAir = "空港をつくろう！";
function genAir() {
  numAir = numAir + 1;
  var nameAir = "";
  for (var i = 0; i < 8; i++) {
    var luck = Math.random() * 8;
    if(luck < 3){
      nameAir += "ル";
    }
    else if(luck<4){
      nameAir += "シ";
    }
    else if(luck<5){
      nameAir += "ャ";
    }
    else if(luck<6){
      nameAir += "ド";
    }
    else if(luck<7){
      nameAir += "ゴ";
    }
    else {
      nameAir += "ー";
    }
  }//generate the name
  nameAir += "空港";
  num.innerHTML = numAir;
  names.innerHTML = nameAir;
}

//ツイートボタンが押された時の処理
function tweet() {
  //出目をHTMLから取得する
  var keyWord = names.innerHTML;
　//ツイート内容をセット
　var tw_contents = (keyWord);
　var url = "green-plus.github.io";
  var hashtags = "シャルルドゴール空港";
　//#twitter_buttonのhrefにパラメーターを渡す
　window.open().location.href = ("https://twitter.com/share?url=" + url + "&text=" + tw_contents + "&count=none&lang=ja&hashtags=" + hashtags);
}
