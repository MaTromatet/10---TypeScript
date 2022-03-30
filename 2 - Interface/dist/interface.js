function getMessage(author) {
    var message = "".concat(author.name, " ").concat(author.firstname, " poss\u00E8de ").concat(author.collection.length, " livres");
    return message;
}
var books1 = [{ title: "livre1" }, { title: "livre3" }];
var author1 = {
    name: "Dupond",
    firstname: "Jean",
    collection: books1,
};
var msg = getMessage(author1);
console.log(msg);
//# sourceMappingURL=interface.js.map