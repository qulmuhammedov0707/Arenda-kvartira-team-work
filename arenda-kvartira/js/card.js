
fetch('http://localhost:8000/flatBlog')
    .then(res => res.json())
    .then(data => data(data))

let dataSection = document.getElementById("cards")
let Fragment = document.createDocumentFragment()
let data = (arr) => {
    arr.map(elem => {
        let Clone = template.content.cloneNode(true)

        Clone.getElementById('images').src = elem.flatImage
        Clone.getElementById('card__item--h2').textContent = elem.flatTitle
        Clone.getElementById('card__item--p').textContent = elem.flatDescription
        Clone.getElementById('card__item--strong').textContent = elem.flatPrice
        Clone.getElementById('card__item--span').textContent = elem.flatLocation
        Clone.getElementById('card__item')
        Fragment.appendChild(Clone)
    })
    dataSection.appendChild(Fragment)
}

//let Title = document.getElementById("companent__h2")
//let Disc = document.getElementById("companent__p")
//let Price = document.getElementById("companent__mark")
