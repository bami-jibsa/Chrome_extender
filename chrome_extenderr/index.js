setInterval(() => {
    // 이미지 변경
    let imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
        img.src = 'https://i.namu.wiki/i/_0oSGBsKqA5SStbvIRX8axKnSDEoOBnhghKOb3uJRgffUkJNi-h6x6WtzbfHHSpo6uEmg1ZDGoMvTSrPXRKHyg.webp';
    });

    // 비디오 변경
    let videos = document.querySelectorAll('video');
    videos.forEach(video => {
        // 비디오에 source 요소를 추가하여 새 비디오 URL을 설정
        while (video.firstChild) {
            video.removeChild(video.firstChild);
        }
        let source = document.createElement('source');
        source.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
        video.appendChild(source);
        video.load(); // 비디오 다시 로드
    });
}, 500);
