// lanzamiento de javalina 

let vidaSoldado1 = 100;

let vidaSoldado2 = 100;

while(vidaSoldado1>0 && vidaSoldado2>0){

    let disparoSoldado1 = parseInt(Math.random()*20)
    let disparoSoldado2 = parseInt(Math.random()*20)

 console.log("Soldado A dispara un: "+ disparoSoldado1)
console.log("Soldado B dispara un: "+ disparoSoldado2)




if(disparoSoldado1>disparoSoldado2){
    vidaSoldado2 -= disparoSoldado1
    console.log("El Soldado A le saca " + disparoSoldado1 + " de vida al soldado B")
    console.log("El soldado B queda con " + vidaSoldado2 + " de vida")
}else if(disparoSoldado2>disparoSoldado1){
    vidaSoldado1 -= disparoSoldado2
    console.log("El Soldado B le saca " + disparoSoldado2 + " de vida al soldado A")
    console.log("El soldado A queda con " + vidaSoldado1 + " de vida")
}else if(disparoSoldado1=disparoSoldado2){
    console.log("No se sacaron vida")
}

console.log("--------------------------------------")
}

if(vidaSoldado1>0){
    console.log("Ganador SOLDADO A")
}else{
    console.log("Ganador SOLDADO B")
}