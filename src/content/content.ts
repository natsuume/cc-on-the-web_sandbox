// コンテンツスクリプト
// このスクリプトはWebページに注入されます

console.log('コンテンツスクリプトが読み込まれました');

// ページ読み込み時の処理
window.addEventListener('load', () => {
  console.log('ページが読み込まれました:', window.location.href);
});

// バックグラウンドスクリプトからのメッセージを受信
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('コンテンツスクリプトでメッセージを受信:', request);

  if (request.action === 'getPageInfo') {
    // ページ情報を返す
    sendResponse({
      title: document.title,
      url: window.location.href,
      textContent: document.body.innerText.substring(0, 100)
    });
  }

  return true;
});

// DOM操作の例（必要に応じてコメントアウトを解除）
/*
function highlightKeywords(): void {
  const keywords: string[] = ['example', 'sample'];
  const bodyText: string = document.body.innerHTML;

  keywords.forEach((keyword) => {
    const regex = new RegExp(keyword, 'gi');
    document.body.innerHTML = bodyText.replace(
      regex,
      `<span style="background-color: yellow;">${keyword}</span>`
    );
  });
}
*/
