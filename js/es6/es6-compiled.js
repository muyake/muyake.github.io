"use strict";

require("babel-polyfill");

var _marked = /*#__PURE__*/regeneratorRuntime.mark(somewords);

function somewords() {
	return regeneratorRuntime.wrap(function somewords$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return "hello";

				case 2:
					_context.next = 4;
					return "world";

				case 4:
				case "end":
					return _context.stop();
			}
		}
	}, _marked, this);
}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = somewords()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var word = _step.value;

		console.log(world);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}
