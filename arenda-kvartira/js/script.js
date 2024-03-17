let ism = document.getElementById(`ism`)
let raqam = document.getElementById(`raqam`)
let knopka = document.getElementById(`button`)


knopka.addEventListener(`click`  , (e) => 
{
    e.preventDefault()
    let body = {
        ism : ism.value,
        raqam : raqam.value
    }
    fetch(`http://localhost:8000/madal`, {
        method : `POST`,
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(body)
    })
    .then(res=> res.json())
    .then(data => data)
    window.location.reload();
}
)