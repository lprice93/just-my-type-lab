// Global Variables
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sindex = 0;
let sletter = 0;
let startTime = Date.now();
let mistakes = 0;
let wordCount = 54; // look up JS word count method


$('#sentence').append(sentences[sindex]);
$('#keyboard-upper-container').hide();
$('#target-letter').text(sentences[sindex][sletter]);

$('body').keydown(function () {
    if (event.which === 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
});

$('body').keyup(function () {
    $('.highlight').removeClass('highlight');
    if (event.which === 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
});

$('body').keypress(function () {
    $('#' + event.which).addClass('highlight');

    // Logic for end of sentence
    if (sletter >= sentences[sindex].length) {
        $('#yellow-block').css('left', '17.5px');
        $('#feedback').empty();
        sindex++;

        // End of game logic
        let endTime = Date.now();
        let minutes = ((endTime - startTime) / 1000 / 60);

        if (sindex >= sentences.length) {
            $('body').unbind('keypress');
            $('#sentence').text('it ends here!');
            // let endTime = Date.now();
            // let minutes = ((endTime - startTime) / 1000 / 60);
            console.log(minutes);
            return;
        };

        sletter = 0;
        $('#sentence').text(sentences[sindex]);
        $('#target-letter').text(sentences[sindex][sletter]);
        return;
    };

    // if (sindex === sentences.length) {
    //     $('body').show(wordCount / minutes - 2 * mistakes);
    //     console.log(wordCount);
    //     return;
    // };

    // Main Game Logic
    if (event.which === sentences[sindex].charCodeAt(sletter)) {
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>');
    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        mistakes++;
        // console.log(mistakes);
    };
    sletter++;
    let nextLetter = sentences[sindex][sletter];
    if (nextLetter === ' ') {
        nextLetter = '<space>'
    }
    $('#target-letter').text(nextLetter);
    $('#yellow-block').css('left', '+=17.5px');

});