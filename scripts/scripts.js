function Quote(quote, author, logo) {
    this.quote = quote;
    this.author = author;
    this.logo = logo;
}

var Placeholder = {
    
    words: function(input) {
        this.words = input;
    },
    
    rngIndex: function() {
        var number = this.words.length;
        return Math.floor(Math.random() * number);
    },
    
    printQuote: function(id, index) {
        var quote = this.words[index].quote;
        this.printToID(id, quote);
    },
    
    printAuthor: function(id, index) {
        var author = this.words[index].author;
        this.printToID(id, author);
    },
    
    printLogo: function(id, index) {
        var logo = this.words[index].logo;
        this.printToIMG(id, logo);
    },
    
    printToID: function(id, text) {
        var element = document.getElementById(id);
        element.innerHTML = text;
    },
    
    printToIMG: function(id, image) {
        var element = document.getElementById(id);
        element.src = "img/" + image;
    }
}


    