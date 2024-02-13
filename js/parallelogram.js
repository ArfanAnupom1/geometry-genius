function calculateParallelogramArea() {
    const base = getInputValueById('P-base');
    console.log('base ', base);
    const hight = getInputValueById('P-hight');
    console.log('hight ', hight);

    const pArea = base * hight;
    console.log('the Area of the Parallelogram is :', pArea);

    setInnerTextById('P-area', pArea);
}



