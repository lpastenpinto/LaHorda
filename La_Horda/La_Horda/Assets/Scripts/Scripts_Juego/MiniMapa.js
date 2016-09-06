var target : Transform;
var damping = 6.0;
var smooth = true;

function LateUpdate () {
  if (target) {
    if (smooth)
    {
      // Look at and dampen the rotation
      var rotation = Quaternion.LookRotation(target.position - transform.position);
      transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
    }
    else
    {
      // Just lookat
        transform.LookAt(target);
    }
    transform.position.y = target.position.y + 90;
    transform.position.x = target.position.x;
    transform.position.z = target.position.z;
  }
}

function Start () {
  // Make the rigid body not change rotation
    if (rigidbody)
    rigidbody.freezeRotation = true;
}