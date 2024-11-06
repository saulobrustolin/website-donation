$(document).ready(
    () => {
        $('#content').load('/pages/donate.html')

        $('li a')
        .click('click',
            ({target}) => {
                const page = target.getAttribute('data-page')
                $('#content').load('/pages/' + page + '.html')
            }
        )
    }
)