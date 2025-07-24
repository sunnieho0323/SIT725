const cardList = [
    {
        title: "meme cat 2",
        image: "images/cat2.jpg",
        link: "About this cat",
        description: "The universe is so mysterious!"
    },

    {
        title: "meme cat 3",
        image: "images/cat3.jpg",
        link: "About this cat",
        description: "Are you rich? No? Then why are you here? Nah, just kidding! This cat is here to make you smile!"
    }
];

const clickMe = () => {
    alert("You don't even have money—worry about yourself first!");
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

// Or with jQuery


$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
    $('.parallax').parallax();
    $('.modal').modal();
    addCards(cardList);
})



