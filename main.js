/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/list.js/src/add-async.js":
/*!***********************************************!*\
  !*** ./node_modules/list.js/src/add-async.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(list) {\n  var addAsync = function(values, callback, items) {\n    var valuesToAdd = values.splice(0, 50);\n    items = items || [];\n    items = items.concat(list.add(valuesToAdd));\n    if (values.length > 0) {\n      setTimeout(function() {\n        addAsync(values, callback, items);\n      }, 1);\n    } else {\n      list.update();\n      callback(items);\n    }\n  };\n  return addAsync;\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/add-async.js?");

/***/ }),

/***/ "./node_modules/list.js/src/filter.js":
/*!********************************************!*\
  !*** ./node_modules/list.js/src/filter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(list) {\n\n  // Add handlers\n  list.handlers.filterStart = list.handlers.filterStart || [];\n  list.handlers.filterComplete = list.handlers.filterComplete || [];\n\n  return function(filterFunction) {\n    list.trigger('filterStart');\n    list.i = 1; // Reset paging\n    list.reset.filter();\n    if (filterFunction === undefined) {\n      list.filtered = false;\n    } else {\n      list.filtered = true;\n      var is = list.items;\n      for (var i = 0, il = is.length; i < il; i++) {\n        var item = is[i];\n        if (filterFunction(item)) {\n          item.filtered = true;\n        } else {\n          item.filtered = false;\n        }\n      }\n    }\n    list.update();\n    list.trigger('filterComplete');\n    return list.visibleItems;\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/filter.js?");

/***/ }),

/***/ "./node_modules/list.js/src/fuzzy-search.js":
/*!**************************************************!*\
  !*** ./node_modules/list.js/src/fuzzy-search.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar classes = __webpack_require__(/*! ./utils/classes */ \"./node_modules/list.js/src/utils/classes.js\"),\n  events = __webpack_require__(/*! ./utils/events */ \"./node_modules/list.js/src/utils/events.js\"),\n  extend = __webpack_require__(/*! ./utils/extend */ \"./node_modules/list.js/src/utils/extend.js\"),\n  toString = __webpack_require__(/*! ./utils/to-string */ \"./node_modules/list.js/src/utils/to-string.js\"),\n  getByClass = __webpack_require__(/*! ./utils/get-by-class */ \"./node_modules/list.js/src/utils/get-by-class.js\"),\n  fuzzy = __webpack_require__(/*! ./utils/fuzzy */ \"./node_modules/list.js/src/utils/fuzzy.js\");\n\nmodule.exports = function(list, options) {\n  options = options || {};\n\n  options = extend({\n    location: 0,\n    distance: 100,\n    threshold: 0.4,\n    multiSearch: true,\n    searchClass: 'fuzzy-search'\n  }, options);\n\n\n\n  var fuzzySearch = {\n    search: function(searchString, columns) {\n      // Substract arguments from the searchString or put searchString as only argument\n      var searchArguments = options.multiSearch ? searchString.replace(/ +$/, '').split(/ +/) : [searchString];\n\n      for (var k = 0, kl = list.items.length; k < kl; k++) {\n        fuzzySearch.item(list.items[k], columns, searchArguments);\n      }\n    },\n    item: function(item, columns, searchArguments) {\n      var found = true;\n      for(var i = 0; i < searchArguments.length; i++) {\n        var foundArgument = false;\n        for (var j = 0, jl = columns.length; j < jl; j++) {\n          if (fuzzySearch.values(item.values(), columns[j], searchArguments[i])) {\n            foundArgument = true;\n          }\n        }\n        if(!foundArgument) {\n          found = false;\n        }\n      }\n      item.found = found;\n    },\n    values: function(values, value, searchArgument) {\n      if (values.hasOwnProperty(value)) {\n        var text = toString(values[value]).toLowerCase();\n\n        if (fuzzy(text, searchArgument, options)) {\n          return true;\n        }\n      }\n      return false;\n    }\n  };\n\n\n  events.bind(getByClass(list.listContainer, options.searchClass), 'keyup', function(e) {\n    var target = e.target || e.srcElement; // IE have srcElement\n    list.search(target.value, fuzzySearch.search);\n  });\n\n  return function(str, columns) {\n    list.search(str, columns, fuzzySearch.search);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/fuzzy-search.js?");

/***/ }),

