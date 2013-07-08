'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /showreels when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/showreels");
  });


  describe('showreels_view', function() {

    beforeEach(function() {
      browser().navigateTo('#/showreels');
    });


    it('should render showreels when user navigates to /showreels', function() {
      expect(browser().location().url()).toBe("/showreels");
    });

    it('should be possible to control phone order via the drop down select box',
        function() {
      //let's narrow the dataset to make the test assertions shorter
      input('query').enter('tablet');
 
      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                   "MOTOROLA XOOM\u2122"]);
 
      select('orderProp').option('Alphabetical');
 
      expect(repeater('.phones li', 'Phone List').column('phone.name')).
          toEqual(["MOTOROLA XOOM\u2122",
                   "Motorola XOOM\u2122 with Wi-Fi"]);
    });
  });


  describe('about_view', function() {

    beforeEach(function() {
      browser().navigateTo('#/about');
    });


    it('should render about when user navigates to /about', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/About/);
    });

  });

  describe('contact_view', function() {

    beforeEach(function() {
      browser().navigateTo('#/contact');
    });


    it('should render contact when user navigates to /contact', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/Contact/);
    });

  });
});


 
 
    /*it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(3);
 
      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);
 
      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(2);
    });*/

