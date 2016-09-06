var boton_iniciar:GUIText;

function Update(){

	for (var touch : Touch in Input.touches)
 	{	
  		if (boton_iniciar.HitTest (touch.position))
  		{
			Application.LoadLevel("Escena_Intro");
			
  		}
 	}

}
/*
function OnMouseDown(){

	Application.LoadLevel("Escena_Intro");

}
/*
var boton: GUIText;

function Awake(){

	boton=GameObject.Find("Inicio").guiText;

}
function Update () {
	if(Input.touchCount > 0){
        for (var i = 0; i < Input.touchCount; ++i) {   
            if(boton.HitTest(Input.GetTouch(i).position)){
            		Application.LoadLevel(1);
            	}
            }
	}
/*for(var touch : Touch in Input.touches){
	if(touch.phase==TouchPhase.Stationary && flecha.HitTest(touch.position))
		Debug.Log("Colision esfera");
		Application.LoadLevel(0); //salir de la escena
		Time.timeScale = 0;

}
/*
	if(Input.touchCount>0){
		if(Input.GetTouch(0).phase==TouchPhase.Began){
			Debug.Log("Colision esfera");    
		}
	}   
}*/