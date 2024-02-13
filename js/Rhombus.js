function calculateRhombusArea() {
    const D1 = getInputValueById('Rh-d1');
    console.log('base ', D1);
    const D2 = getInputValueById('Rh-d2');
    console.log('hight ', D2)

    const area = 0.5 * D1 * D2;
    console.log('The Area of the Rhombus is :', area);

    setInnerTextById('Rh-area', area);
}