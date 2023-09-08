// This script filters out the useless "Promoted" ads in job searches, as well as
// also allows you to filter out other keywords such as all the recruitment agencies
// that clutter up the works

// First we'll define what we want to exclude:
const stringsToExclude = [
	"Promoted",
	"Recruit",
	"Jobot",
	"Braintrust",
	"CyberCoders",
	"Dice",
	"United Consulting Hub",
	"Ascendo Resources",
	"Manor Hill Advisors",
	"Motion Recruitment",
	"TekWissen",
	"Pattern Learning AI"
]

// We'll also keep track of how many we've deleted
let count = 0

// We'll also create a delay function as it seems to only affect elements visible on the screen
const delay = (ms) => {
    return new Promise((resolve,reject) => setTimeout(resolve,ms));
}

// Create an async function that we can use our delay on inside of our loop
const purgeExclusions = async () => {
	// We'll want to iterate through a few times, as it can take a few passes to get them all
	for (let i = 0; i < 5; i++) {
		// Get all <li> elements with class "jobs-search-results__list-item"
		const liElements = document.querySelectorAll('li.jobs-search-results__list-item');
		// Loop through each <li> element
		liElements.forEach((liElement) => {
		  // Find the text content within the <li> element
		  const textContent = liElement.textContent;
		  // Check if the text content contains any of our keywords
		  stringsToExclude.forEach((exclusion) => {
			if (textContent.includes(exclusion)) {
				// We found a match, remove the <li> element
				liElement.remove();
				// Increment the counter
				count += 1
				// We've removed the element, so let's continue to next iteration
				return // equivalent of "continue" for a forEach loop
			  }
		  });
		});	
		// Give it a slight timeout for changes to take effect before going to next iteration
		await delay(100)
	}

	// Output result when done
	console.log(`Filtered ${count} results`)
}

// Call the function
purgeExclusions()
