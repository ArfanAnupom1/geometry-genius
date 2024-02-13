// function calculateTriangleArea() {
//     const triangleBaseInput = document.getElementById('T-base');
//     const triangleBaseText = triangleBaseInput.value;
//     const base = parseFloat(triangleBaseText)
//     console.log(base);

//     const triangleHightInput = document.getElementById('T-hight');
//     const triangleHightText = triangleHightInput.value;
//     const hight = parseFloat(triangleHightText)
//     console.log(hight);

//     const area = 0.5 * base * hight;
//     console.log('The Area of the Triangle is :', area);

//     const tAreaSpan = document.getElementById('T-area');
//     tAreaSpan.innerText = area;
// }

function calculateTriangleArea() {
    const base = getInputValueById('T-base');
    console.log('base ', base);
    const height = getInputValueById('T-hight');
    console.log('height ', height)

    const area = 0.5 * base * height;
    console.log('The Area of the Triangle is:', area);

    setInnerTextById('T-area', area);
}

