/**
 * Found this on Stackoverflow https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a - An array containing the items.
 */
const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

// Bad one-liners from https://onelinefun.com/christmas
export const hatchArray = [
    {
        id: "hatch-1",
        nr: 1,
        img: "./img/xmas2.jpg",
        text:
            "Tarina alkaa...",
        overLay: "A group of little Faeries huddled in their home deep under the roots of a giant oak tree. They were safe and snug in their tiny underground cave lined with dandelion fluff, bird feathers, and dried moss. Outside, the wind blew cold and the snow fell softly down to cover the ground. 'I saw the Sun King today,' the faerie named Rose said as she pulled her mossy cloak tighter about her. 'He looked so old and tired as he walked off through the forest. What is wrong with him? 'The great oak said he is dying' answered Daffodil. 'Dying? Oh, what will we do now?', Little Meadow Grass started to cry, 'If the Sun King dies, our little plant friends will not grow. The Birds will not come and sing again. Everything will be winter for ever!' Lilac, Dandelion and Elder Blossom tried to comfort their friend, but they were all very sad. As they huddled together, there was a knock on the tiny door...",
        open: false
    },
    {
        id: "hatch-2",
        nr: 2,
        img: "./img/xmas3.jpg",
        text:
            "What do you call people who are afraid of Santa Claus? Claustrophobic",
        overLay: "bguygbuygbllylgbljg",
        open: false
    },
    {
        id: "hatch-3",
        nr: 3,
        img: "./img/xmas4.jpg",
        text:
            "What is the best Christmas present ever? A broken drum - you can't beat it!",
        overLay: "iutvlyurcykeckyrvluyöbuitöit",
        open: false
    },
    {
        id: "hatch-4",
        nr: 4,
        img: "./img/xmas5.jpg",
        text:
            "How do you know when Santa's in the room? You can sense his presents.",
        overLay: "hgbf6o87p87nlinönöi9878b89yn8yp9",
        open: false
    },
    {
        id: "hatch-5",
        nr: 5,
        img: "./img/xmas6.jpg",
        text:
            "STRESSED is just DESSERTS spelled backward.",
        open: false
    },
    {
        id: "hatch-6",
        nr: 6,
        img: "./img/xmas7.jpg",
        text:
            "What is the difference between snowmen and snowwomen? Snowballs.",
        overLay: '<iframe title="lisa thiel yule" width="560" height="315" src="https://www.youtube.com/embed/h0Xz5w-Sr5g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

        open: false
    },
    {
        id: "hatch-7",
        nr: 7,
        img: "./img/xmas8.jpg",
        text:
            "What nationality is Santa Claus? North Polish",
        open: false
    },
    {
        id: "hatch-8",
        nr: 8,
        img: "./img/xmas9.jpg",
        text:
            "What kind of motorbike does Santa ride? A Holly Davidson!",
        open: false
    },
    {
        id: "hatch-9",
        nr: 9,
        img: "./img/xmas10.jpg",
        text:
            "Who is never hungry at Christmas? The turkey - he's always stuffed!",
        open: false
    },
    {
        id: "hatch-10",
        nr: 10,
        img: "./img/xmas11.jpg",
        text:
            "When you stop believing in Santa Claus is when you start getting clothes for Christmas!",
        overLay: ' Sowulo: Yule <iframe width="560" height="315" src="https://www.youtube.com/embed/iCXNPimqMCs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        open: false
    },
    {
        id: "hatch-11",
        nr: 11,
        img: "./img/xmas12.jpg",
        text:
            "What goes 'oh oh oh'? Santa walking backwards.",
        open: false
    },
    {
        id: "hatch-12",
        nr: 12,
        img: "./img/xmas13.jpg",
        text:
            "According to my kids' Christmas lists, they think this parenting gig pays pretty well.",
        open: false
    },
    {
        id: "hatch-13",
        nr: 13,
        img: "./img/xmas14.jpg",
        text:
            "Which of Santa's reindeers needs to mind his manners the most? 'Rude'olph",
        open: false
    },
    {
        id: "hatch-14",
        nr: 14,
        img: "./img/xmas15.jpg",
        text:
            "What will fall on the lawn first? An autumn leaf or a Christmas catalog?",
        open: false
    },
    {
        id: "hatch-15",
        nr: 15,
        img: "./img/xmas16.jpg",
        text:
            "What do elves learn in school? The Elf-abet!",
        open: false
    },
    {
        id: "hatch-16",
        nr: 16,
        img: "./img/xmas17.jpg",
        text:
            "How do you scare a snowman? You get a hairdryer!",
        open: false
    },
    {
        id: "hatch-17",
        nr: 17,
        img: "./img/xmas18.jpg",
        text:
            "The main thing I want this holiday season is for someone to wake me when it's over.",
        open: false
    },
    {
        id: "hatch-18",
        nr: 18,
        img: "./img/xmas19.jpg",
        text:
            "Remember, children. The best way to get a puppy for Christmas is to beg for a baby brother.",
        open: false
    },
    {
        id: "hatch-19",
        nr: 19,
        img: "./img/xmas20.jpg",
        text:
            "I bought my son a fridge for Christmas. – I can't wait to see his face light up when he opens it.",
        open: false
    },
    {
        id: "hatch-20",
        nr: 20,
        img: "./img/xmas21.jpg",
        text:
            "Santa's elves are just a bunch of subordinate Clauses.",
        open: false
    },
    {
        id: "hatch-21",
        nr: 21,
        img: "./img/xmas22.jpg",
        text:
            "What is the best evidence that Microsoft has a monopoly? Santa Claus had to switch from Chimneys to Windows.",
        open: false
    },
    {
        id: "hatch-22",
        nr: 22,
        img: "./img/xmas23.jpg",
        text:
            "And here we are, the first day after the Solstice",
        overLay: "The Wheel has turned and we are once again heading towards the light. Let us focus on growth, the coming spring, new life and abundance. Blessed be! ",
        open: false
    },


];

export const createCalendar = () => shuffle(hatchArray);