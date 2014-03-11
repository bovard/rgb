/* Utility functions. */
function Utility() {
}

Utility.prototype  = {
	/* Bound value */
	bound: function(val, low, high) {
		if (low > high) {
			throw "Error: Utility.bound called with low > high.";
		} else if (val < low) {
			return low;
		} else if (val > high) {
			return high;
		} else {
			return val;
		}
	},
	// Bounds a value to within a set of ranges. If value is outside of all ranges,
	// value will be bound to the low/high of the closest range. range arguments should
	// take the form: low, high, low, high.
	boundRanges: function(val) {
		if (arguments.length < 3 || arguments.length % 2 === 0) {
			throw "Error: Utility.boundRanges called with incorrect number of arguments.";
		} else {
			var i = 1;
			while (i < arguments.length - 1) {
				if (arguments[i] > arguments[i + 1]) {
					throw "Error: Utility.boundRanges called with invalid range.";
				}
				if (val >= arguments[i] && val <= arguments[i + 1]) {
					// In range
					return val;
				} else if (i === arguments.length - 2 || val < arguments[i + 2]) {
					var bounds = [];
					if (i !== 1) {
						bounds.push(arguments[i - 1]);
					}
					if (i !== arguments.length - 2) {
						bounds.push(arguments[i+2]);
					}
					bounds.push(arguments[i]);
					bounds.push(arguments[i + 1]);
					var util = this;
					bounds.sort(function(a, b) {
					var distFromVal1 = Math.abs(a - val);
					var distFromVal2 = Math.abs(b - val);
					return util.op("sortAsc").call(null, distFromVal1, distFromVal2);
					});
					return bounds.shift();
				}
				i += 2;
			}
		}
	},
	/* Wrap Value */
	wrap: function(val,low,high) {
		if (low > high) {
			throw "Error: Utility.wrap called with low > high.";
		} else if (val > high){
			return low + val - high;
		} else if (val < low) {
			return high - (low - val);
		} else {
			return val;
		}
	},
	/* Tester functions */
	isInstanceTest: function(constructor) {
		return function(obj) {
			if (obj instanceof(constructor)) {
				return true;
			} else {
				return false;
			}
		};
	},
	/* Partial*/
	partial: function (func) {
		var presetArgs = this.asArray(arguments, 1);
		var util = this;
		return function() {
		   return func.apply(null, presetArgs.concat(util.asArray(arguments)));
		};
	},
	/* Sort obj */
	sortObjAsc: function(prop) {
		var util = this;
		return function(obj1, obj2) {
			util.op("sortAsc").call(null, obj1[prop], obj2[prop]);
		};
	},
	sortObjDsc: function(prop) {
		var util = this;
		return function(obj1, obj2) {
			util.op("sortDesc").call(null, obj1[prop], obj2[prop]);
		};
	},
	/* Operator/Sorting functions */
	op: function(op) {
		switch(op) {
			case "===":
				return function(a, b) {
					return a === b;
				};
			break;
			case "!==":
				return function(a, b) {
					return a !== b;
				};
			break;
			case "sortAsc":
				return function(a, b) {
					if (a < b) {
						return -1
					} else if(a > b) {
						return 1;
					} else {
						return 0;
					}
				};
			break;
			case "sortDesc":
				return function(a, b) {
					if (a < b) {
						return 1
					} else if(a > b) {
						return -1;
					} else {
						return 0;
					}
				};
			break;
			default:
				throw "Error: op called with unknown operator.";
		}
	},
	/* Random number */
	rand: function(low, high) {
		/* This function will simulate random number generation if "allowRandom" in the global
		   settings object is turned off. The significance of this is that the simulated version
		   will be deterministic, which can be useful in debugging. */
		if (low > high) {
			throw "Error: Utility.rand called with low > high.";
		} else if (true) {//if (asteroids.settings.get("allowRandom")) {
			return Math.floor(Math.random() * (Math.floor(high) - Math.ceil(low) + 1)) + Math.ceil(low);
		} else {
			var counter = 0;
			if (!this.pseudoRandom) {
				this.pseudoRandom = function(low, high) {
					counter += 7;
					this.bound(counter, 0, 10000);
					return counter % (Math.floor(high) - Math.ceil(low) + 1) + Math.ceil(low);
				};
			}
			return this.pseudoRandom.call(this, low, high);
		}
	},
	randomArray: function(length, low, high) {
		var randArray = [];
		for(var i = 0; i < length; ++i) {
			randArray.push(rand(low,high));
		}
		return randArray;
	},
	/* Array tools */
	asArray: function(quasiArray, start) {
		var result = [];
		for(var i = (start || 0); i < quasiArray.length; ++i) {
			result.push(quasiArray[i]);
		}
		return result;
	},
	forEach: function(array, func) {
		for(var i = 0; i < array.length; ++i) {
			func(array[i]);
		}
	},
	test: function(testFunc, array) {
		var result = false;
		try {
			this.forEach(array, function(element) {
				if (testFunc(element)) {
					result = true;
					throw "allDone";
				}
			});
		} catch(exception) {
			if (exception !== "allDone") {
				throw exception;
			}
		}

		return result;
	},
	hasValue: function(array, val) {
		return test( function(element) {
			if (element === val) {
				return true;
			} else {
				return false;
			}
		}, array);
	},
	filter: function(test, array) {
		var result = [];
		this.forEach(array, function(element) {
			if( test(element) )
				result.push(element);
		});
		return result;
	},
	copy: function(array) {
		var result = [];
		this.forEach(array, function(element) {
			result.push(element);
		});
		return result;
	},
	map: function(action, array) {
		var result = [];
		this.forEach(array, function(element) {
			result.push(action(element));
		});
		return result;
	},
	reduce: function(combine, base, array) {
		this.forEach(array, function(element) {
			base = combine(base, element);
		});
		return base;
	},
	/* DOM tools */
	$: function(id) {
		return document.getElementById(id);
	},
	setNodeAttribute: function(node, attribute, value) {
		if( attribute == "class" ) {
			node.className = value;
		} else if( attribute == "checked" ) {
			node.defaultChecked = value;
		} else if( attribute == "for" ) {
			node.htmlFor = value;
		} else if( attribute == "style" ) {
			node.style.cssText = value;
		} else {
			node.setAttribute(attribute, value);
		}
	},
	dom: function(name, attributes) {
		var node = document.createElement(name);
		var util = this;
		if( attributes ) {
			this.forEachIn(attributes, function(name, value) {
				util.setNodeAttribute(node, name, value);
			});
		}
		for(var i = 2; i < arguments.length; ++i) {
			var child = arguments[i];
			if( typeof child == "string" )
				child = document.createTextNode(child);
			node.appendChild(child);
		}
		return node;
	},
	domAppend: function(node, name, attributes) {
		node.appendChild(
			utility.dom.apply(this, Array.prototype.slice.call(arguments, 1)));
	},
	deleteNode: function(node) {
		if( node.parentNode ) {
			node.parentNode.removeChild(node);
		}
	},
	/* Browser events */
	registerEventHandler: function(node, event, handler) {
		if( typeof node.addEventListener == "function" ) {
			node.addEventListener(event, handler, false);
		} else {
			node.attachEvent("on" + event, handler);
		}
	},
	unregisterEventHandler: function(node, event, handler) {
		if( typeof node.removeEventListener == "function" ) {
			node.removeEventListener(event, handler, false);
		} else {
			node.detachEvent("on" + event, handler);
		}
	},
	normalizeEvent: function(event) {
		if (!event.stopPropagation) {
			event.stopPropagation = function() {this.cancelBubble = true;};
			event.preventDefault = function() {this.returnValue = false;};
		}
		if (!event.stop) {
			event.stop = function() {
				this.stopPropagation();
				this.preventDefault();
			};
		}

		if (event.srcElement && !event.target)
			event.target = event.srcElement;
		if ((event.toElement || event.fromElement) && !event.relatedTarget)
			event.relatedTarget = event.toElement || event.fromElement;
		if (event.clientX != undefined && event.pageX == undefined) {
			event.pageX = event.clientX + document.body.scrollLeft;
			event.pageY = event.clientY + document.body.scrollTop;
		}
		if (event.type == "keypress") {
			if (event.charCode === 0 || event.charCode == undefined)
				event.character = String.fromCharCode(event.keyCode);
			else
				event.character = String.fromCharCode(event.charCode);
		}

		return event;
	},
	addHandler: function(node, type, handler) {
		var util = this;
		function wrapHandler(event) {
			handler(util.normalizeEvent(event || window.event));
		}
		this.registerEventHandler(node, type, wrapHandler);
		return {node: node, type: type, handler: wrapHandler};
	},
	removeHandler: function(object) {
		this.unregisterEventHandler(object.node, object.type, object.handler);
	},
	/* OOP helpers */
	clone: function(object) {
		function DummyConstructor() {}
		DummyConstructor.prototype = object;
		return new DummyConstructor();
	},
	inherit: function(child, parent) {
		var prototype = this.clone(parent.prototype);
		prototype.constructor = child;
		child.prototype = prototype;
	},
	extend: function(type, properties) {
		this.forEachIn(properties, function(property, value) {
			type.prototype[property] = value;
		});
	},
	bind: function(func, object) {
		return function() {
			return func.apply(object,arguments);
		};
	},
	method: function(object, name) {
		return function() {
			return object[name].apply(object, arguments);
		};
	},
	/* Object manipulation */
	forEachIn: function(object, action) {
		for(var property in object) {
			if( Object.prototype.hasOwnProperty.call(object, property) &&
				Object.prototype.propertyIsEnumerable.call(object, property) ) {
				action(property, object[property]);
			}
		}
	},
	copy: function(object) {
		var copy = {};
		this.forEachIn(object, function(prop, val) {
			copy[prop] = val;
		});
		return copy;
	}
};

// Export as singleton
module.exports = new Utility();