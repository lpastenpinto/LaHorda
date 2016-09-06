var verificador_pausa:boolean;
function Start () {
	verificador_pausa=false;
}

function OnMouseDown() {
	verificador_pausa=true;
}

function OnGUI(){

	if(verificador_pausa==true){
		
	
		GUI.Box(Rect(Screen.width /2 - 150,Screen.height /2 - 150,250,200), "Escoge Etapa");		

		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 100,250,50), "Etapa 1")){
			Time.timeScale = 1;
			verificador_pausa=false;		
			Application.LoadLevel("Escena_2");
		}
		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 50,250,50), "Etapa 2")){
			Time.timeScale = 1;
			verificador_pausa=false;		
			Application.LoadLevel("Escena_1");
		}		
		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 ,250,50), "Atras")){
			verificador_pausa=false;
			Time.timeScale = 1;
			
		}
	}
	
}	