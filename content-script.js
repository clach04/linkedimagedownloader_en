var list = [];
function searchImagesDisp(){
	let links = document.images;
	for(let elm of links){
		//if(elm.href.match(/(\.jpe|\.jpeg|\.jpg|\.gif|\.png|\.tif|\.webm|\.webp|\.bmp)$/i)){
			list.push(elm.src);
		//}
	}
}
function searchImagesLink(){
	let links = document.getElementsByTagName("a");
	for(let elm of links){
		if(elm.href.match(/(\.jpe|\.jpeg|\.jpg|\.gif|\.png|\.tif|\.webm|\.webp|\.bmp)$/i)){
			list.push(elm.href);
		}
	}
}
function onStart(){
	console.log("dl start");
}
function onError(){
	console.log("dl error");
}

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  switch(message.greeting){
	case "disp":
		searchImagesDisp();
	break;
	case "link":
		searchImagesLink();
	break;
  }
  let list_clone = [];
  for(let url of list){
	  list_clone.push(url);
  }
  list = [];
  return Promise.resolve({list:list_clone});
}