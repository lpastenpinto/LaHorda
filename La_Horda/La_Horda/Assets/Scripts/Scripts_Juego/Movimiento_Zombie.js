#pragma strict
private var objetivo_player : Transform;
public var distancia_detecta_player=10;
public var nombre_animacion_zombie:String;

private var distancia_player_zombie:float;
private var Luz : GameObject;
private var numero_Aleatorio:float;
private var contador_caminar:float;


function Start() 
{ 
     
    objetivo_player = GameObject.FindWithTag("Player").transform;  	  
	Luz=GameObject.Find("Luz_GameOver").gameObject;	
	animation["run"].speed = 2;
	contador_caminar=0;
	
	//animation["idle"].enabled = false;	
} 

function Update(){
	contador_caminar+=1;
	if(nombre_animacion_zombie.Equals("walk02")){
		animation.Play(nombre_animacion_zombie,PlayMode.StopAll);	
		numero_Aleatorio= Random.Range(50,100);
		if(contador_caminar%(500-numero_Aleatorio)==0)
			transform.Rotate(0,numero_Aleatorio,0);

	}		
	Buscar_SeguirPlayer();
	 
}



function OnBecameInvisible () {
		enabled = false;
}
	
	

function Buscar_SeguirPlayer(){

	distancia_player_zombie = Vector3.Distance(transform.position, objetivo_player.position);
	
	if(distancia_player_zombie<distancia_detecta_player){											
			//transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(objetivo_player.position - transform.position),Time.deltaTime * 9);
			//transform.eulerAngles = Vector3(0,transform.eulerAngles.y,0);
			transform.LookAt(objetivo_player); 																									
			animation.Play(nombre_animacion_zombie,PlayMode.StopAll);				
			distancia_detecta_player=10000;
	}
	if(distancia_player_zombie<1){
			
		animation.Stop();
		Time.timeScale = .1;
		Luz.AddComponent("Aumentar_Intensidad_Luz");
		yield WaitForSeconds(0.6);
		//Time.timeScale = 1;
		Application.LoadLevel("GameOver");
	
	}
		
   
}
