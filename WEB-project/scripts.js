
function rollFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function goNext() {
    var people = document.getElementsByClassName('person');

    for (var i=0; i < people.length;i++ ){
        if(people[i].classList.contains('active')){
            console.log(people[i]);
            people[i].classList.remove('active');

            if(i+1 == people.length){
                people[0].classList.add('active');
            }else{
                people[i+1].classList.add('active');
            }

            break;
        }
    }
  }


  function goPrev() {
    var people = document.getElementsByClassName('person');

    for (var i=0; i < people.length;i++ ){
        if(people[i].classList.contains('active')){
            console.log(people[i]);
            people[i].classList.remove('active');

            if(i-1 < 0){
                people[people.length-1].classList.add('active');
            }else{
                people[i-1].classList.add('active');
            }
            break;
        }
    }
  }

  function openModal() {
    document.getElementById("lightbox").style.display = "block";
  }

  function closeModal() {
    document.getElementById("lightbox").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("image--slide");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
