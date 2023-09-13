// lanzamiento de javalina 

let vidaSoldado1 = 100;

let vidaSoldado2 = 100;

while(vidaSoldado1>0 && vidaSoldado2>0){

    let disparoSoldado1 = parseInt(Math.random()*20)
    let disparoSoldado2 = parseInt(Math.random()*20)

console.log("El Soldado 1 le saca " + disparoSoldado1 + " de vida al Soldado2" )
console.log("El Soldado 2 le saca " + disparoSoldado2 + " de vida al Soldado1" )




if(disparoSoldado1>disparoSoldado2){
    vidaSoldado2 -= disparoSoldado1
    console.log("El Soldado 1 le saca " + disparoSoldado1 + " de vida al soldado 2")
    console.log("El soldado 2 queda con " + vidaSoldado2 + " de vida")
}else if(disparoSoldado2>disparoSoldado1){
    vidaSoldado1 -= disparoSoldado2
    console.log("El Soldado 2 le saca " + disparoSoldado1 + " de vida al soldado 1")
    console.log("El soldado 1 queda con " + vidaSoldado1 + " de vida")
}


}
