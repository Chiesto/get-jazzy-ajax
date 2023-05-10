$(document).ready(onReady);

function onReady() {
    console.log('DOM loaded')
    $.ajax({
        type: 'GET',
        url: '/artist'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    // TODO Add ajax request for /songs and display on DOM
    $.ajax({
        type: 'GET',
        url: '/song'
    }).then(function(response){
        console.log('success!!!!!', response);
        renderToDom(response)
    })
    $.ajax({
        type: 'GET',
        url: '/albums'
    }).then(function(response){
        console.log('success!!!!!', response);
        renderToDom2(response)
    })
}

function renderToDom(songs){
    // $('#songTableBody').empty();
    for(let song of songs){
        $('#songTableBody').append(`
            <tr>
                <td>${song.title}</td>
                <td>${song.artist}</td>
            </tr>
        `)
    }
}

$.ajax({
    type: 'GET',
    url: '/albums'
}).then(function(response){
    console.log('success!!!!!', response);
    renderToDom(response)
})


function renderToDom2(albums){
// $('#songTableBody').empty();
for(let album of albums){
    $('#albumTableBody').append(`
        <tr>
            <td>${album.title}</td>
            <td>${album.releaseDate}</td>
        </tr>
    `)
}
}