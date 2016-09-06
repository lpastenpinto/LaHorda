		
using UnityEngine;
using System.Collections;


[AddComponentMenu("Mixamo/Demo/Root Motion Character")]
public class RootMotionCharacterControlZOMBIE: MonoBehaviour
{
	public float turningSpeed = 90f;
	public RootMotionComputer computer;
	public CharacterController character;
	
	void Start()
	{
		// validate component references
		if (computer == null) computer = GetComponent(typeof(RootMotionComputer)) as RootMotionComputer;
		if (character == null) character = GetComponent(typeof(CharacterController)) as CharacterController;
		
		// tell the computer to just output values but not apply motion
		computer.applyMotion = false;
		// tell the computer that this script will manage its execution
		computer.isManagedExternally = true;
		// since we are using a character controller, we only want the z translation output
		computer.computationMode = RootMotionComputationMode.ZTranslation;
		// initialize the computer
		computer.Initialize();
		
		// set up properties for the animations
		animation["idle"].layer = 0; animation["idle"].wrapMode = WrapMode.Loop;
		animation["walk01"].layer = 1; animation["walk01"].wrapMode = WrapMode.Loop;
		animation["run"].layer = 1; animation["run"].wrapMode = WrapMode.Loop;
		animation["attack"].layer = 3; animation["attack"].wrapMode = WrapMode.Once;
		animation["headbutt"].layer = 3; animation["headbutt"].wrapMode = WrapMode.Once;
		animation["scratchidle"].layer = 3; animation["scratchidle"].wrapMode = WrapMode.Once;
		animation["walk02"].layer = 3; animation["walk02"].wrapMode = WrapMode.Once;
		animation["standup"].layer = 3; animation["standup"].wrapMode = WrapMode.Once;
		
		animation.Play("idle");
		
	}
	
	void Update()
	{
		float targetMovementWeight = 0f;
		float throttle = 0f;
		
		// turning keys
		if (Input.GetKey(KeyCode.A)) transform.Rotate(Vector3.down, turningSpeed*Time.deltaTime);
		if (Input.GetKey(KeyCode.D)) transform.Rotate(Vector3.up, turningSpeed*Time.deltaTime);
		
		// forward movement keys
		// ensure that the locomotion animations always blend from idle to moving at the beginning of their cycles
		if (Input.GetKeyDown(KeyCode.W) && 
			(animation["walk01"].weight == 0f || animation["run"].weight == 0f))
		{
			animation["walk01"].normalizedTime = 0f;
			animation["run"].normalizedTime = 0f;
		}
		if (Input.GetKey(KeyCode.W))
		{
			targetMovementWeight = 1f;
		}
		if (Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.RightShift)) throttle = 1f;
				
		// blend in the movement

		animation.Blend("run", targetMovementWeight*throttle, 0.5f);
		animation.Blend("walk01", targetMovementWeight*(1f-throttle), 0.5f);
		// synchronize timing of the footsteps
		animation.SyncLayer(1);
		
		// all the other animations, such as punch, kick, attach, reaction, etc. go here
		if (Input.GetKeyDown(KeyCode.Alpha1)) animation.CrossFade("attack", 0.2f);
		if (Input.GetKeyDown(KeyCode.Alpha2)) animation.CrossFade("headbutt", 0.2f);
		if (Input.GetKeyDown(KeyCode.Alpha3)) animation.CrossFade("scratchidle", 0.2f);
		if (Input.GetKeyDown(KeyCode.Alpha4)) animation.CrossFade("walk02", 0.2f);
		if (Input.GetKeyDown(KeyCode.Alpha5)) animation.CrossFade("standup", 0.2f);
		//if (Input.GetKeyDown(KeyCode.Alpha6)) animation.CrossFade("spinningkick", 0.2f);
		//if (Input.GetKeyDown(KeyCode.Alpha7)) animation.CrossFade("swordslash01", 0.2f);
		//if (Input.GetKeyDown(KeyCode.Alpha8)) animation.CrossFade("swordslash02", 0.2f);

	}
	
	void LateUpdate()
	{
		computer.ComputeRootMotion();
		
		// move the character using the computer's output
		character.SimpleMove(transform.TransformDirection(computer.deltaPosition)/Time.deltaTime);
	}
}