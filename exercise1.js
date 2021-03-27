const address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAddress (address) {
    for (let key in address)   
    console.log(key, address[key]);
} 
showAddress(address);

Factory function
let address = createAddress('a', 'b', 'c')
console.log(address)
function createAddress (street, city, zipCode) {
return {
    street,
    city,
    zipCode
  };
}

Constructor function
let address = new Address('a', 'b', 'c');
console.log(address);

function Address(street, city, ZipCode) {
    this.street = street;
    this.city = city; 
    this.ZipCode = ZipCode;
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

function Address(street, city, ZipCode) {
    this.street = street;
    this.city = city; 
    this.ZipCode = ZipCode;
}

function areEqual(address1, address2){
   return address1.street === address2.street &&
   address1.city === address2.city &&
   address1.zipCode === address2.zipCode;
}

function areSame(address1, address2){
    return address1 === address2;

}

let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        {author: 'a', body: 'b'},
        {author: 'c', body: 'd'},
    ],    
    isLive: true
};
console.log(post);

let post = new Post('a', 'b', 'c');
console.log(post);
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let priceRanges = [
    {label: '$', tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50}
];

let restaurants = [
    { averagePerPerson: 5}
]
