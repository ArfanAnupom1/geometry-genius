function calculateRectangleArea() {
    const RectangleWightInput = document.getElementById('R-wight');
    const RectangleWightText = RectangleWightInput.value;
    const wight = parseFloat(RectangleWightText)
    console.log(wight);

    const RectangleLengthInput = document.getElementById('R-length');
    const RectangleLengthText = RectangleLengthInput.value;
    const length = parseFloat(RectangleLengthText)
    console.log(length);

    const area = wight * length;
    console.log('The Area of the Rectangle is :', area);

    const rAreaSpan = document.getElementById('R-area');
    rAreaSpan.innerText = area;
}