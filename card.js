const template = document.createElement('template')
template.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
<style> 
.card {
    display : inline-block;
}
</style>
<body>
<div class="card" style="width: 18rem;" >
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text"></p>
    <a href="#" class="btn btn-danger" onClick = "delete_card(this);" id = "unknown" >Delete</a>
    </div>
</div>
</body>
`

class UserCard extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode : 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.shadowRoot.querySelector('h5').innerText = this.getAttribute('title')
        const types = ["mountains", "sea", "desserts"]
        let imgurl;
        let type = types[Math.floor(Math.random()*types.length)];
        const url =  "https://source.unsplash.com/300x300/?" + type;
        fetch(url)
        .then((response) => {
            console.log(response)
            imgurl = response.url;
            this.shadowRoot.querySelector('img').src = imgurl;
            this.shadowRoot.querySelector('.card-text').innerHTML = type;
            this.shadowRoot.querySelector('#unknown').id = + new Date();
        })
        

        // this.innerHTML = `John Doe`;

    }
}

// Connecting the card and the class method using the define method

window.customElements.define('user-card', UserCard)
