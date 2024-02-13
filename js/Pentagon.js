function calculatePentagonArea(){
    const p = getInputValueById('pentagon-p');
    console.log('base ', p);
    const b = getInputValueById('pentagon-b');
    console.log('hight ', b)

    const pentagonArea = 0.5 * p * b;
    console.log('The Area of the pentagon is :', pentagonArea);

    setInnerTextById('pentagon-area', pentagonArea);
}