/*
Here is my JavaScript Code for final project to build the resume.
*/

var bio = {
	"name": "Luis Caserta",
	"role": "Front End Web Developer - in Training!!",
	"contactInfo": {
		"mobile": "514-641-4279",
		"email": "luiscaserta@yahoo.com",
		"github": "luiscaserta",
		"twitter": "notwitter@luiscaserta",
		"location": "Montreal"
	},
	"welcomeMessage": "Let's have some fun - learn, teach and grow",
	"skills": [
		"Languages: English, French and Spanish", "Friendly and Easy to Work with", "Persistent" 
	],
	"bioPic" : "images/fry.jpg"
}


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	console.log(HTMLskillsStart);
	console.log(HTMLskills);
	console.log(formattedSkill);
}

var education = {
	"schools": [
		{
			"name": "University of Detroit Mercy",
			"city": "Detroit, MI", 
			"degree": "Bachelors", 
			"majors": "Mechanical Engineering", 
			"dates": 1998, 
			"url": "www.udmercy.edu"
		},
		{
			"name": "ILSC - Montreal",
			"city": "Montreal, Quebec", 
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
			"descritpion": "Private English language instructor."
		},
		{
			"employer": "Hatch",
			"title": "Contract Administrator",
			"location": "New Caledonia",
			"dates": "2010 - 2014",
			"descritpion": "EPCM of both local and international contractors for execution of Koniambo Nickel Construction Projects."
		}
	]
}
/*
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);
}
*/

var projects = {
	"projects": [
		{
			"title": "Family Project",
			"dates": "2001 - present",
			"description": "Happy Family............ mommy, daddy, and the two little ones",
			"images": [
				"https://get some pics",
				"https://get some pics"
			]
		}
	]
}




