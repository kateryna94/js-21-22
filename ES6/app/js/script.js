$(function() {

let html = $('#test').html();

let content = {
  question1: `This is Greg, the boy _______ I was telling you about.`,
  answer1: `who`,
  answer2: `whom`,
  answer3: `---`,
  question2: `I wonder where ____________.`,
  answer4: `is the manager*s office`,
  answer5: `the manager*s office is`,
  answer6: `is the manager of the office`,
  question3: `I earn a good salary. My income is higher than my _________.`,
  answer7: `outcome`,
  answer8: `profit`,
  answer9: `expenditure`
}

let keys = [false, false, true, false, true, false, false, false, true];

localStorage.setItem('questions', JSON.stringify(content));
let test = JSON.parse(localStorage.getItem('questions'));


let quiz = tmpl(html, test);
$('body').append(quiz);

$('#check').on('click', function() {
let quest = $('input:radio').map(function () {
  return this.checked;
})
  let score = 0;

for (var i = 0; i < keys.length; i++) {
  if (keys[i] && quest[i]) {
    score += 1;
  }
}

// alert ('Вы набрали ' + score + 'из 3');

  event.preventDefault(); // выключaем стaндaртную рoль элементa
  		$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
  		 	function(){ // пoсле выпoлнения предъидущей aнимaции
  				$('#modal_form')
            // .html('Поздравляю! Вы успешно прошли тест!')
  					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
  					.animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
  		});
      $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
if (score === 3) {
  $('#modal_form')
    .html('Поздравляю! Вы успешно прошли тест!');
} else {
  $('#modal_form')
    .html('К сожалению, Вы допустили ошибку. Попробуйте еще раз=)');
}


});



});
