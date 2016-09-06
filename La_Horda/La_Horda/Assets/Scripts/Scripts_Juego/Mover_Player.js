#pragma strict
var player : Transform;
//var player_hero : Transform;
var zombie :Transform;
var boton_arriba : GUITexture;
var boton_correr : GUITexture;
var boton_abajo :GUITexture;
var dir : Vector3 = Vector3.zero;	
var HitTest_arriba;
var HitTest_abajo;
var character:CharacterController;
var jump_speed : float = 10;
var valor_rotacion:float;

        
function Start() 
{    Time.timeScale = 1;
     player = GameObject.FindWithTag("Player").transform;     
    // player_hero = GameObject.FindWithTag("Player_Hero").transform;
     zombie=GameObject.Find("Zombie").transform;    
     character  = GetComponent(CharacterController);     
     player.animation.Play("Idle");  
     
    // Camera.main.fieldOfView = 50;          
     //Camera.main.farClipPlane=50;
     
}



function Update(){						
	
	
	
	var movement:Vector3;	
																																
	dir.x = Input.acceleration.x; 
	if (dir.sqrMagnitude > 1){			
		dir.Normalize();				 			          				  
	}

	/*
	if(dir.x>0.3f){
			player.transform.Rotate(0,3,0); 
			//character.transform.Rotate(0,3,0);
	}else if(dir.x>0.1f){
	
			player.transform.Rotate(0,1,0); 
			//character.transform.Rotate(0,1,0);
	}
	
	
	if(dir.x<-0.3f){
			player.transform.Rotate(0,-3,0); 
			//character.transform.Rotate(0,-3,0);
	}else if(dir.x<-0.1f){
	
			player.transform.Rotate(0,-1,0); 
			//character.transform.Rotate(0,-1,0);
	}
	*/
	
	valor_rotacion=dir.x*10;	
	player.transform.Rotate(0,valor_rotacion,0); 
	if(Input.touchCount.Equals(0)){
	
		player.animation.Play("Idle", PlayMode.StopAll);
		
	}
	

	for (var evt : Touch in Input.touches) {

			HitTest_arriba = boton_arriba.HitTest(evt.position);
		 	HitTest_abajo = boton_abajo.HitTest(evt.position);
			
			if(HitTest_arriba){
					player.animation.Play("RunForward",PlayMode.StopAll);
					movement+=player.forward*7; 
					movement*=Time.deltaTime;
					character.Move(movement);	
						 	
	 				//player.transform.Translate(Vector3.forward * velocidad);		*/
	 					
			}
			if(HitTest_abajo){
					player.animation.Play("RunBackward",PlayMode.StopAll);	
					movement+=player.forward*-7; 
					movement*=Time.deltaTime;
					character.Move(movement);												
	 					 					 				
			}
			
			/*if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved) {
				//var primaryTouch : Touch = Input.GetTouch(0);
        		//var Velocity_X = primaryTouch.deltaPosition.x / primaryTouch.deltaTime;
        		//player.transform.Translate(Vector3.up * jump_speed);
        			player.animation.Play("jump_pose",PlayMode.StopAll);	
        			movement=player.up*10; 
					movement*=Time.deltaTime;
					character.Move(movement);
        		
					movement=player.up*-10; 
					movement*=Time.deltaTime;
					character.Move(movement);		
				
			}*/
	}
 
}


