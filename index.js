fetch('./data.json')
.then((response)=> response.json())
.then((data)=> bootcampData(data))
.catch((error) => console.log(error))

let bootcampData = (data) => {
    for (const item of data.Bootcamp_integrantes) {
        console.log(item.nombre)
        console.log(item.apellido)
        console.log(item.edad)
        console.log(item.cumpleaños)
    }
    pintar(data.Bootcamp_integrantes)
}

let pintar = (datos) => {
    let miembros = document.getElementById('BootcampMembers')
    for(const item of datos){
        miembros.innerHTML += `<h2>${item.nombre} ${item.apellido}</h2>
        <ul><li>${item.cumpleaños}</li></ul>`
    }
}