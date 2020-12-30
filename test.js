const items = [
	{ name: 'bike', price: 100 },
	{ name: 'TV', price: 200 },
	{ name: 'Album', price: 10 },
	{ name: 'Phone', price: 5 },
	{ name: 'Book', price: 500 },
	{ name: 'Computer', price: 1000 }
];

//Reduce
// const itemsReduce = items.reduce((currentTotal, item) => {
// 	return item.price + currentTotal;
// }, 0);

// console.log(itemsReduce);

//Every and some
const hasIn = items.every((item) => {
	return item.price <= 1000;
});

// Filter and find
// const itemsName = items.filter((item) => {
// 	return item.name === 'bike';
// });

// console.log(itemsName);

//filter
// const flterItem = items.filter((item) => {
// 	return item.price <= 100;
// });
// console.log(items);
// console.log(flterItem);
