// オプション画面のTypeScript

document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.getElementById('save') as HTMLButtonElement;
  const statusDiv = document.getElementById('status') as HTMLDivElement;
  const option1Input = document.getElementById('option1') as HTMLInputElement;

  // 保存されている設定を読み込む
  chrome.storage.sync.get(['option1'], (result) => {
    if (result.option1) {
      option1Input.value = result.option1 as string;
    }
  });

  // 保存ボタンのクリックイベント
  saveButton.addEventListener('click', () => {
    const option1Value = option1Input.value;

    // 設定を保存
    chrome.storage.sync.set({
      option1: option1Value
    }, () => {
      // 保存成功メッセージを表示
      statusDiv.textContent = '設定を保存しました！';

      // 3秒後にメッセージを消す
      setTimeout(() => {
        statusDiv.textContent = '';
      }, 3000);
    });
  });
});
