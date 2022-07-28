console.log(pm.variables.get("city")); //Pre-request script

pm.test("Status code is 200", function () { //Test
    pm.response.to.have.status(200);
    console.log(pm.variables.get("city"));
});
