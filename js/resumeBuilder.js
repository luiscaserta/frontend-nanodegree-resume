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
	"welcomeMessage": "Let's have some fun. \
	<br> Together, we can share your idea with the world!!",
	"skills": [
		"English, French and Spanish", "Python", "HTML / CSS", "Javascript"
	],
	"bioPic" : "images/Luis.jpg"
}
bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%",  bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedWelcome = HTMLwelcomeMsg. replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedbioPic);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedWelcome);
	if (bio.skills.length >= 0) {
		$("#header").append(HTMLskillsStart);	
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);

		}		
	}
}
bio.display();
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
			"degree": "Certification", 
			"majors": "DELTA", 
			"dates": 2014, 
			"url": "www.ilsc.com/montreal"
		}
	],
	"onlineCourses": [
		{
			"title": "Introduction to Programming Nano Degree",
			"school": "Udacity",
			"dates": 2016,
			"url": "www.udacity.com"
		}
	]
}
function displayEducation(){
	for (school in education.schools) {
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.schools[school].url);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedUrl);
	}
	for (onlineCourse in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedUrl);
	}
}
displayEducation();
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