using UnityEngine;
using UnityEngine.UI;
using TMPro;    

public class PadreController : MonoBehaviour
{
    public Slider posSlider;
    public Slider rotSlider;
    public Slider scaleSlider;
    public TextMeshProUGUI infoText;

    public Button playButton;
    public Button pauseButton;
    public Button resetButton;

    private bool isAnimating = false;
    private float animTime = 0f;
    private Vector3 initialPosition;

    void Start()
    {
        initialPosition = transform.position;

        // Botones bonus
        if (playButton != null) playButton.onClick.AddListener(() => isAnimating = true);
        if (pauseButton != null) pauseButton.onClick.AddListener(() => isAnimating = false);
        if (resetButton != null) resetButton.onClick.AddListener(ResetTransform);
    }

    void Update()
    {
        // Aplicar sliders al objeto padre
        transform.position = new Vector3(posSlider.value, transform.position.y, transform.position.z);
        transform.eulerAngles = new Vector3(0, rotSlider.value, 0);
        transform.localScale = new Vector3(scaleSlider.value, scaleSlider.value, scaleSlider.value);

        // Mostrar valores
        infoText.text = $"Pos: {transform.position}\nRot: {transform.eulerAngles}\nScale: {transform.localScale}";

        // Bonus: animación
        float speed = 2f; // Aumenta este valor para más velocidad

        if (isAnimating)
        {
            animTime += Time.deltaTime;
            transform.position = initialPosition + new Vector3(Mathf.Sin(animTime * speed), 0, 0);
        }

    }

    void ResetTransform()
    {
        isAnimating = false;
        transform.position = initialPosition;
        animTime = 0f;
    }
}
