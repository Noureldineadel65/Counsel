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
	element: document.getElementById("risk"),
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
	offset: 200,
});
function toggleScrolling(bool) {
	document.querySelector("html").style.overflowY = bool ? "hidden" : "auto";
	document.querySelector("body").style.overflowY = bool ? "hidden" : "auto";
}
function toggleNav() {
	document.querySelector(".hamburger").classList.toggle("is-active");
	document.querySelector(".nav-page").classList.toggle("open");
	toggleScrolling(
		document.querySelector(".hamburger").classList.contains("is-active")
	);
}
document.querySelector(".hamburger").addEventListener("click", function () {
	toggleNav();
});
document
	.querySelectorAll(".nav-page a")
	.forEach((e) => e.addEventListener("click", toggleNav));
