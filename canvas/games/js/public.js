function loadImg(e, callback, images) {
	var loadedImages = 0;
	var numImages = 0;
	for (var src in e) {
		numImages++;
	}
	for (var src in e) {
		images[src] = new Image();
		images[src].onload = function() {
			if (++loadedImages >= numImages) {
				callback(images);
			}
		};
		images[src].src = e[src];
	}
}