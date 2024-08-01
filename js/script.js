// Validasi Form
function formValidation() {
  const name = document.forms['message-form']['full-name'].value;
  const email = document.forms['message-form']['email'].value;
  const country = document.forms['message-form']['country'].value;

  if (name == '' || email == '' || country == '') {
    alert('Input tidak boleh kosong!');
    return false;
  } else {
    alert('Sukses terkirim');
    return true;
  }
}

// Banner auto slide
let indexSlide = 1;
showSlide(1);

function nextslide() {
  showSlide((indexSlide += n));
}

function showSlide(n) {
  let listImage = document.getElementsByClassName('main-content-banner');
  console.log(listImage);

  if (n > listImage.length) indexSlide = 1;

  let index = 0;
  while (index < listImage.length) {
    listImage[index].style.display = 'none';
    index++;
  }

  listImage[indexSlide - 1].style.display = 'block';
}

setInterval(() => nextslide(1), 3000);
