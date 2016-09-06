#pragma strict
public var bg:Texture2D;    
public var bubble:Texture2D;

public var north=0;

public var radius:float;

public var center:Vector2;

public var compassSize:Vector2;
public var bubbleSize:Vector2;
private var compassRect:Rect;
private var rot:float;
private var x:float;
private var y:float;


    function Start()
    {
        //Set the placement of compass from size and center
        compassRect = new Rect(
            center.x - compassSize.x / 2,
            center.y - compassSize.y / 2,
            compassSize.x,
            compassSize.y);

    }

   
   
    function OnGUI()
    {
        //GUI.Box(new Rect(0, Screen.height- 30, 300, 30), "Buscar el objeto perdido y arranca de los zombies!");

        // Draw background
        GUI.DrawTexture(compassRect, bg);

        // Draw bubble
        GUI.DrawTexture(new Rect(center.x + x - bubbleSize.x / 2, center.y + y - bubbleSize.y/2, bubbleSize.x, bubbleSize.y), bubble);
    }

    // Update is called once per frame
    
    function Update()
    {
        // Note -90 compensation cos north is along 2D Y axis
        rot = -(-90 + this.transform.eulerAngles.y - north)* Mathf.Deg2Rad;

        // Bubble position
        x = radius * Mathf.Cos(rot);
        y = radius * Mathf.Sin(rot);
        if(north==1000)
        	Destroy (this);
    }
