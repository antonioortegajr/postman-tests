// set the API call response body to a variable after parsing
var returnBody = JSON.parse(responseBody);

/* Status code tests
*  Various test against the returned status code.
*/

// Check for the status code is equal to 200 and 200 only
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// test returned status code is 200 or you can add multiple values
pm.test("Successful POST request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200]);
});


/* Variables
*  Set or unset variables
*/

// Set variable for the current envirnment
pm.environment.set("EnvirnmentVariable", "exampleValue");


