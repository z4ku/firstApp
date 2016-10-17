describe('statisticsModule ', function(){
    var $filter;

    beforeEach(module('filterModule'));

    beforeEach(inject(function (_$filter_) {
        $filter=_$filter_;

    }));


    it('return ',function () {
        var genderToImg = $filter('genderToImg');
        expect(genderToImg('female')).toBe('view1/img/female.jpg');
    })


});
