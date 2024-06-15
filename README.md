# search_costs_research

This project contains a set of scripts to validate and check email domains for various university departments. It uses a list of allowed email domains for different departments and generates a list of universities ranked closely to a specific university name based on the email domain provided.

## Project Structure

The repository consists of the following files:

- **functions.js**: Contains shared functions used by the other scripts.
  - `isValidEmail(email)`: Validates the format of the provided email.
  - `hasAccess(email)`: Checks if the provided email has access based on its domain.
  - `mapUniversitiesToDomains(universities, emailDomains1, emailDomains2)`: Maps universities to their respective email domains.
  - `getUniversityFromEmail(email, mappings)`: Gets the university name associated with a specific email domain.
  - `generateUniversityList(university, ranking, range)`: Generates a list of universities ranked closely to a specific university name.
- **physics_database.js**: Script for validating and checking email domains for the Physics department.
- **chemistry_database.js**: Script for validating and checking email domains for the Chemistry department.
- **math_database.js**: Script for validating and checking email domains for the Mathematics department.
- **cs_database.js**: Script for validating and checking email domains for the Computer Science department.
- **me_database.js**: Script for validating and checking email domains for the Mechanical Engineering department.