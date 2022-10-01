//Cookie Clicker JavaScript
let cookies=0;

//効果音処理
function audio() {
document.getElementById('click_audio').currentTime = 0; //連続クリックに対応
document.getElementById('click_audio').play(); //クリックしたら音を再生
}

//セーブ処理
function save() {
let data = cookies;
let json = JSON.stringify(data, undefined, 1);
localStorage.setItem('cookies', json);
}

//ロード処理
function load() {
let data = localStorage.getItem('cookies');
data = JSON.parse(data);
cookies = data;
alert('セーブデータを正常にロードしました。');

//クッキーの個数反映
document.getElementById('cookie').innerHTML = cookies+' Cookies';
}

//セーブデータ削除処理
function savedel() {
let res = confirm('本当にセーブデータを削除しますか？');

//判断処理
if (res == true) {
localStorage.removeItem('cookies');
cookies=0;
document.getElementById('cookie').innerHTML = cookies+' Cookies';
alert('セーブデータを削除しました。');
//キャンセル処理
} else {
alert('セーブデータ削除をキャンセルしました。');
}
}

//クッキークリック処理
function cclick() {
cookies+=1; //クッキーを焼く処理
document.getElementById('cookie').innerHTML = cookies+' Cookies'; //クッキーの個数反映
}

//チート処理
function cheat() {
cookies=9999999999999999;
document.getElementById('cookie').innerHTML = cookies+' Cookies';
save();
alert('ズルして作ったクッキーはまずい！');
}






