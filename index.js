const getColours = document.getElementById("get-colour")
paletteArr=[]

getColours.addEventListener("click",function(){
    let chosenColour = document.getElementById("colour-selector").value
    let chosenScheme = document.getElementById("colour-scheme-select").value
    

    fetchColours(chosenColour.slice(1),chosenScheme)
})


function fetchColours(color,scheme){

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}`)
        .then(res =>res.json())
        .then(data =>{
            paletteArr = data.colors
            colourDivs()
        })
    
}

function colourDivs(){
    document.getElementById("first").style.backgroundColor = paletteArr[0].hex.value
    document.getElementById("first-code").innerText = paletteArr[0].hex.value
    
    document.getElementById("second").style.backgroundColor = paletteArr[1].hex.value
    document.getElementById("second-code").innerText = paletteArr[1].hex.value

    document.getElementById("third").style.backgroundColor = paletteArr[2].hex.value
    document.getElementById("third-code").innerText = paletteArr[2].hex.value

    document.getElementById("fourth").style.backgroundColor = paletteArr[3].hex.value
    document.getElementById("fourth-code").innerText = paletteArr[3].hex.value

    document.getElementById("fifth").style.backgroundColor = paletteArr[4].hex.value
    document.getElementById("fifth-code").innerText = paletteArr[4].hex.value
}