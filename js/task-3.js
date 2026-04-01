function getElementWidth(content, padding, boarder) {
    const contentValue = parseFloat(content);
    const borderValue = parseFloat(border);
    const paddingValue = parseFloat(padding);
    return contentValue + paddingValue * 2 + borderValue * 2;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