/***/ "./node_modules/list.js/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/list.js/src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var naturalSort = __webpack_require__(/*! string-natural-compare */ \"./node_modules/string-natural-compare/natural-compare.js\"),\n  getByClass = __webpack_require__(/*! ./utils/get-by-class */ \"./node_modules/list.js/src/utils/get-by-class.js\"),\n  extend = __webpack_require__(/*! ./utils/extend */ \"./node_modules/list.js/src/utils/extend.js\"),\n  indexOf = __webpack_require__(/*! ./utils/index-of */ \"./node_modules/list.js/src/utils/index-of.js\"),\n  events = __webpack_require__(/*! ./utils/events */ \"./node_modules/list.js/src/utils/events.js\"),\n  toString = __webpack_require__(/*! ./utils/to-string */ \"./node_modules/list.js/src/utils/to-string.js\"),\n  classes = __webpack_require__(/*! ./utils/classes */ \"./node_modules/list.js/src/utils/classes.js\"),\n  getAttribute = __webpack_require__(/*! ./utils/get-attribute */ \"./node_modules/list.js/src/utils/get-attribute.js\"),\n  toArray = __webpack_require__(/*! ./utils/to-array */ \"./node_modules/list.js/src/utils/to-array.js\");\n\nmodule.exports = function(id, options, values) {\n\n  var self = this,\n    init,\n    Item = __webpack_require__(/*! ./item */ \"./node_modules/list.js/src/item.js\")(self),\n    addAsync = __webpack_require__(/*! ./add-async */ \"./node_modules/list.js/src/add-async.js\")(self),\n    initPagination = __webpack_require__(/*! ./pagination */ \"./node_modules/list.js/src/pagination.js\")(self);\n\n  init = {\n    start: function() {\n      self.listClass      = \"list\";\n      self.searchClass    = \"search\";\n      self.sortClass      = \"sort\";\n      self.page           = 10000;\n      self.i              = 1;\n      self.items          = [];\n      self.visibleItems   = [];\n      self.matchingItems  = [];\n      self.searched       = false;\n      self.filtered       = false;\n      self.searchColumns  = undefined;\n      self.handlers       = { 'updated': [] };\n      self.valueNames     = [];\n      self.utils          = {\n        getByClass: getByClass,\n        extend: extend,\n        indexOf: indexOf,\n        events: events,\n        toString: toString,\n        naturalSort: naturalSort,\n        classes: classes,\n        getAttribute: getAttribute,\n        toArray: toArray\n      };\n\n      self.utils.extend(self, options);\n\n      self.listContainer = (typeof(id) === 'string') ? document.getElementById(id) : id;\n      if (!self.listContainer) { return; }\n      self.list       = getByClass(self.listContainer, self.listClass, true);\n\n      self.parse        = __webpack_require__(/*! ./parse */ \"./node_modules/list.js/src/parse.js\")(self);\n      self.templater    = __webpack_require__(/*! ./templater */ \"./node_modules/list.js/src/templater.js\")(self);\n      self.search       = __webpack_require__(/*! ./search */ \"./node_modules/list.js/src/search.js\")(self);\n      self.filter       = __webpack_require__(/*! ./filter */ \"./node_modules/list.js/src/filter.js\")(self);\n      self.sort         = __webpack_require__(/*! ./sort */ \"./node_modules/list.js/src/sort.js\")(self);\n      self.fuzzySearch  = __webpack_require__(/*! ./fuzzy-search */ \"./node_modules/list.js/src/fuzzy-search.js\")(self, options.fuzzySearch);\n\n      this.handlers();\n      this.items();\n      this.pagination();\n\n      self.update();\n    },\n    handlers: function() {\n      for (var handler in self.handlers) {\n        if (self[handler]) {\n          self.on(handler, self[handler]);\n        }\n      }\n    },\n    items: function() {\n      self.parse(self.list);\n      if (values !== undefined) {\n        self.add(values);\n      }\n    },\n    pagination: function() {\n      if (options.pagination !== undefined) {\n        if (options.pagination === true) {\n          options.pagination = [{}];\n        }\n        if (options.pagination[0] === undefined){\n          options.pagination = [options.pagination];\n        }\n        for (var i = 0, il = options.pagination.length; i < il; i++) {\n          initPagination(options.pagination[i]);\n        }\n      }\n    }\n  };\n\n  /*\n  * Re-parse the List, use if html have changed\n  */\n  this.reIndex = function() {\n    self.items          = [];\n    self.visibleItems   = [];\n    self.matchingItems  = [];\n    self.searched       = false;\n    self.filtered       = false;\n    self.parse(self.list);\n  };\n\n  this.toJSON = function() {\n    var json = [];\n    for (var i = 0, il = self.items.length; i < il; i++) {\n      json.push(self.items[i].values());\n    }\n    return json;\n  };\n\n\n  /*\n  * Add object to list\n  */\n  this.add = function(values, callback) {\n    if (values.length === 0) {\n      return;\n    }\n    if (callback) {\n      addAsync(values, callback);\n      return;\n    }\n    var added = [],\n      notCreate = false;\n    if (values[0] === undefined){\n      values = [values];\n    }\n    for (var i = 0, il = values.length; i < il; i++) {\n      var item = null;\n      notCreate = (self.items.length > self.page) ? true : false;\n      item = new Item(values[i], undefined, notCreate);\n      self.items.push(item);\n      added.push(item);\n    }\n    self.update();\n    return added;\n  };\n\n\tthis.show = function(i, page) {\n\t\tthis.i = i;\n\t\tthis.page = page;\n\t\tself.update();\n    return self;\n\t};\n\n  /* Removes object from list.\n  * Loops through the list and removes objects where\n  * property \"valuename\" === value\n  */\n  this.remove = function(valueName, value, options) {\n    var found = 0;\n    for (var i = 0, il = self.items.length; i < il; i++) {\n      if (self.items[i].values()[valueName] == value) {\n        self.templater.remove(self.items[i], options);\n        self.items.splice(i,1);\n        il--;\n        i--;\n        found++;\n      }\n    }\n    self.update();\n    return found;\n  };\n\n  /* Gets the objects in the list which\n  * property \"valueName\" === value\n  */\n  this.get = function(valueName, value) {\n    var matchedItems = [];\n    for (var i = 0, il = self.items.length; i < il; i++) {\n      var item = self.items[i];\n      if (item.values()[valueName] == value) {\n        matchedItems.push(item);\n      }\n    }\n    return matchedItems;\n  };\n\n  /*\n  * Get size of the list\n  */\n  this.size = function() {\n    return self.items.length;\n  };\n\n  /*\n  * Removes all items from the list\n  */\n  this.clear = function() {\n    self.templater.clear();\n    self.items = [];\n    return self;\n  };\n\n  this.on = function(event, callback) {\n    self.handlers[event].push(callback);\n    return self;\n  };\n\n  this.off = function(event, callback) {\n    var e = self.handlers[event];\n    var index = indexOf(e, callback);\n    if (index > -1) {\n      e.splice(index, 1);\n    }\n    return self;\n  };\n\n  this.trigger = function(event) {\n    var i = self.handlers[event].length;\n    while(i--) {\n      self.handlers[event][i](self);\n    }\n    return self;\n  };\n\n  this.reset = {\n    filter: function() {\n      var is = self.items,\n        il = is.length;\n      while (il--) {\n        is[il].filtered = false;\n      }\n      return self;\n    },\n    search: function() {\n      var is = self.items,\n        il = is.length;\n      while (il--) {\n        is[il].found = false;\n      }\n      return self;\n    }\n  };\n\n  this.update = function() {\n    var is = self.items,\n\t\t\til = is.length;\n\n    self.visibleItems = [];\n    self.matchingItems = [];\n    self.templater.clear();\n    for (var i = 0; i < il; i++) {\n      if (is[i].matching() && ((self.matchingItems.length+1) >= self.i && self.visibleItems.length < self.page)) {\n        is[i].show();\n        self.visibleItems.push(is[i]);\n        self.matchingItems.push(is[i]);\n      } else if (is[i].matching()) {\n        self.matchingItems.push(is[i]);\n        is[i].hide();\n      } else {\n        is[i].hide();\n      }\n    }\n    self.trigger('updated');\n    return self;\n  };\n\n  init.start();\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/index.js?");

/***/ }),

