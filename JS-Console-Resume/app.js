"use strict";
var firstName = "Jeremiah";
var lastName = "Hill";
var fullName = firstName + " " + lastName;
var fullNameCaps = fullName.toUpperCase();
console.log(fullNameCaps);
console.log(" ");
displayDescription(fullNameCaps, "Web Development Student", "I love cats");
function displayDescription(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription + ".");
}
console.log(" ");
console.log("My Interests: ");
displayInterests("Video Games");
displayInterests("Drawing");
displayInterests("Listening To Music");
displayInterests("Learning Something New");
displayInterests("Solving Puzzles");
function displayInterests(myInterest) {
    console.log("* " + myInterest);
}
console.log(" ");
console.log("My Previous Experiences: ");
displayPosition("Graduated from G.W. Carver High School in 2018.");
displayPosition("Vice President for my Group's SkillsUSA.");
displayPosition("Studied Animation For 4 Years.");
displayPosition("Competed in a SkillsUSA Design Contest and Won Bronze and Silver Medals.");
displayPosition("Traveled to Kentucky to compete in SkillsUSA Professional Development competition.");
function displayPosition(companyName) {
    console.log("* " + companyName + " ");
}
console.log(" ");
console.log("My Skills: ");
displaySkill("Spanish", true);
displaySkill("Surfing", false);
displaySkill("Violinist", true);
displaySkill("Animator", true);
displaySkill("Git / Github", false);
displaySkill("C++", false);
displaySkill("BootStrap", false);
displaySkill("Python", false);
displaySkill("JQuery", false);
displaySkill("Video Editing", true);
displaySkill("Video Production", true);
function displaySkill(mySkill, bamBam) {
    if (bamBam == true) {
        console.log("* BAM: " + mySkill);
    }
    else if (bamBam == false) {
        console.log("* " + mySkill);
    }
    ;
}
