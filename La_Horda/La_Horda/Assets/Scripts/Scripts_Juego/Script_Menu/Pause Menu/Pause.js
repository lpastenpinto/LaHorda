var verificador_pausa:boolean;
function Start () {
	verificador_pausa=false;
}

function OnMouseDown() {
	verificador_pausa=true;
}

function OnGUI(){

	if(verificador_pausa==true){
		Time.timeScale = .0000001;
	
		GUI.Box(Rect(Screen.width /2 - 150,Screen.height /2 - 200,250,200), "Menu Pausa");		

		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 150,250,50), "Volver")){
			verificador_pausa=false;
			Time.timeScale = 1;
		}
		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 100,250,50), "Reiniciar")){
			Time.timeScale = 1;
			verificador_pausa=false;					
			Application.LoadLevel(Application.loadedLevelName);
			Time.timeScale = 1;
		}
		
		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 50,250,50), "Menu Principal")){
			Time.timeScale = 1;
			verificador_pausa=false;		
			Application.LoadLevel("menu_principal");
		}		
		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 ,250,50), "Salir del Juego")){
			Application.Quit();
			
		}
	}
	
}	