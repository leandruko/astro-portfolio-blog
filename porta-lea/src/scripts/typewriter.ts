import Typewriter from 'typewriter-effect/dist/core';

// Inicializar el efecto de escritura
const typewriter = new Typewriter('#typewriter', {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('I am a Web Developer.')
  .pauseFor(2000)
  .deleteAll()
  .typeString('I am a Data Enthusiast.')
  .pauseFor(2000)
  .deleteAll()
  .typeString('I build awesome projects.')
  .pauseFor(2000)
  .deleteAll()
  .start();
