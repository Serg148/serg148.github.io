// ==== Accordion  ====

var title = document.getElementsByClassName('Arcadion_item');
for (var i = 0; i < title.length; i++) {
  title[i].addEventListener('click', function() {
    if (!(this.classList.contains('Arcadion_item-active'))) {
      for(var i = 0; i < title.length; i++) {
        title[i].classList.remove('Arcadion_item-active');
      }
      this.classList.add('Arcadion_item-active');
    }
  })
}

// === Modal ===

var modal_headline = document.getElementById('modal_headline');


function handleButtonClick() {
  document.getElementById('overlay').classList.add('is-visible');
  document.getElementById('modal').classList.add('is-visible');
  modal_headline.innerText = document.querySelector('.Arcadion_item-active .Arcadion_ItemInner .Arcadion_headline').innerText;
}

document.querySelector('.btn-modal').addEventListener('click', handleButtonClick);
document.querySelector('.btn_2modal').addEventListener('click', handleButtonClick);

document.getElementById('close-btn').addEventListener('click', function() {
 document.getElementById('overlay').classList.remove('is-visible');
 document.getElementById('modal').classList.remove('is-visible');
});
document.getElementById('overlay').addEventListener('click', function() {
 document.getElementById('overlay').classList.remove('is-visible');
 document.getElementById('modal').classList.remove('is-visible');
});

