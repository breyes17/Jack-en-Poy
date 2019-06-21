let userPick = document.querySelectorAll('.choice'),
    pScore = document.getElementById('player'),
    cScore = document.getElementById('computer'),
    status = document.getElementById('status'),
    oPlayer = document.getElementById('outputPlayer'),
    oComp = document.getElementById('outputComp');
let scores = {player : 0, computer : 0};
// console.log(userPick);

function play(e){
    //console.log(e.target.id, computerPick());
    let playerPick = e.target.id,
        compPick = computerPick(),
        cls = '"fas", "fa-hand-';
    console.log('Player ',playerPick,' : Computer ',compPick);
    status.innerHTML = result(playerPick,compPick);
    oPlayer.className = '';

    let pclass = cls+playerPick
    console.log(pclass);
    oPlayer.classList.add(pclass);
}

userPick.forEach(pick => pick.addEventListener('click',play));

function computerPick(){
    let ran = Math.random();
    let pick = '';
    if(ran < 0.34){
        pick = 'rock';
    } else if(ran <= 0.67){
        pick = 'paper';
    } else{
        pick = 'scissors';
    }
    return pick;
}

function result(p,c){
    let result = game(p,c),
        txt = '';
    if(result == 1){
        txt = 'You Loss';
        cScore.innerHTML = scores.computer++;
    } else if(result == 2){
        txt = 'You Win';
        pScore.innerHTML = scores.player++
    } else {
        txt = 'Draw'
    }
    return txt;
}

function game(p,c){
    let str = 0;
    if(p === c){
        str = 3
    } else {
        if(p === 'rock'){
            if(c === 'paper'){
                str = 1
            } else {
                str = 2
            }
        } else if(p === 'paper'){
            if(c === 'scissors'){
                str = 1
            } else {
                str = 2
            }
        } else {
            if(c === 'rock'){
                str = 1
            } else {
                str = 2
            }
        }
    }
    return str;
}