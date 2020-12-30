function hashStringToInt(s, tableSize) {
	let hash = 17;
	for (let i = 0; i < s.length; i++) {
		hash = (13 * hash * s.charCodeAt(i)) % tableSize;
	}
	console.log(hash);
	return hash;
}
class HashTable {
	table = new Array(17);

	setItem = (key, value) => {
		const idx = hashStringToInt(key, this.table.length);
		this.table[idx] = value;
	};

	getItem = (key) => {
		const idx = hashStringToInt(key, this.table.length);
		return this.table[idx];
	};
}
const myTable = new HashTable();
myTable.setItem('firstname', 'bob');
myTable.setItem('lastname', 'asfdaf');

console.log(myTable.table);
