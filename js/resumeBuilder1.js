/*
This is empty on purpose! Your code to build the resume will go here.
*/
/*
$("#main").append("Luis Caserta");
var awesomeThoughts = "I am Luis Caserta and I am LEARNING";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("LEARNING", "STRETCHING IN THE LEARNING ZONE");
$("#main").append(funThoughts);
*/

var formattedName = HTMLheaderName.replace("%data%", "Luis Caserta");
//console.log(formattedName)
var formattedRole = HTMLheaderRole.replace("%data%", "Student Web Developer")

$("#header").append(formattedName);
$("#header").append(formattedRole);


var skills = ["nice", "smart", "happy"];
var bio = {
	"name" : "Luis",
	"role" : "The Student",
	"contactInfo" : {
		"mobile" : "514-641-4279",
		"email" : "luiscaserta@yahoo.com",
		"github" : "luiscaserta",
		"twitter" : "@luiscaserta",
		"location" : "Montreal"
	},
	"welcomeMessage" : "Let's have some fun - learn, teach and grow",
	"skills" : skills,
	"bioPic" : "images/fry.jpg"
};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contactInfo);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);
//$("#main").append(bio.bioPic);

var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").append(formattedbioPic);
/*
var work = {};
work.currentJobPosition = "ESL Teacher";
work.employer = "Consultant";
work.years = 1;
work.city = "Montreal";

$("#main").append(work.currentJobPosition);

var education = {};
education["schoolName"] = "ILSC - Montreal";
education["years"] = 1;
education["city"] = "Montreal";

$("#main").append(education["schoolName"]);
*/
/*
var education = {
	"schools" : [
		{
			"name" : "ILSC - Montreal",
			"city" : "Montreal",
			"degree" : "DELTA / ESL Certificate"
		},
		{
			"name" : "Udacity",
			"city" : "On-line",
			"degree" : "IPND"	
		}
	]
}
*/

// work object which contains an array of jobs using Dot notation....... COME BACK TO THIS LATER
var work = {};
	work.jobs = [];
		work.jobs.employer = "Private Consultant";
		work.jobs.title = "ESL Teacher";
		work.jobs.location = "Montreal";
		work.jobs.dates = "2015 - present";
		work.jobs.descritpion = "Private English language instructor."

	work.jobs = [];
		work.jobs.employer = "Hatch";
		work.jobs.title = "Contract Administrator";
		work.jobs.location = "New Caledonia";
		work.jobs.dates = "2010 - 2014";
		work.jobs.descritpion = "EPCM of both local and international contractors for execution of Koniambo Nickel Construction Projects."

$("#main").append(work.jobs.employer);
