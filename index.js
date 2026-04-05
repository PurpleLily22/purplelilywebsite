const ctx = document.getElementById('myChart').getContext('2d');

const data = {
    labels: [
        'Magic',
        'Communication',
        'Movement',
        'Wisdom',
        'Strength'
    ],
    datasets: [{
        label: 'Score',
        data: [65, 59, 90, 81, 56],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
};

const config = {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
};

const myChart = new Chart(ctx, config);

/*
QUIZ QUESTIONS (NEED TO BE RANDOMIZED)

What is your favorite color?
Purple
Orange
White
Pink
Black
Red
Blue
Green

What is your favorite animal?
Bunny
Tiger
Deer
Dog
Crow
Snake
Cat
Horse

What is your favorite salty food?
Pizza
Tacos
Ketchup
Baozi
Dumplings
Steak
Bloody Beet Soup
Beef stew

What is your favorite sweet treat?
Tiramisù
Muffin
Lollipop
Cherry
Licorice candy
Red velvet
Marshmallows
Chocolate bar

What is your favorite drink?
Peach tea
Water
Martini
Hot tea
Sake
Vodka
Blue Lagoon
Rum

What is your favorite hobby?
Drawing
Puzzles
Dancing
Reading
Origami
Martial arts
Pottery
Exploring

Where would you like to go for a vacation?
Home
Rainforest
City
Lake
Mountains
Ruins
Beach
Plains

Choose an object:
Book
Herbal satchel
Disco ball
Jewels
Moon shaped weapons
Scythe
Quirky glass
Diary


Choose a flower:
Spider lily
Peony
Freesia
Jasmine
Hyacinth
Nightshade
Periwinkle
Daisy

What would you bring to a deserted island?

*/

