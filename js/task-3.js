function getElementWidth(content, padding, boarder) {
    const contentValue = parceFloat(content);
    const boarderValue = parceFloat(boarder);
    const paddingValue = parceFloat(padding);
    return contentValue + paddingValue * 2 + boarderValue * 2;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
