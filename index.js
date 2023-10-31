img=document.getElementsByTagName('img')
	div=document.getElementsByTagName('div')
	scoresh=document.getElementById('score')
	var scr=new Audio("asst/score.mp3");
	var gam=new Audio("asst/game.mp3");
	var gamovr=new Audio("asst/gameover.mp3");
	alert("bird up down from keyborad up and down arrow");
	
	var over=true;
	var left=45;
	var left1=75;
	var left2=105;
	var left3=135;
	div[0].style="left:"+left+"%;"
	div[1].style="left:"+left+"%;"
	div[2].style="left:"+left1+"%;"
	div[3].style="left:"+left1+"%;"
	div[4].style="left:"+left2+"%;"
	div[5].style="left:"+left2+"%;"
	div[6].style="left:"+left3+"%;"
	div[7].style="left:"+left3+"%;"
	img[0].style="top: 30%;"
	var hight=30;
	var gameover;
	window.addEventListener("keydown", (event) => {
		if(over)
		{
	   if(event.key=='ArrowUp')
		{
			hight-=5;
			if(hight<-1) gameover='up'; 
			img[0].style="top:+"+hight+"%;";
		}
		if(event.key=='ArrowDown')
		{
			hight+=5;
			if(hight>=70) gameover='down'; 
			img[0].style="top:+"+hight+"%;";
		}
		gam.play();
		}	
	});
var ar=[220,300,120,400,20]
var br=[200,120,300,20,400]
var randomHeight = Math.floor(Math.random() * 5)
var randomHeight1 = Math.floor(Math.random() *5)
var randomHeight2 = Math.floor(Math.random() *5)
var randomHeight3 = Math.floor(Math.random() * 5)
var score=1;

time = setInterval(function() {
	changeleftdiv(0,left--,randomHeight)
	changeleftdiv(2,left1--,randomHeight1)
	changeleftdiv(4,left2--,randomHeight2)
	changeleftdiv(6,left3--,randomHeight3)
  	if(left<=0){ left=120; change("randomHeight");}
  	if(left1<=0){ left1=120; change("randomHeight1");}
  	if(left2<=0){ left2=120; change("randomHeight2");}
  	if(left3<=0){ left3=120; change("randomHeight3");}
  	checkscore(ar[randomHeight],hight,left)
  	checkscore(ar[randomHeight1],hight,left1)
  	checkscore(ar[randomHeight2],hight,left2)

  	checkscore(ar[randomHeight3],hight,left3)
  		console.log(gameover);

  	if(gameover=='up')
  	{
  		clearInterval(time);  		
		over=false;
		gam.pause();
		scr.pause();
		gamovr.play();
  		alert("touch on up floor\ngame is over !!");
  	}
  	else if(gameover=='down')
  	{
  	//console.log(gameover);
  		clearInterval(time);  		
  		over=false;
		gam.pause();
		scr.pause();
		gamovr.play();
  		alert("touch on down floor \ngame is over !!");	
  	}
},130);

function checkscore(divhight,imghight,left){
	if(left>=10)
	{
		
		return 0;
	}
	var sc=0;
	if(divhight==220 && imghight==35 && left<=10){  		sc=1;  		}
	else if(divhight==300 && imghight==50 && left<=10){		sc=1;      	}
	else if(divhight==120 && imghight==20 && left<=10){		sc=1;      	}
	else if(divhight==400 && imghight==65 && left<=10){		sc=1;      	}
	else if(divhight==20 && imghight==5 && left<=10){  		sc=1;      	}
	else{  		clearInterval(time);
	      		over=false;
		gam.pause();
		scr.pause();
		gamovr.play();
	      		alert("touch on pipe\ngame is over !!");
	    }
	    if(sc==1 && left==5)
	    {
	    	scr.play();
	      	scoresh.innerText="Score : "+score++;
	    }
}
function changeleftdiv(ind,left,randomind){
	      	div[ind].style="left: "+left+"%;"
	      	div[ind+1].style="left: "+left+"%;"
			div[ind].style.height = ar[randomind] + 'px';
	      	div[ind+1].style.height = br[randomind] + 'px';
}
function change(changehight){
	switch(changehight)
	{
	case 'randomHeight':
		randomHeight = Math.floor(Math.random() * 5);
		break;
	case 'randomHeight1':
		randomHeight1 = Math.floor(Math.random() * 5);
		break;
	case 'randomHeight2':
		randomHeight2 = Math.floor(Math.random() * 5);
		break;
	case 'randomHeight3':
		randomHeight3 = Math.floor(Math.random() * 5);
		break;
	}
}