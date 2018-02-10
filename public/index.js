/*eslint no-console: "off"*/

var MAX_HEIGHT = 400;

const render = src => {
	const image = new Image();
	image.onload = () => {
		const canvas = document.getElementById("myCanvas");
		if (image.height > MAX_HEIGHT) {
			image.width *= MAX_HEIGHT / image.height;
			image.height = MAX_HEIGHT;
		}
		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		canvas.width = image.width;
		canvas.height = image.height;
		ctx.drawImage(image, 0, 0, image.width, image.height);
	};
	image.src = src;
};

const loadImage = src => {
	//	Prevent any non-image file type from being read.
	if (!src.type.match(/image.*/)) {
		console.log("The dropped file is not an image: ", src.type);
		return;
	}

	//	Create our FileReader and run the results through the render function.
	const reader = new FileReader();
	reader.onload = (e) => {
		render(e.target.result);
	};
	reader.readAsDataURL(src);
};

const target = document.getElementById("drop-target");
target.addEventListener("dragover", (e) => {
	e.preventDefault();
}, true);
target.addEventListener("drop", (e) => {
	e.preventDefault();
	loadImage(e.dataTransfer.files[0]);
}, true);
