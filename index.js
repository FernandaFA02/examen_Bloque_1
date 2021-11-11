fetch('./data.json')
.then((response)=> response.json())
.then((data)=> bootcampData(data))

let bootcampData = (data) => {
    for (const item of data.Bootcamp_integrantes) {
        console.log(item.nombre)
        console.log(item.apellido)
        console.log(item.edad)
        console.log(item.cumpleaños)
        let miembros = document.getElementById('BootcampMembers')
        let listaC = document.getElementById('lista')
        miembros.innerHTML += `<h2>${item.nombre} ${item.apellido}</h2>
        <ul><li>${item.cumpleaños}</li></ul>`
        
    }
}

