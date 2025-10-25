// ポップアップ画面のTypeScript

document.addEventListener('DOMContentLoaded', () => {
  const actionButton = document.getElementById('actionButton') as HTMLButtonElement;
  const resultDiv = document.getElementById('result') as HTMLDivElement;

  // ボタンクリックイベント
  actionButton.addEventListener('click', async () => {
    resultDiv.textContent = 'ボタンがクリックされました！';

    // Chrome Storageにデータを保存
    try {
      await chrome.storage.local.set({ lastClick: new Date().toISOString() });
      console.log('クリック時刻を保存しました');
    } catch (error) {
      console.error('保存エラー:', error);
    }

    // バックグラウンドスクリプトにメッセージを送信
    chrome.runtime.sendMessage({
      type: 'buttonClicked',
      timestamp: Date.now()
    }, (response) => {
      if (response) {
        console.log('バックグラウンドからの応答:', response);
      }
    });
  });

  // 保存されたデータを読み込み
  chrome.storage.local.get(['lastClick'], (result) => {
    if (result.lastClick) {
      const date = new Date(result.lastClick as string);
      resultDiv.textContent = `最後のクリック: ${date.toLocaleString('ja-JP')}`;
    }
  });
});
