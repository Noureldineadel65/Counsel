gsap.from(".header-items span", {
	duration: 1,
	x: "-100%",
	stagger: 0.3,
	opacity: 0,
});
gsap.from(".square button", {
	duration: 1,
	x: "-100%",
	opacity: 0,
});
gsap.from("nav", { duration: 1, y: "-100%", opacity: 0 });
AOS.init({
	duration: 1000,
});
new Waypoint({
	element: document.getElementById("square"),
	handler: function (direction) {
		document.querySelector("header").classList.toggle("light");
		document.querySelector(".normal-logo").src =
			document
				.querySelector(".normal-logo")
				.src.split("/")
				.splice(-1)[0] === "Logo.png"
				? "./dist/images/Logo-white.png"
				: "./dist/images/Logo.png";
	},
});
document.querySelector(".hamburger").addEventListener("click", function () {
	this.classList.toggle("is-active");
});
