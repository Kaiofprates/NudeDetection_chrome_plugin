
async function loadNude() {

var nude  = document.createElement('script');
nude.src =  await chrome.extension.getURL("./nude.js");
await document.head.appendChild(nude);

var scan = document.createElement('script');
scan.src = await chrome.extension.getURL("./scan.js");
await document.head.appendChild(scan);

}

loadNude();
