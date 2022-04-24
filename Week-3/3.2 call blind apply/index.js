let fruits = {
    name: 'Mango',
    color: 'yellow'
}

const fruitsInfo= function(origin,use) {
    console.log(this.name + " "+ "of" + " " + this.color +" "+"color is my favorite fruit from" +" "+ origin + " "+ 
    "for" + " "+ use);
}
fruitsInfo.call(fruits,'kokan','juice');

fruitsInfo.apply(fruits,['kokan','juice']);

const food = fruitsInfo.bind(fruits,'Kokan','juice');

food();