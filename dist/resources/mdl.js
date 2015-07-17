System.register(['aurelia-framework', 'material-design-lite', 'material-design-lite/material.css!'], function (_export) {
  'use strict';

  var inject, customAttribute, componentHandler, MDL;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
    }, function (_materialDesignLite) {
      componentHandler = _materialDesignLite.componentHandler;
    }, function (_materialDesignLiteMaterialCss) {}],
    execute: function () {

      console.log('mdl====>');
      console.log(componentHandler);

      MDL = (function () {
        function MDL(element) {
          _classCallCheck(this, _MDL);

          this.element = element;
        }

        _createClass(MDL, [{
          key: 'attached',
          value: function attached() {
            console.log('mdl attached: ' + this.value);
            console.log(this.element);
            switch (this.value) {
              case 'button':
                componentHandler.upgradeElement(this.element, 'MaterialButton');
                componentHandler.upgradeElement(this.element, 'MaterialRipple');
                break;
              case 'textfield':
                componentHandler.upgradeElement(this.element, 'MaterialTextfield');
                break;
            }
          }
        }]);

        var _MDL = MDL;
        MDL = customAttribute('mdl')(MDL) || MDL;
        MDL = inject(Element)(MDL) || MDL;
        return MDL;
      })();

      _export('MDL', MDL);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9tZGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lEQVFhLEdBQUc7Ozs7Ozs7O2lDQVJSLE1BQU07MENBQUUsZUFBZTs7NkNBQ3ZCLGdCQUFnQjs7OztBQUd4QixhQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ3ZCLGFBQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTs7QUFHaEIsU0FBRztBQUVELGlCQUZGLEdBQUcsQ0FFQSxPQUFPLEVBQUU7OztBQUNqQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN6Qjs7cUJBSk8sR0FBRzs7aUJBTUosb0JBQUc7QUFDVCxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0MsbUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3pCLG9CQUFPLElBQUksQ0FBQyxLQUFLO0FBQ2YsbUJBQUssUUFBUTtBQUNYLGdDQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDaEUsZ0NBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNoRSxzQkFBTTtBQUFBLEFBQ1IsbUJBQUssV0FBVztBQUNkLGdDQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFDbkUsc0JBQU07QUFBQSxhQUNUO1dBQ0Y7OzttQkFsQlEsR0FBRztBQUFILFdBQUcsR0FEZixlQUFlLENBQUMsS0FBSyxDQUFDLENBQ1YsR0FBRyxLQUFILEdBQUc7QUFBSCxXQUFHLEdBRmYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUVILEdBQUcsS0FBSCxHQUFHO2VBQUgsR0FBRzs7O3FCQUFILEdBQUciLCJmaWxlIjoicmVzb3VyY2VzL21kbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Y29tcG9uZW50SGFuZGxlcn0gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWxpdGUnO1xuaW1wb3J0ICdtYXRlcmlhbC1kZXNpZ24tbGl0ZS9tYXRlcmlhbC5jc3MhJztcblxuY29uc29sZS5sb2coJ21kbD09PT0+JylcbmNvbnNvbGUubG9nKGNvbXBvbmVudEhhbmRsZXIpXG5AaW5qZWN0KEVsZW1lbnQpXG5AY3VzdG9tQXR0cmlidXRlKCdtZGwnKVxuZXhwb3J0IGNsYXNzIE1ETCB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgY29uc29sZS5sb2coXCJtZGwgYXR0YWNoZWQ6IFwiICsgdGhpcy52YWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQpXG4gICAgICBzd2l0Y2godGhpcy52YWx1ZSl7XG4gICAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudCh0aGlzLmVsZW1lbnQsICdNYXRlcmlhbEJ1dHRvbicpO1xuICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQodGhpcy5lbGVtZW50LCAnTWF0ZXJpYWxSaXBwbGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGV4dGZpZWxkJzpcbiAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KHRoaXMuZWxlbWVudCwgJ01hdGVyaWFsVGV4dGZpZWxkJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9