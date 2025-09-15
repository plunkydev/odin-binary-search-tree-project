export class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

export const renderNode = (index) => {
    const div = document.createElement('div')
    div.classList = "bucket"
    div.innerText = `[${index}]`
    div.innerHTML = `
            <div id="bucket${index}">${div.innerText}</div>
            <div id="node${index}"></div>`;
    return div
}

