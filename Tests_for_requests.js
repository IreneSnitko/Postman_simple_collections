//T E S T S   |   i n   t h e   r e q u e s t s
//Collection `Lesson1` | Folder `simple_requests`
//GET test_1

pm.test("Content-Type is present", function () {
    pm.response
	.to.have
	.header("Content-Type");
	});

//GET lesson_1_with_tests

pm.test("Status code is 200", function () {
    pm.response
	.to.have
	.status(200);
	});

pm.test("Response time is less than 800ms", function () {
    pm.expect(
	pm.response
	.responseTime
	)
	.to.be
	.below(800);
	});
	
//PUT test_2

pm.test("Status code is 200", function () {
    pm.response
	.to.have
	.status(200);
	});

pm.test("Content-Type is present", function () {
    pm.response
	.to.have
	.header("Content-Type");
	});

pm.test("Response time is less than 200ms", function () {
    pm.expect(
	pm.response.
	responseTime
	)
	.to.be
	.below(200);
	});

//PUT test_3

pm.test("Content-Type is present", function () {
    pm.response
	.to.have
	.header("Content-Type");
	});

pm.test(
"Order with id 2154 was added to the system. Thank you!", function () {
    pm.response
	.to.have
	.body(
	"Order with id 2154 was added to the system. Thank you!"
	);
	});

//PUT test_4_error404

pm.test("Body matches string", function () {
    pm.expect(
	pm.response.text())
	.to.include(
	"The requested URL was not found on the server. " + 
	"If you entered the URL manually please check " +
	"your spelling and try again."
	);
	});
	
pm.test("Status code is 404", function () {
    pm.response
	.to.have
	.status(404);
	});
	
//PUT test_5

pm.test("Successful POST request", function () {
    pm.expect(
	pm.response
	.code)
	.to.be
	.oneOf([200, 201]);
	});
	
//PUT test_6	

pm.test("Body matches string", function () {
    pm.expect(
	pm.response.text())
	.to.include("PO with id 19999 created.")
	});

pm.test("Status code is 200", function () {
    pm.response
	.to.have
	.status(200);
	});
	
//PUT test_7

pm.test("Content-Type is present", function () {
    pm.response
	.to.have
	.header("Content-Type");
	});

pm.test("Body matches string", function () {
    pm.expect(
	pm.response.text())
	.to.include("Error");
	});	
	
//PUT test_8

pm.test("Status code is 404", function () {
    pm.response
	.to.have
	.status(404);
	});

//Collection `Lesson1` | Folder `multiply`
//POST test_9_multiply

pm.test("Status code is 200", function () {
    pm.response
	.to.have
	.status(200);
	});
	
pm.test("Body is correct", function () {
    pm.response
	.to.have
	.body({"Success":"Product of 10.0 and 2.0 is 20.0"});
	});

//POST test_13_multiply

pm.test("Body matches string", function () {
    pm.expect(
	pm.response.text())
	.to.include("104.03999999999999");
	});
	
//POST test_10_multiply	

pm.test("Status code is 200", function () {
    pm.response
	.to.have
	.status(200);
	});
	
pm.test("Body is correct", function () {
    pm.response
	.to.have
	.body({"Success":"Product of 10.1 and 2.2" +
	" is 22.220000000000002"});
	});
	
//POST test_11_multiply

pm.test("Status code is 200", function () {
    pm.response
	.to.have
	.status(200);
	});
	
pm.test("Response time is less than 200ms", function () {
    pm.expect(
	pm.response
	.responseTime)
	.to.be
	.below(200);
	});
	
//POST test_12_multiply_with_letters

pm.test("Status code on of 4*", function () {
    pm.expect(
	pm.response
	.code)
	.to.be
	.oneOf(
	[400,404,412]
	);
	});
	
pm.test("Body matches string", function () {
    pm.expect(
	pm.response
	.text()).to.include(
	"The browser (or proxy) sent a request " +
	"that this server could not understand.");
	});

//Collection `topbicycle.ru`
//GET test_bicycle_1_with_tests

pm.test("Status code is 200", function () {
    pm.response
	.to.have
	.status(200);
	});

pm.test("Body matches string", function () {
    pm.expect(
	pm.response
	.text()).to.include(
	"983239"
	);
	});

//GET test_bicycle_6_with_variable_Environment

console.log(pm.variables.get("city")); //Pre-request script

pm.test("Status code is 200", function () { //Test
    pm.response
	.to.have
	.status(200);    
	});
	
//Collection `topbicycle.ru_all_values_quickly` | Folder `cities`
//GET _bicycle_with_jsonFile

console.log(pm.variables.get("city")); //Pre-request script

pm.test("Status code on of 2*", function () {
    pm.expect(
    pm.response.code)
    .to.be
    .oneOf(
    [200,201,202,204]
    )
    });