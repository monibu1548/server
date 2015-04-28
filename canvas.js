var canvas = document.getElementById("cv");
var context = canvas.getContext("2d");
var x=10;
var y=550;
var height=40;
var width=50;
var move_value=3;
var left =0;
var right =0;
var first=0;
var j_x=[];
var j_y=[];
var shot_x=[];
var shot_y=[];
var j_t=4000.0;
var score=0; 
var div = document.getElementById("textview");
var sh=0;
var game=0;

context.fillRect(x,y,width,height);

function run(){
	setInterval("move()",30);
	setInterval("shot_move()",30);
	setInterval("hard_mode()",10000);
	setInterval("jang_move()",30);
	div.textContent = "Score :"+score;
}

function move(){
	context.clearRect(x,y,width,height);
	if(left==1&&x>0)x-=move_value;
	if(right==1&&x<(400-width))	x+=move_value;
	context.fillRect(x,y,width,height);
}

function hard_mode(){
	setInterval("jang()",j_t);
	if(j_t>500)j_t*=0.9;
}

function jang(){
	j_x.push(Math.floor(Math.random()*350)+1);
	j_y.push(0);
}

function jang_move(){
	for (var i = 0; i < j_y.length; i++) {
		context.clearRect(j_x[i],j_y[i],width,height);
		j_y[i]+=move_value;
		context.fillRect(j_x[i],j_y[i],width,height);
		for(var j=0;j<shot_x.length;j++){
			if (shot_x[j]>=j_x[i]&&shot_x[j]<=(j_x[i]+width)&&shot_y[j]>=j_y[i]&&shot_y[j]<=(j_y[i]+height)){
				context.clearRect(j_x[i],j_y[i],width,height);	
				context.clearRect(shot_x[j],shot_y[j],2,5);
				j_y.splice(i,1);
				j_x.splice(i,1);
				shot_y.splice(j,1);
				shot_x.splice(j,1);
				score+=100;
				div.textContent = "Score :"+score;
				var text = div.textContent;
				break;
			}
		};
		if(j_y[i]>600){
			if(game==0){
				game++;
				var person = prompt("Game is finished!\n Your score is : "+ score+"\nPlease enter your name");
				var ob = {
					name : person,
					score : score
				}
				if (person != null) {
					// $.ajax({
					// 	url:"http://localhost:3000/",
					// 	dataType : "json",
					// 	contentType : "application/json;charset=utf-8".
					// 	type:"POST",
					// 	data:JSON.stringify(ob)
					// });
					$.ajax({
					      url:"http://localhost:3000/",
					      type:"POST",
					      ContentType: "application/json; charset=utf-8",
					      data:ob,
					      dataType:"json"
					    });  
					// $.post("http://localhost:3000/",	
					// ob,
					// function(data, status){
					// });
				}
			}
			j_t=100;
			div.textContent = "game is finished\n You can't move";
		}
	};
}

function shot_move(){
	for (var i = 0; i < shot_x.length; i++) {
		context.clearRect(shot_x[i],shot_y[i],2,5);
		shot_y[i]-=move_value*2;
		context.fillRect(shot_x[i],shot_y[i],2,5);
		if(shot_y[i]<0){
			shot_y.splice(i,1);
			shot_x.splice(i,1);
		}
	};
}

function shot(){
	shot_x.push(x+width/2);
	shot_y.push(510);
}


function on_keyup(){
	if(first==0)run();
	var input = event.keyCode;
	if(input== 37)left=0;
	if(input== 39)right=0;
}

function on_keydown(){
	if(first==0){
		run();
		first=1;
	}
	if(game==0){
		var input = event.keyCode;
		if(input==37)left=1;
		else if(input==39)right=1;
		else if(input==65||input==97)shot();
	}
}
