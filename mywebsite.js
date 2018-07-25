var myImages = ['https://static1.srcdn.com/wordpress/wp-content/uploads/2018/01/The-Maze-Runner-The-Death-Cure-Ending-Explained.jpg',
                'https://mormonmusic.org/files/2016/07/lindseystirling.jpg',
                'https://cdn-img.health.com/sites/default/files/styles/large_16_9/public/styles/main/public/gettyimages-522881398.jpg?itok=0g33xDwx',
                'https://i.ndtvimg.com/i/2015-06/chocolate_625x350_81434346507.jpg',
                'https://alltheone.files.wordpress.com/2016/05/104361.jpg?w=1000',
                'https://theme.zdassets.com/theme_assets/980048/b552507bd9ede69cf1ea7d4e465a1260d013586a.png',
                'https://www.nerdmuch.com/wp-content/uploads/2018/01/Shallan.jpg',
                'http://kupferbergcenter.org/cms/wp-content/uploads/2018/02/BenEl_192x752.jpg',
                'https://nerdist.com/wp-content/uploads/2015/09/Star-Wars-saga-1-6.jpg'

              ];
var myAlts = ['A picture of the The Death Cure, a newly released movie from 20th Century Fox, as based off of the book by James Dashner. The Death Cure is a science fiction movie starring Dylan O\'Brien, Kaya Scodelario, and Ki Hong Lee.',
              'A picture of Lindsey Stirling, pop violinist.',
              'A picture of a group of adorable puppies that are playing with a long branch.',
              'A picture of some delicious-looking chocolate.',
              'A picture of the K-Pop band called Day 6. The picture features the band\'s five members. In order from left to right: Wonpil, Sungjin, Jae, Young K, and Dowoon',
              'A picture of the Girls Who Code logo',
              'A picture of Shallan Davar, from the Stormlight Archives by Brandon Sanderson',
              'A picture of the Israeli duo comprised of Static (Liraz Russo) and Ben El Tavori',
              'A picture of a Star Wars poster that smashes the first six episodes together into one picture.'

]


var img_index = 0;
var alt_index = 0;
function change_image() {

    //here "this" will point to button, the element which is clicked ie event occurred.

    //but we need image, so get it by using below statement
    var img = document.getElementById("myImg");
    img_index = ++ img_index % 9;
    alt_index = ++ alt_index % 9;
    img.src = myImages[img_index];
    img.alt = myAlts[img_index];
}
