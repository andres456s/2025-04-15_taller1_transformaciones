using UnityEngine;

public class MoverObjeto : MonoBehaviour
{
    public float rotSpeed = 45f;           // Grados por segundo
    public float moveInterval = 2f;        // Cada cuántos segundos se mueve
    public float moveDistance = 1f;        // Distancia de traslación
    public float scaleAmplitude = 0.3f;    // Amplitud del escalado

    private float lastMoveTime;

    void Update()
    {
        // 🔁 Rotación constante (eje Y)
        transform.Rotate(Vector3.up * rotSpeed * Time.deltaTime);

        // 🔁 Escalado oscilante con Mathf.Sin(Time.time)
        float scale = 1 + scaleAmplitude * Mathf.Sin(Time.time);
        transform.localScale = new Vector3(scale, scale, scale);

        // 🔁 Traslación aleatoria por X o Y cada X segundos
        if (Time.time - lastMoveTime > moveInterval)
        {
            lastMoveTime = Time.time;

            // Aleatoriamente elige entre mover en X o Y
            int dir = Random.Range(0, 2);
            Vector3 move = (dir == 0) ? Vector3.right : Vector3.up;

            transform.Translate(move * moveDistance, Space.World);
        }
    }
}
