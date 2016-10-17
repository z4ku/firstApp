describe('my-app', function() {


    describe('view1', function() {

        beforeEach(function() {
            browser.get('index.html#!/view1');
        });


        it('should render view1 when user navigates to /view1', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/partial for view 1/);
        });

    });
    it('should filter results', function() {

        // Find the element with ng-model="user" and type "jacksparrow" into it
        element(by.model('newItem.name')).sendKeys('ABCD');
        element(by.model('newItem.surname')).sendKeys('asdsadas');
        element(by.model('newItem.pesel')).sendKeys('92112705698');


        element(by.css('buttonSave')).click();
        expect(element.all(by.repeater('task in tasks')).count()).toEqual(5);


        // Verify that there are 10 tasks





    });
});