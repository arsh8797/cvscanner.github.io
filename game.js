console.log('game')
let Game=document.getElementById('c1')
Game.addEventListener('click',play)
function play(e){
    e.preventDefault()
    let bigcontainer=document.getElementById('bigc1')
    bigcontainer.innerHTML=`<div id="c1" class="container"
    style="width: 22px; height: 22px; background-color: red; border-radius: 12px;margin-top: 50px;">

</div>`
window.location.reload()

}