/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL defined and, the URL is not empty', function() {
            allFeeds.forEach(function(feed) {
               //check if feed url is defined
               expect(feed.url).toBeDefined();
               //check if the feed url is not empty
               expect(feed.url.length).not.toBe(0);
           });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('Name defined and, the name is not empty', function() {
             allFeeds.forEach(function(feed) {
                 //check if feed name is defined
                 expect(feed.name).toBeDefined();
                 //check if feed name is not empty
                 expect(feed.name.length).not.toBe(0);
             });
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('Element is hidden by default', function() {
             expect($('.menu-hidden').is(':visible')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          //check if the menu makes menu visible when the menu icon is clicked for the first time
          it('Is visible when the menu Icon is clicked', function() {
              $('.menu-icon-link').click();
              expect($('.menu-hidden').is(':visible')).toBe(false);
          });
          //check if the menu hides when the menu icon is clicked again
          it('Hides when the menu Icon is clicked again', function() {
              $('.menu-icon-link').click();
              expect($('.menu-hidden').is(':visible')).toBe(true);
          });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         // it runs before each test and call the loadFeed function with initial id '0' and the callBack
            beforeEach(function(done) {
                loadFeed(0, done);
            });
            //checks if there is atleast one element in the .feed container
            it('There is at least a single .entry element within the .feed container', function(){
                //first check if it is defined
                expect($('.feed .entry')).toBeDefined();
                //check if the length of entries is greter than 0
                expect($('.feed .entry').length).toBeGreaterThan(0);
            });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         //declaring this variable in the outer scope so that it can be accessed inside the scope of other inner functions
         var firstFeed;
         //it is called before each test
            beforeEach(function(done) {
                loadFeed(0, function() {
                    firstFeed = $('.feed').text();
                    loadFeed(1, done);
                });
            });

            // It checks that the content changes whenever a new feed is loaded.
            it('Ensure when a new feed is loaded by the loadFeed function that the content actually changes', function(){
                expect($('.feed').text()).not.toEqual(firstFeed);
            });
    });
}());
