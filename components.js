$(document).keypress((e) => {
    if (e.which === 13) {
        $('button').each(function() {
            $(this).trigger('click');
        });
    }
});

$('#container').ready(
    () => {
        let random = Math.random()

        $('#value')[0].innerText = (random * 10000).toFixed(2).replace('.', ',');
        $('#target')[0].innerText = (random * random * 100000).toFixed(2).replace('.', ',');

        let value = $('#value')[0].innerText.replace(',', '.')
        let target = $('#target')[0].innerText.replace(',', '.')

        let calc = ((+value / +target) * 100).toFixed(2)
        let style = 'width: ' + calc + '%'

        $('.progress')[0].setAttribute('style', style);
    }
)

$('#contribuir').click(() => {
    let valor = $('#valor')[0].value;

    $('#content').load('/pages/obrigado.html', () => {
        $('#valorContribuido').text('O valor de R$' + valor + ' ajudará muito a nossa campanha.');
    });
});

$('#donate').click('click', () => {
    $('#content').load('../pages/apoio.html');
})