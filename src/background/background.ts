// バックグラウンドスクリプト (Service Worker)

// 拡張機能のインストール時
chrome.runtime.onInstalled.addListener((details) => {
  console.log('拡張機能がインストールされました');

  if (details.reason === 'install') {
    // 初回インストール時の処理
    chrome.storage.local.set({
      installDate: new Date().toISOString()
    });
  } else if (details.reason === 'update') {
    // アップデート時の処理
    console.log('拡張機能が更新されました');
  }
});

// メッセージリスナー
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('メッセージを受信:', request);

  if (request.type === 'buttonClicked') {
    console.log('ボタンクリックイベントを受信:', request.timestamp);

    // 応答を送信
    sendResponse({
      status: 'success',
      message: 'バックグラウンドで処理しました'
    });
  }

  return true; // 非同期応答を有効にする
});

// タブの更新を監視
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    console.log('タブが更新されました:', tab.url);
  }
});
