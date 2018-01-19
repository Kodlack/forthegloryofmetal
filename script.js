function joueLeSon(idSon)
{
 var player=document.getElementById(idSon);
 player.play();
 
}

function pauseLeSon(idSon){
	var player=document.getElementById(idSon);
	player.pause()
}

function volumeLeSon(idSon, dB){
	var player=document.querySelector('#' + idSon);
	player.volume = dB;
}