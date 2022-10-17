    document.addEventListener("keypress", function(e) {
        if(e.key === 'Enter')
        var btn = document.querySelector("#ok");
        btn.click();

    });
    function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
        if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    }   else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    
    }   if(fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10 ){
                //CRIANÇA
                img.setAttribute('src','foto-bebe-m.png')
                } else if (idade < 21){
                // JOVEM  
                img.setAttribute('src','foto-jovem-m.png')   
                } else if (idade < 50 ){
                // ADULTO
                img.setAttribute('src','foto-adulto-m.png')
                } else {
                // IDOSO
                img.setAttribute('src','foto-idoso-m.png')
                }
             
    }   else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10 ){
                //CRIANÇA
                img.setAttribute('src','foto-bebe-f.png')
                } else if (idade < 21){
                // JOVEM 
                img.setAttribute('src','foto-jovem-f.png')    
                } else if (idade < 50 ){
                // ADULTO
                img.setAttribute('src','foto-adulto-f.png')
                } else {
                // IDOSO
                img.setAttribute('src','foto-idoso-f.png')
                }
    }
    res.innerHTML = `detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    //res.innerHTML = `Idade calculada : ${idade}`
    
    }

