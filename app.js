function calculateAge(){
    currentYear = 2021
    age = currentYear - age
    return age
}
function calculateJob() {
    // age = ("dob")
    currentYear = 2021
    jobYear = currentYear - jobYear
    return jobYear
}
function calculate() {
    // currentYear = 2021
    // age = currentYear - age
    name = document.getElementById("name").value
    age = document.getElementById("dob").value
    jobYear = document.getElementById("jobYear").value
    //  document.getElementById('name').value
    calculateAge() == document.getElementById('dob').value
    calculateAge() == document.getElementById("jobYear").value
    // calculateJob() == document.getElementById('name').value
    calculateJob() == document.getElementById('dob').value
    calculateJob() == document.getElementById('jobYear').value


    ageTillRetirement = 70 - dob
    workTillRetirement = 40 - jobYear
    result = document.getElementById("result")
    if (ageTillRetirement > workTillRetirement) {
        result.innerHTML = (
            "Hello, " +
            name +
            " you have " +
            workTillRetirement +
            " years before you retire"
        )
    } else if (workTillRetirement > ageTillRetirement) {
        result.innerHTML = (
            " Hello, " +
            name +
            " you have " +
            workTillRetirement +
            "years before retire"
        )
    } else {
        result.innerHTML = (
            "Hello, "+ 
            name +
            " you have " +
            workTillRetirement +
            " years before you retire"
        )
    }
}