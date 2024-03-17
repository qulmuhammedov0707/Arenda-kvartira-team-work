fetch(`http://localhost:8000/madal`)
.then( res => res.json())
.then(data => Madal(data))

let father = document.getElementById(`callback`)
let FragmentBlog = document.createDocumentFragment();
let Madal = (arr) => {
    arr?.map(elem => {
        let Clone = templateCallback.content.cloneNode(true)
        Clone.getElementById(`callbackP`).textContent = elem.ism
        Clone.getElementById(`callbackSpan`).textContent = elem.raqam
        FragmentBlog.appendChild(Clone)
        father.appendChild(FragmentBlog)
    })
}
Madal()