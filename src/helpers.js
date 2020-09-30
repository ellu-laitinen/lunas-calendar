

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
export const windowArray = [
    {
        id: "hatch-1",

        nr: 1,
        text:
            "Tarina alkaa...",
        overLay: "A group of little Faeries huddled in their home deep under the roots of a giant oak tree. They were safe and snug in their tiny underground cave lined with dandelion fluff, bird feathers, and dried moss. Outside, the wind blew cold and the snow fell softly down to cover the ground. 'I saw the Sun King today,' the faerie named Rose said as she pulled her mossy cloak tighter about her. 'He looked so old and tired as he walked off through the forest. What is wrong with him? 'The great oak said he is dying' answered Daffodil. 'Dying? Oh, what will we do now?', Little Meadow Grass started to cry, 'If the Sun King dies, our little plant friends will not grow. The Birds will not come and sing again. Everything will be winter for ever!' Lilac, Dandelion and Elder Blossom tried to comfort their friend, but they were all very sad. As they huddled together, there was a knock on the tiny door...",
        open: false
    },
    {
        id: "hatch-2",

        nr: 2,
        text:
            "Tänään askarrellaan joulukoristeita! ",
        overLay: '<h3> Tähän tarvitset: valkoista liimaa (esim. Erikeeper), villalankaa, nuppineuloja, piparimuotteja sekä alustan johon nuppineulat saa kiinni, esim. styroxia. </h3> <br/> <iframe title="tutorial video" width="560" height="315" src="https://www.youtube.com/embed/Cm0iHUY7Iog" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        open: false
    },
    {
        id: "hatch-3",

        nr: 3,
        text:
            "What is the best Christmas present ever? A broken drum - you can't beat it!",
        overLay: "iutvlyurcykeckyrvluyöbuitöit",
        open: false
    },
    {
        id: "hatch-4",
        nr: 4,
        text:
            "Värityskuva",
        overLay: " <div className='coloring'><img width='150' height='130' alt='coloring' src='./img/coloring.jpeg'></img> <a href='./img/coloring.jpeg' download> lataa kuva</a></div> <div className='coloring'><img  width='150' height='130'  alt='coloring' src='./img/christmastree.jpg'></img> <a href='./img/christmastree.jpg' download> lataa kuva</a></div> ",
        open: false
    },
    {
        id: "hatch-5",
        nr: 5,
        text:
            "Tänään lauletaan...",
        overLay: 'Tänään lauletaan Frozenia! </br> <iframe title= "frozen 2 Elsa sings" width="800" height="500" src="https://www.youtube.com/embed/XCr27xuLCDM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        open: false
    },
    {
        id: "hatch-6",
        nr: 6,
        text:
            "What is the difference between snowmen and snowwomen? Snowballs.",
        overLay: '',
        open: false
    },
    {
        id: "hatch-7",
        nr: 7,
        text:
            "Tänään herkutellaan kaakaolla!",
        overLay: '<h2>Tarvitset</h2> <ul> <li> 0,5 l maitoa </li> <li> 2 rkl tummaa kaakaojauhetta </li><li> 80g tummaa suklaata raastettuna </li><li> mausteita oman maun mukaan (kaneli, chili, piparminttu...) </li></ul> <p> Lämmitä maito ja kaada se suklaaraasteen päälle. Kaada maito takaisin kattilaan ja lisää kakojauhe ja sokeri. Kuumenna kaakao kiehuvaksi. Kaada varovasto mukeihin ja lisää päälle oman maun mukaan mausteita, kermavaahtoa tai vaahtokarkkeja! </p>',
        open: false
    },
    {
        id: "hatch-8",
        date: "Sat Sep 26 2020",
        nr: 8,
        text:
            "What kind of motorbike does Santa ride? A Holly Davidson!",
        open: false
    },
    {
        id: "hatch-9",
        nr: 9,
        text:
            "Tänään on leffapäivä!",
        overLay: 'Pidetään leffailta! Mitä elokuvaa teillä katsotaan? Tässä hyviä vaihtoehtoja: <img width= "200" height=" 350" src="./img/xmas18.jpg" />',
        open: false
    },
    {
        id: "hatch-10",
        nr: 10,
        text:
            "When you stop believing in Santa Claus is when you start getting clothes for Christmas!",
        overLay: ' Sowulo: Yule <iframe width="560" height="315" src="https://www.youtube.com/embed/iCXNPimqMCs" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        open: false
    },
    {
        id: "hatch-11",
        nr: 11,
        text:
            "What goes 'oh oh oh'? Santa walking backwards.",
        open: false
    },
    {
        id: "hatch-12",
        nr: 12,
        text:
            "According to my kids' Christmas lists, they think this parenting gig pays pretty well.",
        open: false
    },
    {
        id: "hatch-13",
        nr: 13,
        text:
            "Which of Santa's reindeers needs to mind his manners the most? 'Rude'olph",
        open: false
    },
    {
        id: "hatch-14",
        nr: 14,
        text:
            "Piparinleivontaa!",
        overLay: "Tänään leivotaan ja koristellaan pipareita!",
        open: false
    },
    {
        id: "hatch-15",
        nr: 15,
        text:
            "What do elves learn in school? The Elf-abet!",
        open: false
    },
    {
        id: "hatch-16",
        nr: 16,
        text:
            "How do you scare a snowman? You get a hairdryer!",
        open: false
    },
    {
        id: "hatch-17",
        nr: 17,
        text:
            "The main thing I want this holiday season is for someone to wake me when it's over.",
        open: false
    },
    {
        id: "hatch-18",
        nr: 18,
        text:
            "Remember, children. The best way to get a puppy for Christmas is to beg for a baby brother.",
        open: false
    },
    {
        id: "hatch-19",
        nr: 19,
        text:
            "I bought my son a fridge for Christmas. – I can't wait to see his face light up when he opens it.",
        open: false
    },
    {
        id: "hatch-20",
        nr: 20,
        text:
            "Santa's elves are just a bunch of subordinate Clauses.",
        open: false
    },
    {
        id: "hatch-21",
        nr: 21,
        text:
            "What is the best evidence that Microsoft has a monopoly? Santa Claus had to switch from Chimneys to Windows.",
        open: false
    },
    {
        id: "hatch-22",
        nr: 22,
        text:
            "",
        overLay: " ",
        open: false
    },
    {
        id: "hatch-23",
        nr: 23,
        text:
            "",
        overLay: "",
        open: false
    },
    {
        id: "hatch-24",
        nr: 24,
        text:
            "Hyvää joulua!",
        overLay: "",
        open: false
    }


];

export const createCalendar = () => shuffle(windowArray);