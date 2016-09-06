
#pragma strict  
var  auto_alarma:GameObject;
var Caja_Objetivo:Transform;
var verificador_alarma:boolean;
var verificador_caja_objetivo:boolean;
var zombies:GameObject[];
var zombie_Script;
var contador:GameObject ; 
var Meta:Transform;
var Luz_Meta:GameObject; 
var cantidad_cajas:float;

function Start(){

	cantidad_cajas=1;
	//Caja_Objetivo=GameObject.Find("Caja_Objetivo_1").transform; 
	auto_alarma=GameObject.Find("Auto_Alarma");
	verificador_alarma=false;
	verificador_caja_objetivo=false;
	zombies= GameObject.FindGameObjectsWithTag("Zombie");
	Meta=GameObject.Find("Luz_Meta").transform;	
	Luz_Meta=GameObject.Find("Luz_Meta");
	
	/*var targetDir = Caja_Objetivo.position - transform.position;
	var forward = transform.forward;
	var angle = Vector3.Angle(targetDir, forward);		*/
	//Debug.Log(angle);
	//GetComponent(Compass_JS).north =180;//-90-angle;

}


function OnControllerColliderHit (hit : ControllerColliderHit){ 
 	if(hit.gameObject.name=="Auto_Alarma"){
 		if(verificador_alarma==false){
 			auto_alarma.audio.Play();
        	auto_alarma.audio.loop=true;		
        	verificador_alarma=true;
        	
        	for (var zombie : GameObject in zombies)  { 
				zombie.GetComponent(Movimiento_Zombie).distancia_detecta_player = 1000;
			}
 
 		}
 	}
 	else if((hit.gameObject.name=="Caja_Objetivo_1")||(hit.gameObject.name=="Caja_Objetivo_2")){ 	 
 		
 		cantidad_cajas=cantidad_cajas+1;
 		Destroy(hit.gameObject);
 		contador.GetComponent(Cronometro).time=contador.GetComponent(Cronometro).time+30;
 		if(cantidad_cajas>2){
			verificador_caja_objetivo=true; 
			//GetComponent(Compass_JS).north = 1000;
			Luz_Meta.AddComponent(Aumentar_Intensidad_Luz); 
		}/*else{				
		
			Caja_Objetivo=GameObject.Find("Caja_Objetivo_"+cantidad_cajas+"").transform;			
			var targetDir = Caja_Objetivo.position - transform.position;
			var forward = transform.forward;
			var angle = Vector3.Angle(targetDir, forward);
			//Debug.Log(angle);
			if(Application.loadedLevelName=="Escena_2"){
				GetComponent(Compass_JS).north = -90-angle;//90+angle; FUNCIONA
			}
			else{
				GetComponent(Compass_JS).north = -angle;//-angle+90;
			}					
		}*/		
 	}else if(hit.gameObject.name=="Meta"){
 		if(Application.loadedLevelName=="Escena_2"){
 		
 			Application.LoadLevel("Escena_1");
 			
 		}else{
 		
 			Application.LoadLevel("menu_principal"); 		 	
 		} 		 	
 	}
 
 
}


function  OnGUI()
    {
    	
        GUI.Box(new Rect(0, Screen.height- 30, 400, 30), "Busca las cajas y atento al sonido! Te faltan "+(1-(cantidad_cajas-2))+" cajas");
        	//valor 400 para agrandar en caso de cambiar letras
    	if(verificador_caja_objetivo.Equals(true))
    	{						
        	GUI.Box(new Rect(0, Screen.height- 30, 400, 30), "Encontraste lo que buscabas! ahora vuelve al punto de partida(luz)!");
        	//valor 400 para agrandar en caso de cambiar letras
        }
       
    }    