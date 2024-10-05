
function getName(name){
    const getparam = new URLSearchParams(window.location.search)
    const poki = getparam.get('id')
    return poki

}

function getpoki(poki){

fetch(`https://pokeapi.co/api/v2/pokemon/${poki}`)
.then(response => response.json())
.then(data =>
{

    var myimg= document.getElementById('img')
    myimg.setAttribute('src', data.sprites.front_default)

    var myh1= document.getElementById('pokemon-name')
    myh1.innerHTML=data.name


    var mydiv= document.getElementById('pokemon-info')
    mydiv.innerHTML= data.abilities
    .map((ability) => ability.ability.name )
    .join(',')

}
)

}

document.addEventListener('DOMContentLoaded' , (event)=>{
 var pokiname= getName('id')
 getpoki(pokiname)
})