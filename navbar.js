const NavbarTemplate = document.createElement("template");
NavbarTemplate.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <body>
    
    </body>

`;

class AppNavbar extends HTMLElement {
	constructor() {
		super();
		// element created
		this.attachShadow({ mode: "open" });
		this.shadowRoot.appendChild(NavbarTemplate.content.cloneNode(true));
	}

	connectedCallback() {
		// browser calls this method when the element is added to the document
		// (can be called many times if an element is repeatedly added/removed)
	}

	disconnectedCallback() {
		// browser calls this method when the element is removed from the document
		// (can be called many times if an element is repeatedly added/removed)
	}

	static get observedAttributes() {
		return ["language"];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		// called when one of attributes listed above is modified
		
	}

	adoptedCallback() {
		// called when the element is moved to a new document
		// (happens in document.adoptNode, very rarely used)
	}

	// // there can be other element methods and properties
	// async fetchAboutData(language = "en") {
	// 	const response = await fetch(`/data/about/${language}.about.json`);
	// 	const data = await response.json();
	// 	this.shadowRoot.querySelector(".about-name").setAttribute("title", data["name"]);
	// 	this.shadowRoot.querySelector(".about-name").innerHTML = data["name"];
	// }
}

customElements.define("app-navbar", AppNavbar);

{/* <script>
    const url =  "https://source.unsplash.com/random/300x300";
    fetch(url)
  .then((response) => {
    console.log(response.url);
  })


</script> */}