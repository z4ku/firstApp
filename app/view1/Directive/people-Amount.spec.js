fdescribe('Unit testing great quotes', function () {
    var $compile,
        $rootScope;

    beforeEach(module('amountModule'));
    beforeEach(module('templates'));


    beforeEach(inject(function (_$compile_, _$rootScope_, $httpBackend,$injector) {

        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.whenGET('view1/Table-amount/table-amount.html').passThrough();
    }));


    it('Replaces the element with the appropriate content', inject(function ($httpBackend, $timeout) {
        // Compile a piece of HTML containing the directive
        var element = $compile("<people-amount></people-amount>")($rootScope);
        $httpBackend.flush();
        $rootScope.$digest();
        $timeout.flush();
        debugger;
        expect(element.html()).toBe('adf');
    }));
});