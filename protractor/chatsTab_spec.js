describe('Testing the chats tab', function() {
    it('should be able to click on the chats tab', function() {
        expect(element(by.css('a[icon-on=ion-ios-clock]')).isPresent()).toBe(true);
        element(by.css('a[icon-on=ion-ios-clock]')).click();
    });

    it('should be able to see all chats', function() {
     //expectation goes here..
    });
});
