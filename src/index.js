import { test } from './initialData'
import { renderNode } from './node'
import './style.css'
let lastCapacity = test.capacity
const main = document.getElementById("data_hashMap")
const saveKeyValue = document.getElementById('saveKeyValue')
const removeKey = document.getElementById('removeKeyValue')
const removeAll = document.getElementById('removeallData')

saveKeyValue.addEventListener('click', () => {
    const key = document.getElementById('addkey')
    const value = document.getElementById('addvalue')
    test.set(key.value, value.value)
    if (test.capacity > lastCapacity) lastCapacity = test.capacity
    upDateDisplayBucket(lastCapacity)
    key.value = ''
    value.value = ''
})

removeKey.addEventListener('click', () => {
    const key = document.getElementById('removekey')
    test.remove(key.value);
    upDateDisplayBucket(lastCapacity)
    key.value = ''
})

removeAll.addEventListener('click', () => {
    const confirmDelete = confirm("⚠️ Are you sure you want to delete ALL data from the HashMap?");

    if (confirmDelete) {
        test.clear();
        upDateDisplayBucket(lastCapacity);
        alert("All data has been deleted.");
    } else {
        alert("Operation canceled.");
    }
});

const displayBucket = (index) => {
    const bucketDiv = document.getElementById(`node${index}`)
    if (test.buckets[index].head === null) {
        bucketDiv.innerText = "null"
    } else {
        bucketDiv.innerText = ''
        let current = test.buckets[index].head
        while (current) {
            bucketDiv.innerText += `  [${current.key} => ${current.value}] __`
            current = current.next
        }
    }
    return true
}

function upDateDisplayBucket(capacity = lastCapacity) {
    main.innerHTML = ''
    for (let i = 0; i < capacity; i++) {
    main.appendChild(renderNode(i))
    displayBucket(i)
    }
}
upDateDisplayBucket(test.capacity)

