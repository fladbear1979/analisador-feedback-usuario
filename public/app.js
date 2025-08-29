document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const user = document.getElementById('user').value;
  const comment = document.getElementById('comment').value;
  const rating = document.getElementById('rating').value;

  const response = await fetch('/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user, comment, rating })
  });

  if (response.ok) {
    alert('Comentario enviado exitosamente!');
  } else {
    alert('Error al enviar el comentario.');
  }
});