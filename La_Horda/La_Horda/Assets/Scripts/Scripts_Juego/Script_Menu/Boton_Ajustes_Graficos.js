#pragma strict
var verificador_menu:boolean;
function Start () {
	verificador_menu=false;
}

function OnMouseDown() {
	verificador_menu=true;
}


function OnGUI ()
	{
		var names = QualitySettings.names;
		GUILayout.BeginVertical ();
		for (var i = 0; i < names.Length; i++)
		{
			if (GUILayout.Button (names[i]))
				QualitySettings.SetQualityLevel (i, true);
		}
		GUILayout.EndVertical ();
	}
/*	
function OnGUI(){

	if(verificador_menu==true){		
	
		GUI.Box(Rect(Screen.width /2 - 150,Screen.height /2 - 150,250,200), "Ajustes Graficos");		

		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 100,250,50), "Graficos Bajos")){
			QualitySettings.currentLevel = QualityLevel.Fastest;
			verificador_menu=false;		
		}
		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 - 50,250,50), "Graficos Medios")){
			QualitySettings.currentLevel = QualityLevel.Good;
			verificador_menu=false;		
		}		
		if(GUI.Button(Rect(Screen.width /2 - 150,Screen.height /2 ,250,50), "Graficos Altos")){
			QualitySettings.currentLevel = QualityLevel.Fantastic;
			verificador_menu=false;	
			
		}
	}
	
}	*/