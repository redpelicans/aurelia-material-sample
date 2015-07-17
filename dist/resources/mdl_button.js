System.register(['aurelia-framework', 'material-design-lite', 'material-design-lite/material.css!'], function (_export) {
    'use strict';

    var inject, customElement, MDL;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customElement = _aureliaFramework.customElement;
        }, function (_materialDesignLite) {}, function (_materialDesignLiteMaterialCss) {}],
        execute: function () {
            MDL = (function () {
                function MDL(element) {
                    _classCallCheck(this, _MDL);

                    this.element = element;
                }

                _createClass(MDL, [{
                    key: 'attached',
                    value: function attached() {
                        this.button = $(this.element).find('.my-button');
                        console.log('mdl button  attached');
                        console.log(this.button);
                        var button = document.createElement('button');
                        var textNode = document.createTextNode('Click Me!');
                        button.appendChild(textNode);
                        button.className = 'mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect';
                        window.componentHandler.upgradeElement(button, 'MaterialButton');
                        window.componentHandler.upgradeElement(button, 'MaterialRipple');

                        document.getElementById('testbutton').appendChild(button);
                    }
                }]);

                var _MDL = MDL;
                MDL = customElement('mdl-button')(MDL) || MDL;
                MDL = inject(Element)(MDL) || MDL;
                return MDL;
            })();

            _export('MDL', MDL);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9tZGxfYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsrQkFNYSxHQUFHOzs7Ozs7Ozt1Q0FOUixNQUFNOzhDQUFFLGFBQWE7OztBQU1oQixlQUFHO0FBRUQseUJBRkYsR0FBRyxDQUVBLE9BQU8sRUFBRTs7O0FBQ2pCLHdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztpQkFDekI7OzZCQUpPLEdBQUc7OzJCQU1KLG9CQUFHO0FBQ1QsNEJBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDakQsK0JBQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNwQywrQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekIsNEJBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsNEJBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEQsOEJBQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0IsOEJBQU0sQ0FBQyxTQUFTLEdBQUcscUZBQXFGLENBQUM7QUFDekcsOEJBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDakUsOEJBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7O0FBRWpFLGdDQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDM0Q7OzsyQkFsQlEsR0FBRztBQUFILG1CQUFHLEdBRGYsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUNmLEdBQUcsS0FBSCxHQUFHO0FBQUgsbUJBQUcsR0FGZixNQUFNLENBQUMsT0FBTyxDQUFDLENBRUgsR0FBRyxLQUFILEdBQUc7dUJBQUgsR0FBRzs7OzJCQUFILEdBQUciLCJmaWxlIjoicmVzb3VyY2VzL21kbF9idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICdtYXRlcmlhbC1kZXNpZ24tbGl0ZSc7XG5pbXBvcnQgJ21hdGVyaWFsLWRlc2lnbi1saXRlL21hdGVyaWFsLmNzcyEnO1xuXG5AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tRWxlbWVudCgnbWRsLWJ1dHRvbicpXG5leHBvcnQgY2xhc3MgTURMIHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICB0aGlzLmJ1dHRvbiA9ICQodGhpcy5lbGVtZW50KS5maW5kKCcubXktYnV0dG9uJyk7XG4gICAgICBjb25zb2xlLmxvZyhcIm1kbCBidXR0b24gIGF0dGFjaGVkXCIpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5idXR0b24pO1xuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgbGV0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0NsaWNrIE1lIScpO1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLXJhaXNlZCBtZGwtYnV0dG9uLS1hY2NlbnQgbWRsLWpzLXJpcHBsZS1lZmZlY3QnO1xuICAgICAgd2luZG93LmNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQoYnV0dG9uLCAnTWF0ZXJpYWxCdXR0b24nKTtcbiAgICAgIHdpbmRvdy5jb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KGJ1dHRvbiwgJ01hdGVyaWFsUmlwcGxlJyk7XG4gICAgICAvL3RoaXMuYnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdGJ1dHRvbicpLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9