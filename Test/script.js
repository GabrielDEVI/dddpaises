function verificar() {
    let inp = window.document.getElementById('dddnum')
    let res = window.document.getElementById('res')
    let img = document.createElement('img')
    let h2 = document.getElementById('h2')
    let p = document.getElementById('para')
    img.setAttribute('src', 'foto')
    res.innerHTML = ''
    h2.innerHTML = ''
    p.innerHTML = ''
    if (inp.value.length == 0) {
        window.alert('[ERRO] Está faltando dados!')
    } else if (inp.value == 55) {
        img.setAttribute('src', 'brasil.jpg')
        h2.innerHTML += '⬇️ Esse é o Brazil! ⬇️'
        
    } else if(inp.value == +1) {
        img.setAttribute('src','EUA.jpg' )
        h2.innerHTML += '⬇️ Esse é os EUA!⬇️'
        
    } else if (inp.value == +81) {
        img.setAttribute('src', 'japao.jpg')
        h2.innerHTML += '⬇️ Esse é o Japão! ⬇️'
        
    } else if (inp.value == +7) {
        img.setAttribute('src', 'russia.png')
        h2.innerHTML += '⬇️ Essa é a Russia! ⬇️'
        
    } else if (inp.value == +380) {
        img.setAttribute('src', 'ucra.jpg')
        h2.innerHTML += '⬇️ Essa é a Ucrãnia! ⬇️'
       
    } else if (inp.value == +86) {
        img.setAttribute('src', 'china.png')
        h2.innerHTML += '⬇️ Essa é a China! ⬇️'
        
    } else if (inp.value == +49) {
        img.setAttribute('src', 'ale.jpg')
        h2.innerHTML += '⬇️ Essa é a Alemãnha! ⬇️'
       
    } else if (inp.value == +82) {
        img.setAttribute('src', 'coreSUL.jpg')
        h2.innerHTML += '⬇️ Essa é a Coreia do sul! ⬇️'
       
    } else if (inp.value == +850) {
        img.setAttribute('src', 'coreiaNORTE.jpg')
        h2.innerHTML += '⬇️ Essa é a Coreia do norte! ⬇️'
        
    } else if (inp.value == +53) {
        img.setAttribute('src', 'cuba11.jfif')
        h2.innerHTML += '⬇️ Essa é a Cuba! ⬇️'
        
    } else if (inp.value == +351) {
        img.setAttribute('src', 'portugal.jfif')
        h2.innerHTML += '⬇️ Esse é Portugal! ⬇️'
      
    } else if (inp.value == +598) {
        img.setAttribute('src', 'uru.jpg')
        h2.innerHTML += '⬇️ Esse é o Uruguai! ⬇️'
        
    } else if (inp.value ==  229) {
        img.setAttribute('src', 'africa.jpg')
        h2.innerHTML += '⬇️ Essa é a Africa! ⬇️'
       
    } else if (inp.value == +58) {
        img.setAttribute('src', 'venezuela.png')
        h2.innerHTML += '⬇️ Essa é a Venezuela! ⬇️'
       
    } else if (inp.value == +57) {
        img.setAttribute('src', 'colombia.png')
        h2.innerHTML += '⬇️ Essa é a Colombia! ⬇️'
       
    } else if (inp.value == +593) {
        img.setAttribute('src', 'equador.png')
        h2.innerHTML += '⬇️ Esse é o Equador ⬇️'
       
    } else if (inp.value == +34) {
        img.setAttribute('src', 'espanha.png')
        h2.innerHTML += '⬇️ Essa é a Espanha ⬇️'
       
    } else if (inp.value == +54) {
        img.setAttribute('src', 'argentina.png')
        h2.innerHTML += '⬇️ Essa é a Argentina! ⬇️'
       
    } else if (inp.value == +51) {
        img.setAttribute('src', 'peru.jpg')
        h2.innerHTML += '⬇️ Esse é o Peru ⬇️'
        
    }

    

    res.appendChild(img)
    
    

}



