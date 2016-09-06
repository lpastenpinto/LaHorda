#pragma strict
//private var text : String;
//private var tiempo_duracion_etapa : float = 10;
public var time : float = 180;
private var time_limit:float=10;
private var mod_division; 
private var minutos:int;
private var segundos:int;

function Start () {
	InvokeRepeating("Timer",1.0,1.0); //repetir cada 1 segundo "time"
	guiText.font.material.color = Color.white;
	
}



function Update(){
	
	//buscar existencia de objeto que gana el juego
	//if(GameObject.Find("Caja_Objetivo")){
									
		mod_division=time%60;
		
		if(!mod_division.Equals(0)){
			minutos=time/60;
			segundos=time-(60*minutos);
			if(segundos<10){
				guiText.text="0"+minutos+":0"+segundos.ToString();
			}else{						
				guiText.text="0"+minutos+":"+segundos.ToString();	
			}
		}
		else{
			if(time<10){	
				guiText.text="00:0"+time.ToString();	
			}else{	
				guiText.text="00:"+time.ToString();	
			}
		}
	
		//Tiempo de duracion reloj
		if(time<time_limit){
			guiText.font.material.color = Color.red;
		}
		if(time==1){
			Game_Over();
		}
	//}
}


function Game_Over(){
	Time.timeScale = .1;
	yield WaitForSeconds(1.0);			
	Time.timeScale = 1;
	guiText.font.material.color = Color.white;
	Application.LoadLevel("GameOver");
	guiText.font.material.color = Color.white;

}


function Timer(){
	//time -=1;
	time=time-1;
}


