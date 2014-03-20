describe('checkboxField', function () {
  var element, $scope;

  beforeEach(module('ui.bootstrap.forms'));
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();

    var tmpl = '<checkbox-field model="item" input-id="input_id" input-label="Input Label"></checkbox-field>';
    element = $compile(tmpl)($scope);
    $scope.$digest();
  }));

  it('renders a checkbox div', function () {
    expect(element.contents().hasClass('checkbox')).toBeTruthy();
  });

  it('renders a label with the label content', function () {
    var labels = element.find('label');
    expect(labels.length).toEqual(1);
    expect(labels.html()).toMatch(/Input Label/);
  });

  it('renders a field bound to the model', function () {
    $scope.item = true;
    $scope.$digest();

    var inputs = element.find('input');
    expect(inputs.length).toEqual(1);
    expect(inputs[0].id).toEqual('input_id');
    expect(inputs[0].type).toEqual('checkbox');
    expect(inputs[0].value).toEqual('on');
  });

});
