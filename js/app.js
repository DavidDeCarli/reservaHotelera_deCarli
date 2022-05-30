document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON() {
    fetch('huespedes.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = '';
            data.forEach(function(huesped) {
                html += `<li>${huesped.nombre} ${huesped.apellido}</li>`;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error){
            console.log(error);
        });
}