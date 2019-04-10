var currentIndex;
var sageWords = [
    new Quote('“If you can dream it, you can do it.”', '-Walt Disney', 'Tulips.jpg'),
    new Quote('“Aim for the moon. If you miss, you may hit a star.”', '-W. Clement Stone', 'Jellyfish.jpg'),
    new Quote('“There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits.”', '-Michael Phelps', 'Desert.jpg'),
    new Quote('“You can never plan the future by the past.”', '-Edmund Burke', 'Hydrangeas.jpg'),
    new Quote('“He who has a why to live can bear almost any how.”', '-Friedrich Nietzsche', 'Lighthouse.jpg'),
    new Quote('“Take into account that great love and great achievements involve great risk.”', '-Dalai Lama', 'Chrysanthemum.jpg'),
    new Quote('“Lost time is never found again.”', '-Benjamin Franklin', 'Penguins.jpg'),
    new Quote('“In three words I can sum up everything I’ve learned about life: it goes on.”', '-Robert Frost', 'Koala.jpg')
];
Placeholder.words(sageWords);

//BUTTON ELEMENT
var dailyQuote = document.getElementById("dailyquote");
dailyQuote.onclick = function() {
    var index = Placeholder.rngIndex();
    while (index === currentIndex) {
        index = Placeholder.rngIndex();
    }
    Placeholder.printQuote("quote", index);
    Placeholder.printAuthor("author", index);
    Placeholder.printLogo("logo", index);
    currentIndex = index;
}