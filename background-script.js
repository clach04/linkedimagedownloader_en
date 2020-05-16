// -*- coding: utf-8 -*-
// vim:ts=4:sw=4:softtabstop=4:smarttab:expandtab

function onCreated(){
	console.log("created");
}

// dumb hard coded strings, does not make use of l10n resources
const str_downloadDisp_jp = "表示画像一括ダウンロード";
const str_downloadLink_jp = "リンク先画像一括ダウンロード";
var str_downloadDisp = str_downloadDisp_jp;
var str_downloadLink = str_downloadLink_jp;

browser.menus.create({
  id: "downloadDisp",
  title: str_downloadDisp,
  contexts: ["all"]
}, onCreated);
browser.menus.create({
  id: "downloadLink",
  title: str_downloadLink,
  contexts: ["all"]
}, onCreated);
browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "downloadDisp":
		downloadDisp();
    break;
    case "downloadLink":
		downloadLink();
    break;
  }
});
function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed: ${error}`);
}
function onStart(){
	console.log("dl start");
}
function onError(){
	console.log("error");
}
function onDownloadError(){
	console.log("dl error");
}
function onSendError(){
	console.log("send error.");
}
function sendMessageToTabsDisp(tabs) {
  for (let tab of tabs) {
	  console.log(tab.id);
    browser.tabs.sendMessage(
      tab.id,
      {greeting: "disp"}
    ).then(response => {
      downloadExec(response);
    }).catch(onSendError);
  }
}
function sendMessageToTabsLink(tabs) {
  for (let tab of tabs) {
	  console.log("link");
    browser.tabs.sendMessage(
      tab.id,
      {greeting: "link"}
    ).then(response => {
      downloadExec(response);
    }).catch(onSendError);
  }
}
function downloadDisp(){
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabsDisp).catch(onError);
}
function downloadLink(){
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabsLink).catch(onError);
}
function downloadExec(response){
	for(let url of response.list){
		let filename_index = url.lastIndexOf('/')
		let downloadUrl = url;
		let filename = url.substring(filename_index + 1);
		let downloading = browser.downloads.download({
		  url : downloadUrl,
		  //filename : filename,
		  //saveAs: true,
		  conflictAction : 'uniquify'
		})
		downloading.then(onStart, onDownloadError);
	}
}