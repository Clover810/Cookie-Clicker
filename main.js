//Cookie Clicker JavaScript
//変数定義
let cookies=0;
let clickpower=1;
let clickcost=100;

//開始時の処理
console.log('Hello!\nCan you help me with debugging?');

//関数定義
//クッキー枚数表示反映
function hanei() {
document.getElementById('cookie').innerHTML = cookies+' Cookies';
}

//効果音処理
function audio() {
document.getElementById('click_audio').currentTime = 0; //連続クリックに対応
document.getElementById('click_audio').play(); //クリックしたら音を再生
}

//セーブ処理
function save() {
// cookies
let data = cookies;
let json = JSON.stringify(data, undefined, 1);
localStorage.setItem('cookies', json);
// clickpower
let data2 = clickpower;
let json2 = JSON.stringify(data2, undefined, 1);
localStorage.setItem('clickpower', json2);
}

//ロード処理
function load() {
// cookies
let data = localStorage.getItem('cookies');
data = JSON.parse(data);
cookies = data;
// clickpower
let data2 = localStorage.getItem('clickpower');
data2 = JSON.parse(data2);
clickpower = data2;
alert('セーブデータを正常にロードしました。');
hanei();
}

//セーブデータ削除処理
function savedel() {
let res = confirm('本当にセーブデータを削除しますか？');

//判断処理
if (res == true) {
// cookies
localStorage.removeItem('cookies');
cookies=0;
// clickpower
localStorage.removeItem('clickpower');
clickpower=1;
clickcost=100;
save();
hanei();
alert('セーブデータを削除しました。');
//キャンセル処理
} else {
alert('セーブデータ削除をキャンセルしました。');
}
}

//クッキークリック処理
function cclick() {
cookies += clickpower; //クッキーを焼く処理
audio();
hanei();
}

//チート処理
function cheat() {
cookies=9999999;
hanei();
save();
console.warn('You cheated!');
console.warn('No one wants to eat your cookies.');
console.log('Do you enjoy cheating?');
alert('ズルして作ったクッキーはまずい！');
}

//〜ここからショップ〜
//クリック力増加
function clickshop() {
let res = confirm('クリック力増加を購入しますか？\n必要なクッキー: '+(clickcost)+'枚');
if (res == true) {
if (cookies >= clickcost) {
cookies -= clickcost;
clickpower += 1;
clickcost = clickpower*2+100;
hanei();
alert('クリック力が増加しました\nクリック力: '+(clickpower-1)+' → '+(clickpower));
} else {
alert('クッキーが'+(clickcost-cookies)+'枚足りません');
}
} else {
alert('購入をキャンセルしました')
}
}
