'use strict';

// クリックイベント ここから
const textBtn = document.getElementById('textBtn');
const subText = document.getElementById('subText');

subText.style.display = 'none';

function clickBtn() {
  if (subText.style.display === 'block') {
    // noneで非表示
    subText.style.display = 'none';
    textBtn.value = '続きを読む';
  } else {
    // blockで表示
    subText.style.display = 'block';
    textBtn.value = '閉じる';
  }
}
// クリックイベント ここまで

// ドロワーメニュー ここから
$(document).ready(function () {
  $('.drawer').drawer();
});

$('.drawer').drawer({
  class: {
    nav: 'drawer-nav',
    toggle: 'drawer-toggle',
    overlay: 'drawer-overlay',
    open: 'drawer-open',
    close: 'drawer-close',
    dropdown: 'drawer-dropdown'
  },
  iscroll: {
    // Configuring the iScroll
    // https://github.com/cubiq/iscroll#configuring-the-iscroll
    mouseWheel: true,
    preventDefault: false
  },
  showOverlay: true
});
// ドロワーメニュー ここまで