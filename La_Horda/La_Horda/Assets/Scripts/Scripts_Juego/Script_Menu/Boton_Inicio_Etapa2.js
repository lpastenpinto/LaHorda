var boton_iniciar_2:GUIText;

function Update(){

	for (var touch : Touch in Input.touches)
 	{	
  		if (boton_iniciar_2.HitTest (touch.position))
  		{
			Application.LoadLevel("Escena_1");
			
  		}
 	}

}