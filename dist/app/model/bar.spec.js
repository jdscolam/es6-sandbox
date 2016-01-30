/**
 * Created by jdsco on 1/30/2016.
 */
'use strict';

var _chai = require('chai');

var _needlepoint = require('needlepoint');

var _bar = require('./bar');

describe('Bar', function () {
    it('should have a foo property', function () {
        var bar = _needlepoint.container.resolve(_bar.Bar);
        (0, _chai.expect)(bar.foo).to.exist;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvbW9kZWwvYmFyLnNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7Ozs7Ozs7O0FBTUEsU0FBUyxLQUFULEVBQWdCLFlBQVU7QUFDdEIsT0FBRyw0QkFBSCxFQUFpQyxZQUFVO0FBQ3ZDLFlBQUksTUFBTSx1QkFBVSxPQUFWLFVBQU4sQ0FEbUM7QUFFdkMsMEJBQU8sSUFBSSxHQUFKLENBQVAsQ0FBZ0IsRUFBaEIsQ0FBbUIsS0FBbkIsQ0FGdUM7S0FBVixDQUFqQyxDQURzQjtDQUFWLENBQWhCIiwiZmlsZSI6ImJhci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgamRzY28gb24gMS8zMC8yMDE2LlxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHtleHBlY3R9IGZyb20gJ2NoYWknO1xyXG5pbXBvcnQge2NvbnRhaW5lcn0gZnJvbSAnbmVlZGxlcG9pbnQnXHJcbmltcG9ydCB7QmFyfSBmcm9tICcuL2Jhcic7XHJcblxyXG5kZXNjcmliZSgnQmFyJywgZnVuY3Rpb24oKXtcclxuICAgIGl0KCdzaG91bGQgaGF2ZSBhIGZvbyBwcm9wZXJ0eScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIGJhciA9IGNvbnRhaW5lci5yZXNvbHZlKEJhcik7XHJcbiAgICAgICAgZXhwZWN0KGJhci5mb28pLnRvLmV4aXN0O1xyXG4gICAgfSlcclxufSk7Il19