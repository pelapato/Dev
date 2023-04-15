var comfirmar = window.document.getElementById('verificar')
var nome = window.document.getElementById('text1')
var sobre = window.document.getElementById('text2')
var senha = window.document.getElementById('text3')
var com = window.document.getElementById('com')
var com1 = window.document.getElementById('com1')
var com2 = window.document.getElementById('com2')
var com4 = window.document.getElementById('com4')
var com5 = window.document.getElementById('com5')
var com6 = window.document.getElementById('com6')


function Açao(){  
var n = (nome.value)
var ne = com.innerHTML = `${n}`
var segunda = (sobre.value)
var so = com1.innerHTML = `${segunda}` 
var sen = (senha.value) 
var seng = com2.innerHTML = `${sen}`
  
if(n == 0){
  window.alert(`prenecha o nome.`)
}else if(n == 0 || segunda == 0 || sen == 0){
  window.alert(`preencha tudo`)    
}
}  






function Açao2(){  

}
 
