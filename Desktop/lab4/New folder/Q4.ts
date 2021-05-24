let baseObject = { 
	width: 0, 
	length: 2
}; 
let rectangle:ObjectConstructor = Object.create(baseObject); 

rectangle.width = 5; 
//rectangle.length = 2;

rectangle.calcSize = function() { 
	return this.width * this.length; 
}; 

console.log(rectangle.calcSize()); // 10