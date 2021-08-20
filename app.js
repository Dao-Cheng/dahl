// 引用linebot SDK
var linebot = require('linebot');
// 用於辨識Line Channel的資訊
var bot = linebot({
    channelId: 'U87b68eac499eb1cc977ef46a109245a5',
    channelSecret: 'c0d59b035a0ce81b4a8babc37b873d86',
    channelAccessToken: '52xyBDsebX5jP9weGu4OqzNpAOR4NfuOKsTwE5j20BZH27i6tQ4grkutzBe4sRp35+6tv4p3QPs5FuY2kVAnO7KTtHhlo07IGdadsJZ6R2lsc+euTGuoYQE9oUgRfYwankbpPmsLZg4Sn17oJk/g6QdB04t89/1O/w1cDnyilFU='
});

// // 當有人傳送訊息給Bot時
// bot.on('message', function (event) { // event.message.text是使用者傳給bot的訊息 // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者 event.reply(event.message.text).then(function (data) { // 當訊息成功回傳後的處理 }).catch(function (error) { // 當訊息回傳失敗後的處理 });
// });
// // Bot所監聽的webhook路徑與port
// bot.listen('/linewebhook', 3000, function () {
//     console.log('[BOT已準備就緒]');
// });

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息
    // 準備要回傳的內容
    var replyMsg = `Hello你剛才說的是:${event.message.text}`;
    // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
    event.reply(replyMsg).then(function (data) {
        // 當訊息成功回傳後的處理
    }).catch(function (error) {
        // 當訊息回傳失敗後的處理
    });
});