/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 *
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
	{ firstName: "Kai", lastName: "Lyons" },
	{ firstName: "Belle", lastName: "Norton" },
	{ firstName: "Finnley", lastName: "Rennie" },
	{ firstName: "Tatiana", lastName: "Dickerson" },
	{ firstName: "Peyton", lastName: "Gardner" },
];
const groups = 3;

function result(students, groups) {
	const result = [];
	const studentsPerGroup = Math.floor(students.length / groups);
	for (let i = 0; i < groups; i++) {
		result.push(students.splice(0, studentsPerGroup));
	}
	return result;
}

console.log(result(students, groups));
