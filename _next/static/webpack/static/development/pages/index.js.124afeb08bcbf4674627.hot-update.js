webpackHotUpdate("static/development/pages/index.js",{

/***/ "./content/output/projects sync recursive ^\\.\\/.*\\.json$":
/*!*****************************************************!*\
  !*** ./content/output/projects sync ^\.\/.*\.json$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar-and-robotics.json": "./content/output/projects/ar-and-robotics.json",
	"./atelier.json": "./content/output/projects/atelier.json",
	"./augmented-math.json": "./content/output/projects/augmented-math.json",
	"./augmented-physics.json": "./content/output/projects/augmented-physics.json",
	"./chameleon-control.json": "./content/output/projects/chameleon-control.json",
	"./collagevis.json": "./content/output/projects/collagevis.json",
	"./dynablock.json": "./content/output/projects/dynablock.json",
	"./electro-voxel.json": "./content/output/projects/electro-voxel.json",
	"./expandable-robots.json": "./content/output/projects/expandable-robots.json",
	"./flux-marker.json": "./content/output/projects/flux-marker.json",
	"./hapticbots.json": "./content/output/projects/hapticbots.json",
	"./holobots.json": "./content/output/projects/holobots.json",
	"./inflatablebots.json": "./content/output/projects/inflatablebots.json",
	"./lift-tiles.json": "./content/output/projects/lift-tiles.json",
	"./mixed-initiative.json": "./content/output/projects/mixed-initiative.json",
	"./mixels.json": "./content/output/projects/mixels.json",
	"./morphio.json": "./content/output/projects/morphio.json",
	"./pep.json": "./content/output/projects/pep.json",
	"./phd-thesis.json": "./content/output/projects/phd-thesis.json",
	"./physica.json": "./content/output/projects/physica.json",
	"./pufferbot.json": "./content/output/projects/pufferbot.json",
	"./reactile.json": "./content/output/projects/reactile.json",
	"./realitycanvas.json": "./content/output/projects/realitycanvas.json",
	"./realitysketch.json": "./content/output/projects/realitysketch.json",
	"./realitytalk.json": "./content/output/projects/realitytalk.json",
	"./refazer.json": "./content/output/projects/refazer.json",
	"./robovisar.json": "./content/output/projects/robovisar.json",
	"./roomshift.json": "./content/output/projects/roomshift.json",
	"./selective-self-assembly.json": "./content/output/projects/selective-self-assembly.json",
	"./shape-it.json": "./content/output/projects/shape-it.json",
	"./shapebots.json": "./content/output/projects/shapebots.json",
	"./sketched-reality.json": "./content/output/projects/sketched-reality.json",
	"./tabby.json": "./content/output/projects/tabby.json",
	"./teachable-reality.json": "./content/output/projects/teachable-reality.json",
	"./thermopixels.json": "./content/output/projects/thermopixels.json",
	"./trace-diff.json": "./content/output/projects/trace-diff.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./content/output/projects sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./content/output/projects/augmented-physics.json":
/*!********************************************************!*\
  !*** ./content/output/projects/augmented-physics.json ***!
  \********************************************************/
/*! exports provided: id, name, description, title, authors, year, booktitle, publisher, doi, conference, pdf, arxiv, acm-dl, pageCount, bodyContent, bodyHtml, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"id":"augmented-physics","name":"Augmented Physics","description":"Creating Interactive and Embedded Physics Simulations from Static Textbook Diagrams","title":"Augmented Physics: Creating Interactive and Embedded Physics Simulations from Static Textbook Diagrams","authors":["Aditya Gunturu","Yi Wen","Nandi Zhang","Jarin Thundathil","Rubaiat Habib Kazi","Ryo Suzuki"],"year":2024,"booktitle":"In Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology (UIST '24)","publisher":"ACM, New York, NY, USA","doi":"https://doi.org/10.1145/3654777.3676392","conference":{"name":"UIST 2024","fullname":"The ACM Symposium on User Interface Software and Technology (UIST 2024)","url":"http://uist.acm.org/uist2024"},"pdf":"uist-2024-augmented-physics.pdf","arxiv":"https://arxiv.org/abs/2405.18614","acm-dl":"https://dl.acm.org/doi/10.1145/3586183.3606827","pageCount":16,"bodyContent":"# Abstract\n\nWe introduce Augmented Physics, a machine learning-integrated authoring tool designed for creating embedded interactive physics simulations from static textbook diagrams. Leveraging recent advancements in computer vision, such as Segment Anything and Multi-modal LLMs, our web-based system enables users to semi-automatically extract diagrams from physics textbooks and generate interactive simulations based on the extracted content. These interactive diagrams are seamlessly integrated into scanned textbook pages, facilitating interactive and personalized learning experiences across various physics concepts, such as optics, circuits, and kinematics. Drawing from an elicitation study with seven physics instructors, we explore four key augmentation strategies: 1) augmented experiments, 2) animated diagrams, 3) bi-directional binding, and 4) parameter visualization. We evaluate our system through technical evaluation, a usability study (N=12), and expert interviews (N=12). Study findings suggest that our system can facilitate more engaging and personalized learning experiences in physics education.","bodyHtml":"<h1>Abstract</h1>\n<p>We introduce Augmented Physics, a machine learning-integrated authoring tool designed for creating embedded interactive physics simulations from static textbook diagrams. Leveraging recent advancements in computer vision, such as Segment Anything and Multi-modal LLMs, our web-based system enables users to semi-automatically extract diagrams from physics textbooks and generate interactive simulations based on the extracted content. These interactive diagrams are seamlessly integrated into scanned textbook pages, facilitating interactive and personalized learning experiences across various physics concepts, such as optics, circuits, and kinematics. Drawing from an elicitation study with seven physics instructors, we explore four key augmentation strategies: 1) augmented experiments, 2) animated diagrams, 3) bi-directional binding, and 4) parameter visualization. We evaluate our system through technical evaluation, a usability study (N=12), and expert interviews (N=12). Study findings suggest that our system can facilitate more engaging and personalized learning experiences in physics education.</p>\n","dir":"content/output/projects","base":"augmented-physics.json","ext":".json","sourceBase":"augmented-physics.md","sourceExt":".md"};

/***/ }),

