// function ham1() {
//     console.log("ham 1");
// }
// function ham2() {
//     console.log("ham 2");
// }

// vd1 dang thuong 
// ham1();
// ham2(); 

// vi du 2 dang callback 

function ham1(callback) {
    console.log("ham 1");
    // console.log(callback); 
    callback();
}
function ham2() {
    console.log("ham 2");
}
ham1(ham2);