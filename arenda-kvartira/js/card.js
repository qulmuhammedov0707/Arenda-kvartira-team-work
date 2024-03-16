
fetch('http://localhost:8000/flatBlog')
    .then(res => res.json())
    .then(data => Data(data))

let dataSection = document.getElementById("cards")
let Fragment = document.createDocumentFragment()
let Data = (arr) => {
    arr.map(elem => {
        let Clone = template.content.cloneNode(true)
        Clone.getElementById('card__item--images').src = elem.cardImage
        Clone.getElementById('card__item--h2').textContent = elem.cardTitle
        Clone.getElementById('card__item--p').textContent = elem.cardDescription
        Clone.getElementById('card__item--strong').textContent = elem.cardPrice
        Clone.getElementById('card__item')
        Fragment.appendChild(Clone)
    })
    dataSection.appendChild(Fragment)
}




//let Title = document.getElementById("companent__h2")
//let Disc = document.getElementById("companent__p")
//let Price = document.getElementById("companent__mark")
