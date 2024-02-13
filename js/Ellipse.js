function calculateEllipsemArea() {
    const a = getInputValueById('Ellipsem-a');
    console.log('a ', a);
    const p = getInputValueById('Ellipsem-p');
    console.log('p ', p);

    const π = 3.14 ;

    const EllipsemArea = π * a * p;
    console.log('the Area of the Ellipsem Area is :', EllipsemArea);

    setInnerTextById('Ellipsem-area', EllipsemArea);
}
