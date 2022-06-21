/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
function result() {
	const date = new Date();
	const day = date.getDay();
	const dayOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const dayOfWeekIndex = dayOfWeek.indexOf([day]);
	const dayOfWeekIndex4DaysAgo = dayOfWeekIndex - 4;
	return dayOfWeek[dayOfWeekIndex4DaysAgo];
}

console.log(result());
