describe('Text Field Directives', function () {
  var itBehavesLikeATextInput = function (type, attemptedValue) {
    describe(type + 'Field', function() {
      var element, $scope;

      beforeEach(module('ui.bootstrap.forms'));
      beforeEach(inject(function($rootScope, $compile) {
        $scope = $rootScope.$new();

        var tmpl = '<' + type + '-field model="item" input-id="input_id" input-label="Input Label"></' + type + '-field>';
        element = $compile(tmpl)($scope);
        $scope.$digest();
      }));

      it('renders a form-group', function () {
        expect(element.contents().hasClass('form-group')).toBeTruthy();
      });

      it('renders a label with the label content', function () {
        var labels = element.find('label');
        expect(labels.length).toEqual(1);
        expect(labels.html()).toMatch(/Input Label/);
        expect(labels.hasClass('control-label')).toBeTruthy();
      });

      it('renders a field bound to the model', function () {
        $scope.item = attemptedValue;
        $scope.$digest();

        var inputs = element.find('input');
        expect(inputs.length).toEqual(1);
        expect(inputs.hasClass('form-control')).toBeTruthy();
        expect(inputs[0].id).toEqual('input_id');
        expect(inputs[0].type).toEqual(type);
        expect(inputs[0].value).toEqual(attemptedValue);
      });
    });
  };

  itBehavesLikeATextInput('text', 'some text');
  itBehavesLikeATextInput('password', 'my password');
  itBehavesLikeATextInput('email', 'example@example.com');
  itBehavesLikeATextInput('tel', '123-456-7890');
});