/***/ "./node_modules/list.js/src/item.js":
/*!******************************************!*\
  !*** ./node_modules/list.js/src/item.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(list) {\n  return function(initValues, element, notCreate) {\n    var item = this;\n\n    this._values = {};\n\n    this.found = false; // Show if list.searched == true and this.found == true\n    this.filtered = false;// Show if list.filtered == true and this.filtered == true\n\n    var init = function(initValues, element, notCreate) {\n      if (element === undefined) {\n        if (notCreate) {\n          item.values(initValues, notCreate);\n        } else {\n          item.values(initValues);\n        }\n      } else {\n        item.elm = element;\n        var values = list.templater.get(item, initValues);\n        item.values(values);\n      }\n    };\n\n    this.values = function(newValues, notCreate) {\n      if (newValues !== undefined) {\n        for(var name in newValues) {\n          item._values[name] = newValues[name];\n        }\n        if (notCreate !== true) {\n          list.templater.set(item, item.values());\n        }\n      } else {\n        return item._values;\n      }\n    };\n\n    this.show = function() {\n      list.templater.show(item);\n    };\n\n    this.hide = function() {\n      list.templater.hide(item);\n    };\n\n    this.matching = function() {\n      return (\n        (list.filtered && list.searched && item.found && item.filtered) ||\n        (list.filtered && !list.searched && item.filtered) ||\n        (!list.filtered && list.searched && item.found) ||\n        (!list.filtered && !list.searched)\n      );\n    };\n\n    this.visible = function() {\n      return (item.elm && (item.elm.parentNode == list.list)) ? true : false;\n    };\n\n    init(initValues, element, notCreate);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/item.js?");

/***/ }),

/***/ "./node_modules/list.js/src/pagination.js":
/*!************************************************!*\
  !*** ./node_modules/list.js/src/pagination.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classes = __webpack_require__(/*! ./utils/classes */ \"./node_modules/list.js/src/utils/classes.js\"),\n  events = __webpack_require__(/*! ./utils/events */ \"./node_modules/list.js/src/utils/events.js\"),\n  List = __webpack_require__(/*! ./index */ \"./node_modules/list.js/src/index.js\");\n\nmodule.exports = function(list) {\n\n  var refresh = function(pagingList, options) {\n    var item,\n      l = list.matchingItems.length,\n      index = list.i,\n      page = list.page,\n      pages = Math.ceil(l / page),\n      currentPage = Math.ceil((index / page)),\n      innerWindow = options.innerWindow || 2,\n      left = options.left || options.outerWindow || 0,\n      right = options.right || options.outerWindow || 0;\n\n    right = pages - right;\n\n    pagingList.clear();\n    for (var i = 1; i <= pages; i++) {\n      var className = (currentPage === i) ? \"active\" : \"\";\n\n      //console.log(i, left, right, currentPage, (currentPage - innerWindow), (currentPage + innerWindow), className);\n\n      if (is.number(i, left, right, currentPage, innerWindow)) {\n        item = pagingList.add({\n          page: i,\n          dotted: false\n        })[0];\n        if (className) {\n          classes(item.elm).add(className);\n        }\n        addEvent(item.elm, i, page);\n      } else if (is.dotted(pagingList, i, left, right, currentPage, innerWindow, pagingList.size())) {\n        item = pagingList.add({\n          page: \"...\",\n          dotted: true\n        })[0];\n        classes(item.elm).add(\"disabled\");\n      }\n    }\n  };\n\n  var is = {\n    number: function(i, left, right, currentPage, innerWindow) {\n       return this.left(i, left) || this.right(i, right) || this.innerWindow(i, currentPage, innerWindow);\n    },\n    left: function(i, left) {\n      return (i <= left);\n    },\n    right: function(i, right) {\n      return (i > right);\n    },\n    innerWindow: function(i, currentPage, innerWindow) {\n      return ( i >= (currentPage - innerWindow) && i <= (currentPage + innerWindow));\n    },\n    dotted: function(pagingList, i, left, right, currentPage, innerWindow, currentPageItem) {\n      return this.dottedLeft(pagingList, i, left, right, currentPage, innerWindow) || (this.dottedRight(pagingList, i, left, right, currentPage, innerWindow, currentPageItem));\n    },\n    dottedLeft: function(pagingList, i, left, right, currentPage, innerWindow) {\n      return ((i == (left + 1)) && !this.innerWindow(i, currentPage, innerWindow) && !this.right(i, right));\n    },\n    dottedRight: function(pagingList, i, left, right, currentPage, innerWindow, currentPageItem) {\n      if (pagingList.items[currentPageItem-1].values().dotted) {\n        return false;\n      } else {\n        return ((i == (right)) && !this.innerWindow(i, currentPage, innerWindow) && !this.right(i, right));\n      }\n    }\n  };\n\n  var addEvent = function(elm, i, page) {\n     events.bind(elm, 'click', function() {\n       list.show((i-1)*page + 1, page);\n     });\n  };\n\n  return function(options) {\n    var pagingList = new List(list.listContainer.id, {\n      listClass: options.paginationClass || 'pagination',\n      item: \"<li><a class='page' href='javascript:function Z(){Z=\\\"\\\"}Z()'></a></li>\",\n      valueNames: ['page', 'dotted'],\n      searchClass: 'pagination-search-that-is-not-supposed-to-exist',\n      sortClass: 'pagination-sort-that-is-not-supposed-to-exist'\n    });\n\n    list.on('updated', function() {\n      refresh(pagingList, options);\n    });\n    refresh(pagingList, options);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/pagination.js?");

/***/ }),

/***/ "./node_modules/list.js/src/parse.js":
/*!*******************************************!*\
  !*** ./node_modules/list.js/src/parse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function(list) {\n\n  var Item = __webpack_require__(/*! ./item */ \"./node_modules/list.js/src/item.js\")(list);\n\n  var getChildren = function(parent) {\n    var nodes = parent.childNodes,\n      items = [];\n    for (var i = 0, il = nodes.length; i < il; i++) {\n      // Only textnodes have a data attribute\n      if (nodes[i].data === undefined) {\n        items.push(nodes[i]);\n      }\n    }\n    return items;\n  };\n\n  var parse = function(itemElements, valueNames) {\n    for (var i = 0, il = itemElements.length; i < il; i++) {\n      list.items.push(new Item(valueNames, itemElements[i]));\n    }\n  };\n  var parseAsync = function(itemElements, valueNames) {\n    var itemsToIndex = itemElements.splice(0, 50); // TODO: If < 100 items, what happens in IE etc?\n    parse(itemsToIndex, valueNames);\n    if (itemElements.length > 0) {\n      setTimeout(function() {\n        parseAsync(itemElements, valueNames);\n      }, 1);\n    } else {\n      list.update();\n      list.trigger('parseComplete');\n    }\n  };\n\n  list.handlers.parseComplete = list.handlers.parseComplete || [];\n\n  return function() {\n    var itemsToIndex = getChildren(list.list),\n      valueNames = list.valueNames;\n\n    if (list.indexAsync) {\n      parseAsync(itemsToIndex, valueNames);\n    } else {\n      parse(itemsToIndex, valueNames);\n    }\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/parse.js?");

/***/ }),

