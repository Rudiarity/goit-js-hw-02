function getElementWidth(content, padding, border) {
    const sizeContent = Number.parseFloat(content);
    const sizePadding = Number.parseFloat(padding);
    const sizeBorder = Number.parseFloat(border);
    const borderBox = sizeBorder * 4;
    const totalSize = sizeContent + sizePadding + borderBox;
    return   totalSize;
    
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 106 не розумію чому у ТЗ вказано 101, бо якщо все додати виходть 106
console.log(getElementWidth("200px", "0px", "0px")); // 200
3