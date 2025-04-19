void setup() {
  size(600, 600, P3D); // Sketch 3D
  noStroke();
}
void draw() {
  background(20);
  lights(); // Luz para ver el cubo iluminado

  float t = millis() / 1000.0; // Tiempo en segundos
  float wave = sin(t);         // Movimiento oscilante
  float scaleFactor = 1 + 0.3 * wave; // Escala cíclica entre 0.7 y 1.3

  pushMatrix();

  // 🔄 Trasladar el cubo de forma ondulada (en X y Z)
  translate(300 + 100 * wave, height / 2, 100 * cos(t));

  // 🔄 Rotar sobre el eje Y
  rotateY(t);

  // 🔄 Escalar suavemente en base al tiempo
  scale(scaleFactor);

  // 🧱 Dibujar cubo
  fill(100, 200, 255);
  box(100);

  popMatrix();
}
