function deep_equals(obj1, obj2) 
{
	//if they are of type object and not null then check their properties
	if((typeof(obj1) == "object" && obj1 != null) && (typeof(obj2) == "object" && obj2 != null)) {
		//if they have an unequal number of properties they don't match
		if(Object.keys(obj1).length != Object.keys(obj2).length){
			return false;
		}

		//recursively check each of the properties of the objects
		for (var p in obj1) {

			if(obj2.hasOwnProperty(p)) {
				if(!deep_equals(obj1[p], obj2[p])) {
					return false;
				}
			} else {
				return false;
			}
		}
		//all of the properties match
		return true;

	} else if (obj1 !== obj2) {
		//the params weren't objects and don't match
		return false;
	} else {
		//the params weren't objects but do match
		return true;
	}
}

// Your code here.

var obj = {here: {is: "an"}, object: 2};
console.log(deep_equals(obj, obj));
// → true
console.log(deep_equals(obj, {here: 1, object: 2}));
// → false
console.log(deep_equals(obj, {here: {is: "an"}, object: 2}));
// → true