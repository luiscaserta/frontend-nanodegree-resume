/*
Here is my JavaScript Code for final project to build the resume.
*/


var bio = {
	"name": "Luis Caserta",
	"role": "Front End Web Developer - in Training!!",
	"contacts": {
		"mobile": "514-641-4279",
		"email": "luiscaserta@yahoo.com",
		"github": "luiscaserta",
		"twitter": "notwitter@luiscaserta",
		"location": "Montreal"
	},
	"welcomeMessage": "Let's have some fun - Teach......, Learn......., Continuous Improvement...!!!",
	"skills": [
		"English, French and Spanish", "Friendly", "Persistent", "Happy"
	],
	"bioPic" : "images/fry.jpg"
}

var formattedName = HTMLheaderName.replace("%data%",  bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedbioPic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);


$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedTwitter);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}


var education = {
	"schools": [
		{
			"name": "University of Detroit Mercy",
			"location": "Detroit, MI", 
			"degree": "Bachelors", 
			"majors": "Mechanical Engineering", 
			"dates": 1998, 
			"url": "www.udmercy.edu"
		},
		{
			"name": "ILSC - Montreal",
			"location": "Montreal, Quebec", 
			"degree": "ESL", 
			"majors": "DELTA", 
			"dates": 2014, 
			"url": "www.ilsc.com/montreal"
		}
	],
	"onlineCourses": [
		{
			"title": "Introduction to Programming Nano Degree",
			"school": "Udacity",
			"dates": 2016
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Private Consultant",
			"title": "ESL Teacher",
			"location": "Montreal",
			"dates": "2015 - present",
			"description": "Private English language instructor."
		},
		{
			"employer": "Hatch",
			"title": "Contract Administrator",
			"location": "New Caledonia",
			"dates": "2010 - 2014",
			"description": "EPCM of both local and international contractors for execution of Koniambo Nickel Construction Projects."
		}
	]
}

function displayWork(){
	for (job in work.jobs) {
	

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)

		$("#workExperience").append(HTMLworkStart);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

var projects = {
	"projects": [
		{
			"title": "Family Project",
			"dates": "2001 - present",
			"description": "Happy Family............ mommy, daddy, and the two little ones.",
			"images": [
				"images/IMG_1431.jpg"
			]
		},
		{
			"title": "Fun Kid Projects",
			"dates": "2007 - present",
			"description": "Creating fun experiences with others...... Making the most of life!!",
			"images": [
				"images/IMG_1282.jpg",
				"images/IMG_1319.jpg",
				"images/IMG_1440.jpg"
			]
		}
	]
}


projects.display = function() {
	for (project in projects.projects) {

		$("#projects").append (HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length >= 0) {
			for (image in projects.projects[project].images) {
				var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImages);	
			}
		}
		

	}
}

projects.display();

function inName(name) {
	var name = name.trim().split(" ")
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	

	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);


// Line of code to activate google maps.

$("#mapDiv").append(googleMap);

