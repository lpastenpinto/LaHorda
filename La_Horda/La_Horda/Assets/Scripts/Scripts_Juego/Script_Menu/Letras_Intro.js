var Texto:GUIText;
var tocar_texto;
private var text : String;
private var textLenght : int;
private var lenght : int = 1;
private var verificador_terminoLetras:boolean;

function Start ()
{	guiText.text = "Los Zombies se apoderaron del mundo.\nY el contagio es instantaneo luego de un contacto \nSolo queda encontrar algun antidoto.... \n ....y escapar de la horda....\n\n\n\n Pulse el texto para continuar";
	text = guiText.text;
	textLenght = text.length;
	guiText.text = "";
	StartCoroutine("OnTimer");
	verificador_terminoLetras=false;
	

	
}


function OnTimer()
{
	yield WaitForSeconds(0.05f);

	for (var evt : Touch in Input.touches) {

			tocar_texto = Texto.HitTest(evt.position);		 	
			
			if(tocar_texto){
					Application.LoadLevel("Escena_2");				
			}
	}
	
	if (textLenght >= lenght)
	{
		guiText.text = text.Substring(0, lenght);
		lenght++;
		StartCoroutine("OnTimer");
	}else{
		verificador_terminoLetras=true;
	}
}


function Update(){
	
	if(verificador_terminoLetras.Equals(true)){
		for (var evt : Touch in Input.touches) {

			tocar_texto = Texto.HitTest(evt.position);		 	
			
			if(tocar_texto){
					Application.LoadLevel("Escena_2");				
			}
		}			
	}
	
}