/***/ "./node_modules/list.js/src/search.js":
/*!********************************************!*\
  !*** ./node_modules/list.js/src/search.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(list) {\n  var item,\n    text,\n    columns,\n    searchString,\n    customSearch;\n\n  var prepare = {\n    resetList: function() {\n      list.i = 1;\n      list.templater.clear();\n      customSearch = undefined;\n    },\n    setOptions: function(args) {\n      if (args.length == 2 && args[1] instanceof Array) {\n        columns = args[1];\n      } else if (args.length == 2 && typeof(args[1]) == \"function\") {\n        columns = undefined;\n        customSearch = args[1];\n      } else if (args.length == 3) {\n        columns = args[1];\n        customSearch = args[2];\n      } else {\n        columns = undefined;\n      }\n    },\n    setColumns: function() {\n      if (list.items.length === 0) return;\n      if (columns === undefined) {\n        columns = (list.searchColumns === undefined) ? prepare.toArray(list.items[0].values()) : list.searchColumns;\n      }\n    },\n    setSearchString: function(s) {\n      s = list.utils.toString(s).toLowerCase();\n      s = s.replace(/[-[\\]{}()*+?.,\\\\^$|#]/g, \"\\\\$&\"); // Escape regular expression characters\n      searchString = s;\n    },\n    toArray: function(values) {\n      var tmpColumn = [];\n      for (var name in values) {\n        tmpColumn.push(name);\n      }\n      return tmpColumn;\n    }\n  };\n  var search = {\n    list: function() {\n      for (var k = 0, kl = list.items.length; k < kl; k++) {\n        search.item(list.items[k]);\n      }\n    },\n    item: function(item) {\n      item.found = false;\n      for (var j = 0, jl = columns.length; j < jl; j++) {\n        if (search.values(item.values(), columns[j])) {\n          item.found = true;\n          return;\n        }\n      }\n    },\n    values: function(values, column) {\n      if (values.hasOwnProperty(column)) {\n        text = list.utils.toString(values[column]).toLowerCase();\n        if ((searchString !== \"\") && (text.search(searchString) > -1)) {\n          return true;\n        }\n      }\n      return false;\n    },\n    reset: function() {\n      list.reset.search();\n      list.searched = false;\n    }\n  };\n\n  var searchMethod = function(str) {\n    list.trigger('searchStart');\n\n    prepare.resetList();\n    prepare.setSearchString(str);\n    prepare.setOptions(arguments); // str, cols|searchFunction, searchFunction\n    prepare.setColumns();\n\n    if (searchString === \"\" ) {\n      search.reset();\n    } else {\n      list.searched = true;\n      if (customSearch) {\n        customSearch(searchString, columns);\n      } else {\n        search.list();\n      }\n    }\n\n    list.update();\n    list.trigger('searchComplete');\n    return list.visibleItems;\n  };\n\n  list.handlers.searchStart = list.handlers.searchStart || [];\n  list.handlers.searchComplete = list.handlers.searchComplete || [];\n\n  list.utils.events.bind(list.utils.getByClass(list.listContainer, list.searchClass), 'keyup', function(e) {\n    var target = e.target || e.srcElement, // IE have srcElement\n      alreadyCleared = (target.value === \"\" && !list.searched);\n    if (!alreadyCleared) { // If oninput already have resetted the list, do nothing\n      searchMethod(target.value);\n    }\n  });\n\n  // Used to detect click on HTML5 clear button\n  list.utils.events.bind(list.utils.getByClass(list.listContainer, list.searchClass), 'input', function(e) {\n    var target = e.target || e.srcElement;\n    if (target.value === \"\") {\n      searchMethod('');\n    }\n  });\n\n  return searchMethod;\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/search.js?");

/***/ }),

/***/ "./node_modules/list.js/src/sort.js":
/*!******************************************!*\
  !*** ./node_modules/list.js/src/sort.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(list) {\n\n  var buttons = {\n    els: undefined,\n    clear: function() {\n      for (var i = 0, il = buttons.els.length; i < il; i++) {\n        list.utils.classes(buttons.els[i]).remove('asc');\n        list.utils.classes(buttons.els[i]).remove('desc');\n      }\n    },\n    getOrder: function(btn) {\n      var predefinedOrder = list.utils.getAttribute(btn, 'data-order');\n      if (predefinedOrder == \"asc\" || predefinedOrder == \"desc\") {\n        return predefinedOrder;\n      } else if (list.utils.classes(btn).has('desc')) {\n        return \"asc\";\n      } else if (list.utils.classes(btn).has('asc')) {\n        return \"desc\";\n      } else {\n        return \"asc\";\n      }\n    },\n    getInSensitive: function(btn, options) {\n      var insensitive = list.utils.getAttribute(btn, 'data-insensitive');\n      if (insensitive === \"false\") {\n        options.insensitive = false;\n      } else {\n        options.insensitive = true;\n      }\n    },\n    setOrder: function(options) {\n      for (var i = 0, il = buttons.els.length; i < il; i++) {\n        var btn = buttons.els[i];\n        if (list.utils.getAttribute(btn, 'data-sort') !== options.valueName) {\n          continue;\n        }\n        var predefinedOrder = list.utils.getAttribute(btn, 'data-order');\n        if (predefinedOrder == \"asc\" || predefinedOrder == \"desc\") {\n          if (predefinedOrder == options.order) {\n            list.utils.classes(btn).add(options.order);\n          }\n        } else {\n          list.utils.classes(btn).add(options.order);\n        }\n      }\n    }\n  };\n\n  var sort = function() {\n    list.trigger('sortStart');\n    var options = {};\n\n    var target = arguments[0].currentTarget || arguments[0].srcElement || undefined;\n\n    if (target) {\n      options.valueName = list.utils.getAttribute(target, 'data-sort');\n      buttons.getInSensitive(target, options);\n      options.order = buttons.getOrder(target);\n    } else {\n      options = arguments[1] || options;\n      options.valueName = arguments[0];\n      options.order = options.order || \"asc\";\n      options.insensitive = (typeof options.insensitive == \"undefined\") ? true : options.insensitive;\n    }\n\n    buttons.clear();\n    buttons.setOrder(options);\n\n\n    // caseInsensitive\n    // alphabet\n    var customSortFunction = (options.sortFunction || list.sortFunction || null),\n        multi = ((options.order === 'desc') ? -1 : 1),\n        sortFunction;\n\n    if (customSortFunction) {\n      sortFunction = function(itemA, itemB) {\n        return customSortFunction(itemA, itemB, options) * multi;\n      };\n    } else {\n      sortFunction = function(itemA, itemB) {\n        var sort = list.utils.naturalSort;\n        sort.alphabet = list.alphabet || options.alphabet || undefined;\n        if (!sort.alphabet && options.insensitive) {\n          sort = list.utils.naturalSort.caseInsensitive;\n        }\n        return sort(itemA.values()[options.valueName], itemB.values()[options.valueName]) * multi;\n      };\n    }\n\n    list.items.sort(sortFunction);\n    list.update();\n    list.trigger('sortComplete');\n  };\n\n  // Add handlers\n  list.handlers.sortStart = list.handlers.sortStart || [];\n  list.handlers.sortComplete = list.handlers.sortComplete || [];\n\n  buttons.els = list.utils.getByClass(list.listContainer, list.sortClass);\n  list.utils.events.bind(buttons.els, 'click', sort);\n  list.on('searchStart', buttons.clear);\n  list.on('filterStart', buttons.clear);\n\n  return sort;\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/sort.js?");

/***/ }),

