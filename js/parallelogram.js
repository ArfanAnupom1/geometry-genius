function calculateParallelogramArea() {
    const base = getInputValueById('P-base');
    console.log('base ', base);
    const hight = getInputValueById('P-hight');
    console.log('hight ', hight);

    const pArea = base * hight;
    console.log('the Area of the Parallelogram is :', pArea);

    setInnerTextById('P-area', pArea);
}

function calculateTriangleArea() {
    const base = getInputValueById('T-base');
    console.log('base ', base);
    const hight = getInputValueById('T-hight');
    console.log('hight ', hight)

    const area = 0.5 * base * hight;
    console.log('The Area of the Triangle is :', area);

    setInnerTextById('T-area', area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;

}