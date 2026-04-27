// 確保 DOM 載入後執行
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 導覽列捲動效果：捲動時增加陰影或背景色深度
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. 簡單的點擊追蹤 (Console log 測試)
    const primaryBtn = document.querySelector('.btn-primary');
    primaryBtn.addEventListener('click', () => {
        console.log('User clicked View Work');
    });

    // 此處未來可以加入更多互動，例如：
    // - 作品集分類切換
    // - 打字機效果文字
});