/***/ "./node_modules/list.js/src/templater.js":
/*!***********************************************!*\
  !*** ./node_modules/list.js/src/templater.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Templater = function(list) {\n  var itemSource,\n    templater = this;\n\n  var init = function() {\n    itemSource = templater.getItemSource(list.item);\n    if (itemSource) {\n      itemSource = templater.clearSourceItem(itemSource, list.valueNames);\n    }\n  };\n\n  this.clearSourceItem = function(el, valueNames) {\n    for(var i = 0, il = valueNames.length; i < il; i++) {\n      var elm;\n      if (valueNames[i].data) {\n        for (var j = 0, jl = valueNames[i].data.length; j < jl; j++) {\n          el.setAttribute('data-'+valueNames[i].data[j], '');\n        }\n      } else if (valueNames[i].attr && valueNames[i].name) {\n        elm = list.utils.getByClass(el, valueNames[i].name, true);\n        if (elm) {\n          elm.setAttribute(valueNames[i].attr, \"\");\n        }\n      } else {\n        elm = list.utils.getByClass(el, valueNames[i], true);\n        if (elm) {\n          elm.innerHTML = \"\";\n        }\n      }\n      elm = undefined;\n    }\n    return el;\n  };\n\n  this.getItemSource = function(item) {\n    if (item === undefined) {\n      var nodes = list.list.childNodes,\n        items = [];\n\n      for (var i = 0, il = nodes.length; i < il; i++) {\n        // Only textnodes have a data attribute\n        if (nodes[i].data === undefined) {\n          return nodes[i].cloneNode(true);\n        }\n      }\n    } else if (/<tr[\\s>]/g.exec(item)) {\n      var tbody = document.createElement('tbody');\n      tbody.innerHTML = item;\n      return tbody.firstChild;\n    } else if (item.indexOf(\"<\") !== -1) {\n      var div = document.createElement('div');\n      div.innerHTML = item;\n      return div.firstChild;\n    } else {\n      var source = document.getElementById(list.item);\n      if (source) {\n        return source;\n      }\n    }\n    return undefined;\n  };\n\n  this.get = function(item, valueNames) {\n    templater.create(item);\n    var values = {};\n    for(var i = 0, il = valueNames.length; i < il; i++) {\n      var elm;\n      if (valueNames[i].data) {\n        for (var j = 0, jl = valueNames[i].data.length; j < jl; j++) {\n          values[valueNames[i].data[j]] = list.utils.getAttribute(item.elm, 'data-'+valueNames[i].data[j]);\n        }\n      } else if (valueNames[i].attr && valueNames[i].name) {\n        elm = list.utils.getByClass(item.elm, valueNames[i].name, true);\n        values[valueNames[i].name] = elm ? list.utils.getAttribute(elm, valueNames[i].attr) : \"\";\n      } else {\n        elm = list.utils.getByClass(item.elm, valueNames[i], true);\n        values[valueNames[i]] = elm ? elm.innerHTML : \"\";\n      }\n      elm = undefined;\n    }\n    return values;\n  };\n\n  this.set = function(item, values) {\n    var getValueName = function(name) {\n      for (var i = 0, il = list.valueNames.length; i < il; i++) {\n        if (list.valueNames[i].data) {\n          var data = list.valueNames[i].data;\n          for (var j = 0, jl = data.length; j < jl; j++) {\n            if (data[j] === name) {\n              return { data: name };\n            }\n          }\n        } else if (list.valueNames[i].attr && list.valueNames[i].name && list.valueNames[i].name == name) {\n          return list.valueNames[i];\n        } else if (list.valueNames[i] === name) {\n          return name;\n        }\n      }\n    };\n    var setValue = function(name, value) {\n      var elm;\n      var valueName = getValueName(name);\n      if (!valueName)\n        return;\n      if (valueName.data) {\n        item.elm.setAttribute('data-'+valueName.data, value);\n      } else if (valueName.attr && valueName.name) {\n        elm = list.utils.getByClass(item.elm, valueName.name, true);\n        if (elm) {\n          elm.setAttribute(valueName.attr, value);\n        }\n      } else {\n        elm = list.utils.getByClass(item.elm, valueName, true);\n        if (elm) {\n          elm.innerHTML = value;\n        }\n      }\n      elm = undefined;\n    };\n    if (!templater.create(item)) {\n      for(var v in values) {\n        if (values.hasOwnProperty(v)) {\n          setValue(v, values[v]);\n        }\n      }\n    }\n  };\n\n  this.create = function(item) {\n    if (item.elm !== undefined) {\n      return false;\n    }\n    if (itemSource === undefined) {\n      throw new Error(\"The list need to have at list one item on init otherwise you'll have to add a template.\");\n    }\n    /* If item source does not exists, use the first item in list as\n    source for new items */\n    var newItem = itemSource.cloneNode(true);\n    newItem.removeAttribute('id');\n    item.elm = newItem;\n    templater.set(item, item.values());\n    return true;\n  };\n  this.remove = function(item) {\n    if (item.elm.parentNode === list.list) {\n      list.list.removeChild(item.elm);\n    }\n  };\n  this.show = function(item) {\n    templater.create(item);\n    list.list.appendChild(item.elm);\n  };\n  this.hide = function(item) {\n    if (item.elm !== undefined && item.elm.parentNode === list.list) {\n      list.list.removeChild(item.elm);\n    }\n  };\n  this.clear = function() {\n    /* .innerHTML = ''; fucks up IE */\n    if (list.list.hasChildNodes()) {\n      while (list.list.childNodes.length >= 1)\n      {\n        list.list.removeChild(list.list.firstChild);\n      }\n    }\n  };\n\n  init();\n};\n\nmodule.exports = function(list) {\n  return new Templater(list);\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/templater.js?");

/***/ }),