/***/ "./content/output/projects/shape-it.json":
/*!***********************************************!*\
  !*** ./content/output/projects/shape-it.json ***!
  \***********************************************/
/*! exports provided: id, name, description, title, authors, year, booktitle, publisher, doi, conference, pdf, arxiv, acm-dl, pageCount, bodyContent, bodyHtml, dir, base, ext, sourceBase, sourceExt, default */
/***/ (function(module) {

module.exports = {"id":"augmented-physics","name":"Augmented Physics","description":"Creating Interactive and Embedded Physics Simulations from Static Textbook Diagrams","title":"Augmented Physics: Creating Interactive and Embedded Physics Simulations from Static Textbook Diagrams","authors":["Aditya Gunturu","Yi Wen","Nandi Zhang","Jarin Thundathil","Rubaiat Habib Kazi","Ryo Suzuki"],"year":2024,"booktitle":"In Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology (UIST '24)","publisher":"ACM, New York, NY, USA","doi":"https://doi.org/10.1145/3654777.3676392","conference":{"name":"UIST 2024","fullname":"The ACM Symposium on User Interface Software and Technology (UIST 2024)","url":"http://uist.acm.org/uist2024"},"pdf":"uist-2024-augmented-physics.pdf","arxiv":"https://arxiv.org/abs/2405.18614","acm-dl":"https://dl.acm.org/doi/10.1145/3586183.3606827","pageCount":16,"bodyContent":"# Abstract\n\nWe introduce Augmented Physics, a machine learning-integrated authoring tool designed for creating embedded interactive physics simulations from static textbook diagrams. Leveraging recent advancements in computer vision, such as Segment Anything and Multi-modal LLMs, our web-based system enables users to semi-automatically extract diagrams from physics textbooks and generate interactive simulations based on the extracted content. These interactive diagrams are seamlessly integrated into scanned textbook pages, facilitating interactive and personalized learning experiences across various physics concepts, such as optics, circuits, and kinematics. Drawing from an elicitation study with seven physics instructors, we explore four key augmentation strategies: 1) augmented experiments, 2) animated diagrams, 3) bi-directional binding, and 4) parameter visualization. We evaluate our system through technical evaluation, a usability study (N=12), and expert interviews (N=12). Study findings suggest that our system can facilitate more engaging and personalized learning experiences in physics education.","bodyHtml":"<h1>Abstract</h1>\n<p>We introduce Augmented Physics, a machine learning-integrated authoring tool designed for creating embedded interactive physics simulations from static textbook diagrams. Leveraging recent advancements in computer vision, such as Segment Anything and Multi-modal LLMs, our web-based system enables users to semi-automatically extract diagrams from physics textbooks and generate interactive simulations based on the extracted content. These interactive diagrams are seamlessly integrated into scanned textbook pages, facilitating interactive and personalized learning experiences across various physics concepts, such as optics, circuits, and kinematics. Drawing from an elicitation study with seven physics instructors, we explore four key augmentation strategies: 1) augmented experiments, 2) animated diagrams, 3) bi-directional binding, and 4) parameter visualization. We evaluate our system through technical evaluation, a usability study (N=12), and expert interviews (N=12). Study findings suggest that our system can facilitate more engaging and personalized learning experiences in physics education.</p>\n","dir":"content/output/projects","base":"shape-it.json","ext":".json","sourceBase":"shape-it.md","sourceExt":".md"};

/***/ })

})
//# sourceMappingURL=index.js.124afeb08bcbf4674627.hot-update.js.map