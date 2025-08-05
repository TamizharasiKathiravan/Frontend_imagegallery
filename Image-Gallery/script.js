function filterImages(category) {
  const images = document.querySelectorAll('.gallery img');
  const buttons = document.querySelectorAll('button');

  // Remove active class from all buttons
  buttons.forEach(btn => btn.classList.remove('active'));

  // Add active class to clicked button
  event.target.classList.add('active');

  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'inline-block';
    } else {
      img.style.display = 'none';
    }
  });
}


 