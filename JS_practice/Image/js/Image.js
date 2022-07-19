function setImage(index) {
    var img_list = [
        'image/1.jpg',
        'image/2.jpg',
        'image/3.jpg'
    ];

    // 이미지 객체화
    var image = document.getElementById("target");
    // 이미지 객체의 src속성에 배열의 값들 중에서
    // 파라미터로 전달된 인덱스의 위치값으로 설정함
    image.src = img_list[index];
}