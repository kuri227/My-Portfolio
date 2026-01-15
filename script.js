// スライダー制御用
let slideIndices = {
    'shooting_ball': 0,
    'image_viewer': 0
};

function showSlides(id, n) {
    const container = document.querySelector(`#${id} .slides`);
    if (!container) return; // 要素がない場合は何もしない

    const slides = container.children;
    const totalSlides = slides.length;

    let index = slideIndices[id];
    index += n;

    if (index >= totalSlides) { index = 0; }
    if (index < 0) { index = totalSlides - 1; }

    slideIndices[id] = index;
    container.style.transform = `translateX(${-index * 100}%)`;
}

// グローバル関数として公開（HTMLのonclickから呼ぶため）
window.moveSlide1 = function(n) {
    showSlides('shooting_ball', n);
};

window.moveSlide2 = function(n) {
    showSlides('image_viewer', n);
};