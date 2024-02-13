function calculatePentagonArea() {
    const s = getInputValueById('pentagon-s'); // Assuming 's' is the length of one side
    console.log('side ', s);

    const pentagonArea = (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(s, 2);
    console.log('The Area of the pentagon is:', pentagonArea);

    setInnerTextById('pentagon-area', pentagonArea);
}