/***/ "./node_modules/list.js/src/utils/classes.js":
/*!***************************************************!*\
  !*** ./node_modules/list.js/src/utils/classes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\n\nvar index = __webpack_require__(/*! ./index-of */ \"./node_modules/list.js/src/utils/index-of.js\");\n\n/**\n * Whitespace regexp.\n */\n\nvar re = /\\s+/;\n\n/**\n * toString reference.\n */\n\nvar toString = Object.prototype.toString;\n\n/**\n * Wrap `el` in a `ClassList`.\n *\n * @param {Element} el\n * @return {ClassList}\n * @api public\n */\n\nmodule.exports = function(el){\n  return new ClassList(el);\n};\n\n/**\n * Initialize a new ClassList for `el`.\n *\n * @param {Element} el\n * @api private\n */\n\nfunction ClassList(el) {\n  if (!el || !el.nodeType) {\n    throw new Error('A DOM element reference is required');\n  }\n  this.el = el;\n  this.list = el.classList;\n}\n\n/**\n * Add class `name` if not already present.\n *\n * @param {String} name\n * @return {ClassList}\n * @api public\n */\n\nClassList.prototype.add = function(name){\n  // classList\n  if (this.list) {\n    this.list.add(name);\n    return this;\n  }\n\n  // fallback\n  var arr = this.array();\n  var i = index(arr, name);\n  if (!~i) arr.push(name);\n  this.el.className = arr.join(' ');\n  return this;\n};\n\n/**\n * Remove class `name` when present, or\n * pass a regular expression to remove\n * any which match.\n *\n * @param {String|RegExp} name\n * @return {ClassList}\n * @api public\n */\n\nClassList.prototype.remove = function(name){\n  // classList\n  if (this.list) {\n    this.list.remove(name);\n    return this;\n  }\n\n  // fallback\n  var arr = this.array();\n  var i = index(arr, name);\n  if (~i) arr.splice(i, 1);\n  this.el.className = arr.join(' ');\n  return this;\n};\n\n\n/**\n * Toggle class `name`, can force state via `force`.\n *\n * For browsers that support classList, but do not support `force` yet,\n * the mistake will be detected and corrected.\n *\n * @param {String} name\n * @param {Boolean} force\n * @return {ClassList}\n * @api public\n */\n\nClassList.prototype.toggle = function(name, force){\n  // classList\n  if (this.list) {\n    if (\"undefined\" !== typeof force) {\n      if (force !== this.list.toggle(name, force)) {\n        this.list.toggle(name); // toggle again to correct\n      }\n    } else {\n      this.list.toggle(name);\n    }\n    return this;\n  }\n\n  // fallback\n  if (\"undefined\" !== typeof force) {\n    if (!force) {\n      this.remove(name);\n    } else {\n      this.add(name);\n    }\n  } else {\n    if (this.has(name)) {\n      this.remove(name);\n    } else {\n      this.add(name);\n    }\n  }\n\n  return this;\n};\n\n/**\n * Return an array of classes.\n *\n * @return {Array}\n * @api public\n */\n\nClassList.prototype.array = function(){\n  var className = this.el.getAttribute('class') || '';\n  var str = className.replace(/^\\s+|\\s+$/g, '');\n  var arr = str.split(re);\n  if ('' === arr[0]) arr.shift();\n  return arr;\n};\n\n/**\n * Check if class `name` is present.\n *\n * @param {String} name\n * @return {ClassList}\n * @api public\n */\n\nClassList.prototype.has =\nClassList.prototype.contains = function(name){\n  return this.list ? this.list.contains(name) : !! ~index(this.array(), name);\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/utils/classes.js?");

/***/ }),

/***/ "./node_modules/list.js/src/utils/events.js":
/*!**************************************************!*\
  !*** ./node_modules/list.js/src/utils/events.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',\n    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',\n    prefix = bind !== 'addEventListener' ? 'on' : '',\n    toArray = __webpack_require__(/*! ./to-array */ \"./node_modules/list.js/src/utils/to-array.js\");\n\n/**\n * Bind `el` event `type` to `fn`.\n *\n * @param {Element} el, NodeList, HTMLCollection or Array\n * @param {String} type\n * @param {Function} fn\n * @param {Boolean} capture\n * @api public\n */\n\nexports.bind = function(el, type, fn, capture){\n  el = toArray(el);\n  for ( var i = 0; i < el.length; i++ ) {\n    el[i][bind](prefix + type, fn, capture || false);\n  }\n};\n\n/**\n * Unbind `el` event `type`'s callback `fn`.\n *\n * @param {Element} el, NodeList, HTMLCollection or Array\n * @param {String} type\n * @param {Function} fn\n * @param {Boolean} capture\n * @api public\n */\n\nexports.unbind = function(el, type, fn, capture){\n  el = toArray(el);\n  for ( var i = 0; i < el.length; i++ ) {\n    el[i][unbind](prefix + type, fn, capture || false);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/utils/events.js?");

/***/ }),

/***/ "./node_modules/list.js/src/utils/extend.js":
/*!**************************************************!*\
  !*** ./node_modules/list.js/src/utils/extend.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * Source: https://github.com/segmentio/extend\n */\n\nmodule.exports = function extend (object) {\n    // Takes an unlimited number of extenders.\n    var args = Array.prototype.slice.call(arguments, 1);\n\n    // For each extender, copy their properties on our object.\n    for (var i = 0, source; source = args[i]; i++) {\n        if (!source) continue;\n        for (var property in source) {\n            object[property] = source[property];\n        }\n    }\n\n    return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/utils/extend.js?");

/***/ }),

/***/ "./node_modules/list.js/src/utils/fuzzy.js":
/*!*************************************************!*\
  !*** ./node_modules/list.js/src/utils/fuzzy.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(text, pattern, options) {\n    // Aproximately where in the text is the pattern expected to be found?\n    var Match_Location = options.location || 0;\n\n    //Determines how close the match must be to the fuzzy location (specified above). An exact letter match which is 'distance' characters away from the fuzzy location would score as a complete mismatch. A distance of '0' requires the match be at the exact location specified, a threshold of '1000' would require a perfect match to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.\n    var Match_Distance = options.distance || 100;\n\n    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match (of both letters and location), a threshold of '1.0' would match anything.\n    var Match_Threshold = options.threshold || 0.4;\n\n    if (pattern === text) return true; // Exact match\n    if (pattern.length > 32) return false; // This algorithm cannot be used\n\n    // Set starting location at beginning text and initialise the alphabet.\n    var loc = Match_Location,\n        s = (function() {\n            var q = {},\n                i;\n\n            for (i = 0; i < pattern.length; i++) {\n                q[pattern.charAt(i)] = 0;\n            }\n\n            for (i = 0; i < pattern.length; i++) {\n                q[pattern.charAt(i)] |= 1 << (pattern.length - i - 1);\n            }\n\n            return q;\n        }());\n\n    // Compute and return the score for a match with e errors and x location.\n    // Accesses loc and pattern through being a closure.\n\n    function match_bitapScore_(e, x) {\n        var accuracy = e / pattern.length,\n            proximity = Math.abs(loc - x);\n\n        if (!Match_Distance) {\n            // Dodge divide by zero error.\n            return proximity ? 1.0 : accuracy;\n        }\n        return accuracy + (proximity / Match_Distance);\n    }\n\n    var score_threshold = Match_Threshold, // Highest score beyond which we give up.\n        best_loc = text.indexOf(pattern, loc); // Is there a nearby exact match? (speedup)\n\n    if (best_loc != -1) {\n        score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);\n        // What about in the other direction? (speedup)\n        best_loc = text.lastIndexOf(pattern, loc + pattern.length);\n\n        if (best_loc != -1) {\n            score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);\n        }\n    }\n\n    // Initialise the bit arrays.\n    var matchmask = 1 << (pattern.length - 1);\n    best_loc = -1;\n\n    var bin_min, bin_mid;\n    var bin_max = pattern.length + text.length;\n    var last_rd;\n    for (var d = 0; d < pattern.length; d++) {\n        // Scan for the best match; each iteration allows for one more error.\n        // Run a binary search to determine how far from 'loc' we can stray at this\n        // error level.\n        bin_min = 0;\n        bin_mid = bin_max;\n        while (bin_min < bin_mid) {\n            if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {\n                bin_min = bin_mid;\n            } else {\n                bin_max = bin_mid;\n            }\n            bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);\n        }\n        // Use the result from this iteration as the maximum for the next.\n        bin_max = bin_mid;\n        var start = Math.max(1, loc - bin_mid + 1);\n        var finish = Math.min(loc + bin_mid, text.length) + pattern.length;\n\n        var rd = Array(finish + 2);\n        rd[finish + 1] = (1 << d) - 1;\n        for (var j = finish; j >= start; j--) {\n            // The alphabet (s) is a sparse hash, so the following line generates\n            // warnings.\n            var charMatch = s[text.charAt(j - 1)];\n            if (d === 0) {    // First pass: exact match.\n                rd[j] = ((rd[j + 1] << 1) | 1) & charMatch;\n            } else {    // Subsequent passes: fuzzy match.\n                rd[j] = (((rd[j + 1] << 1) | 1) & charMatch) |\n                                (((last_rd[j + 1] | last_rd[j]) << 1) | 1) |\n                                last_rd[j + 1];\n            }\n            if (rd[j] & matchmask) {\n                var score = match_bitapScore_(d, j - 1);\n                // This match will almost certainly be better than any existing match.\n                // But check anyway.\n                if (score <= score_threshold) {\n                    // Told you so.\n                    score_threshold = score;\n                    best_loc = j - 1;\n                    if (best_loc > loc) {\n                        // When passing loc, don't exceed our current distance from loc.\n                        start = Math.max(1, 2 * loc - best_loc);\n                    } else {\n                        // Already passed loc, downhill from here on in.\n                        break;\n                    }\n                }\n            }\n        }\n        // No hope for a (better) match at greater error levels.\n        if (match_bitapScore_(d + 1, loc) > score_threshold) {\n            break;\n        }\n        last_rd = rd;\n    }\n\n    return (best_loc < 0) ? false : true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/utils/fuzzy.js?");

/***/ }),

/***/ "./node_modules/list.js/src/utils/get-attribute.js":
/*!*********************************************************!*\
  !*** ./node_modules/list.js/src/utils/get-attribute.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A cross-browser implementation of getAttribute.\n * Source found here: http://stackoverflow.com/a/3755343/361337 written by Vivin Paliath\n *\n * Return the value for `attr` at `element`.\n *\n * @param {Element} el\n * @param {String} attr\n * @api public\n */\n\nmodule.exports = function(el, attr) {\n  var result = (el.getAttribute && el.getAttribute(attr)) || null;\n  if( !result ) {\n    var attrs = el.attributes;\n    var length = attrs.length;\n    for(var i = 0; i < length; i++) {\n      if (attr[i] !== undefined) {\n        if(attr[i].nodeName === attr) {\n          result = attr[i].nodeValue;\n        }\n      }\n    }\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/utils/get-attribute.js?");

/***/ }),

/***/ "./node_modules/list.js/src/utils/get-by-class.js":
/*!********************************************************!*\
  !*** ./node_modules/list.js/src/utils/get-by-class.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A cross-browser implementation of getElementsByClass.\n * Heavily based on Dustin Diaz's function: http://dustindiaz.com/getelementsbyclass.\n *\n * Find all elements with class `className` inside `container`.\n * Use `single = true` to increase performance in older browsers\n * when only one element is needed.\n *\n * @param {String} className\n * @param {Element} container\n * @param {Boolean} single\n * @api public\n */\n\nvar getElementsByClassName = function(container, className, single) {\n  if (single) {\n    return container.getElementsByClassName(className)[0];\n  } else {\n    return container.getElementsByClassName(className);\n  }\n};\n\nvar querySelector = function(container, className, single) {\n  className = '.' + className;\n  if (single) {\n    return container.querySelector(className);\n  } else {\n    return container.querySelectorAll(className);\n  }\n};\n\nvar polyfill = function(container, className, single) {\n  var classElements = [],\n    tag = '*';\n\n  var els = container.getElementsByTagName(tag);\n  var elsLen = els.length;\n  var pattern = new RegExp(\"(^|\\\\s)\"+className+\"(\\\\s|$)\");\n  for (var i = 0, j = 0; i < elsLen; i++) {\n    if ( pattern.test(els[i].className) ) {\n      if (single) {\n        return els[i];\n      } else {\n        classElements[j] = els[i];\n        j++;\n      }\n    }\n  }\n  return classElements;\n};\n\nmodule.exports = (function() {\n  return function(container, className, single, options) {\n    options = options || {};\n    if ((options.test && options.getElementsByClassName) || (!options.test && document.getElementsByClassName)) {\n      return getElementsByClassName(container, className, single);\n    } else if ((options.test && options.querySelector) || (!options.test && document.querySelector)) {\n      return querySelector(container, className, single);\n    } else {\n      return polyfill(container, className, single);\n    }\n  };\n})();\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/utils/get-by-class.js?");

/***/ }),

/***/ "./node_modules/list.js/src/utils/index-of.js":
/*!****************************************************!*\
  !*** ./node_modules/list.js/src/utils/index-of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var indexOf = [].indexOf;\n\nmodule.exports = function(arr, obj){\n  if (indexOf) return arr.indexOf(obj);\n  for (var i = 0; i < arr.length; ++i) {\n    if (arr[i] === obj) return i;\n  }\n  return -1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/utils/index-of.js?");

/***/ }),

/***/ "./node_modules/list.js/src/utils/to-array.js":
/*!****************************************************!*\
  !*** ./node_modules/list.js/src/utils/to-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Source: https://github.com/timoxley/to-array\n *\n * Convert an array-like object into an `Array`.\n * If `collection` is already an `Array`, then will return a clone of `collection`.\n *\n * @param {Array | Mixed} collection An `Array` or array-like object to convert e.g. `arguments` or `NodeList`\n * @return {Array} Naive conversion of `collection` to a new `Array`.\n * @api public\n */\n\nmodule.exports = function toArray(collection) {\n  if (typeof collection === 'undefined') return [];\n  if (collection === null) return [null];\n  if (collection === window) return [window];\n  if (typeof collection === 'string') return [collection];\n  if (isArray(collection)) return collection;\n  if (typeof collection.length != 'number') return [collection];\n  if (typeof collection === 'function' && collection instanceof Function) return [collection];\n\n  var arr = [];\n  for (var i = 0; i < collection.length; i++) {\n    if (Object.prototype.hasOwnProperty.call(collection, i) || i in collection) {\n      arr.push(collection[i]);\n    }\n  }\n  if (!arr.length) return [];\n  return arr;\n};\n\nfunction isArray(arr) {\n  return Object.prototype.toString.call(arr) === \"[object Array]\";\n}\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/utils/to-array.js?");

/***/ }),

/***/ "./node_modules/list.js/src/utils/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/list.js/src/utils/to-string.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(s) {\n  s = (s === undefined) ? \"\" : s;\n  s = (s === null) ? \"\" : s;\n  s = s.toString();\n  return s;\n};\n\n\n//# sourceURL=webpack:///./node_modules/list.js/src/utils/to-string.js?");

/***/ }),

/***/ "./node_modules/string-natural-compare/natural-compare.js":
/*!****************************************************************!*\
  !*** ./node_modules/string-natural-compare/natural-compare.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar alphabet;\nvar alphabetIndexMap;\nvar alphabetIndexMapLength = 0;\n\nfunction isNumberCode(code) {\n  return code >= 48 && code <= 57;\n}\n\nfunction naturalCompare(a, b) {\n  var lengthA = (a += '').length;\n  var lengthB = (b += '').length;\n  var aIndex = 0;\n  var bIndex = 0;\n\n  while (aIndex < lengthA && bIndex < lengthB) {\n    var charCodeA = a.charCodeAt(aIndex);\n    var charCodeB = b.charCodeAt(bIndex);\n\n    if (isNumberCode(charCodeA)) {\n      if (!isNumberCode(charCodeB)) {\n        return charCodeA - charCodeB;\n      }\n\n      var numStartA = aIndex;\n      var numStartB = bIndex;\n\n      while (charCodeA === 48 && ++numStartA < lengthA) {\n        charCodeA = a.charCodeAt(numStartA);\n      }\n      while (charCodeB === 48 && ++numStartB < lengthB) {\n        charCodeB = b.charCodeAt(numStartB);\n      }\n\n      var numEndA = numStartA;\n      var numEndB = numStartB;\n\n      while (numEndA < lengthA && isNumberCode(a.charCodeAt(numEndA))) {\n        ++numEndA;\n      }\n      while (numEndB < lengthB && isNumberCode(b.charCodeAt(numEndB))) {\n        ++numEndB;\n      }\n\n      var difference = numEndA - numStartA - numEndB + numStartB; // numA length - numB length\n      if (difference) {\n        return difference;\n      }\n\n      while (numStartA < numEndA) {\n        difference = a.charCodeAt(numStartA++) - b.charCodeAt(numStartB++);\n        if (difference) {\n          return difference;\n        }\n      }\n\n      aIndex = numEndA;\n      bIndex = numEndB;\n      continue;\n    }\n\n    if (charCodeA !== charCodeB) {\n      if (\n        charCodeA < alphabetIndexMapLength &&\n        charCodeB < alphabetIndexMapLength &&\n        alphabetIndexMap[charCodeA] !== -1 &&\n        alphabetIndexMap[charCodeB] !== -1\n      ) {\n        return alphabetIndexMap[charCodeA] - alphabetIndexMap[charCodeB];\n      }\n\n      return charCodeA - charCodeB;\n    }\n\n    ++aIndex;\n    ++bIndex;\n  }\n\n  if (aIndex >= lengthA && bIndex < lengthB && lengthA >= lengthB) {\n    return -1;\n  }\n\n  if (bIndex >= lengthB && aIndex < lengthA && lengthB >= lengthA) {\n    return 1;\n  }\n\n  return lengthA - lengthB;\n}\n\nnaturalCompare.caseInsensitive = naturalCompare.i = function(a, b) {\n  return naturalCompare(('' + a).toLowerCase(), ('' + b).toLowerCase());\n};\n\nObject.defineProperties(naturalCompare, {\n  alphabet: {\n    get: function() {\n      return alphabet;\n    },\n\n    set: function(value) {\n      alphabet = value;\n      alphabetIndexMap = [];\n\n      var i = 0;\n\n      if (alphabet) {\n        for (; i < alphabet.length; i++) {\n          alphabetIndexMap[alphabet.charCodeAt(i)] = i;\n        }\n      }\n\n      alphabetIndexMapLength = alphabetIndexMap.length;\n\n      for (i = 0; i < alphabetIndexMapLength; i++) {\n        if (alphabetIndexMap[i] === undefined) {\n          alphabetIndexMap[i] = -1;\n        }\n      }\n    },\n  },\n});\n\nmodule.exports = naturalCompare;\n\n\n//# sourceURL=webpack:///./node_modules/string-natural-compare/natural-compare.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! list.js */ \"./node_modules/list.js/src/index.js\");\n/* harmony import */ var list_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(list_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// const secondaryLangs = {{{ secondaryLanguagesJSON }}}\nconst secondaryLangs = []\n\n// list.js: https://listjs.com/docs/\nconst languagesList = new list_js__WEBPACK_IMPORTED_MODULE_0___default.a('secondary-languages-list',\n  {\n    valueNames: [\n      'language',\n      {\n        name: 'enlang',\n        attr: 'data-enlang'\n      }\n    ]\n  }\n)\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });