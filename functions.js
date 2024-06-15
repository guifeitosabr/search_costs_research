// File with all the functions of the code

// FUNCTION to validate email format and disallow specific domains
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }
  
    // Disallow emails with 'gmail.com' domain
    const disallowedDomains = ['gmail.com'];
    const domain = email.substring(email.lastIndexOf('@') + 1).toLowerCase();
    
    if (disallowedDomains.includes(domain)) {
      return false;
    }
  
    return true;
}
  
  
  // FUNCTION to check if the user has access based on their email domain
  function hasAccess(email, allowedDomains1, allowedDomains2) {
    // Validate the email format
    if (!isValidEmail(email)) {
      console.error('Invalid email format');
      return false;
    }
  
    // Extract the domain from the email
    const domain = email.substring(email.lastIndexOf('@') + 1).toLowerCase();
  
    // Check if the extracted domain is in the list of allowed domains
    if (allowedDomains1.includes(domain) || allowedDomains2.includes(domain)) {
      return true;
    } else {
      console.error('Access denied: Email domain is not allowed');
      return false;
    }
  }
  
  // FUNCTION that maps universities' names with their respective email domains
  function mapUniversitiesToDomains(universities, emailDomains1, emailDomains2) {
    const universityMap = new Map();
  
    for (let i = 0; i < universities.length; i++) {
      const university = universities[i];
      const domain1 = emailDomains1[i];
      const domain2 = emailDomains2[i];
  
      if (!universityMap.has(university)) {
        universityMap.set(university, new Set());
      }
  
      // Add domains to the set, ensuring uniqueness and skipping empty values
      if (domain1) {
        universityMap.get(university).add(domain1);
      }
      if (domain2) {
        universityMap.get(university).add(domain2);
      }
    }
  
    // Convert the map to an array of objects
    const result = [];
    universityMap.forEach((domains, university) => {
      result.push({
        university: university,
        domains: Array.from(domains) // Convert set to array to ensure unique domains
      });
    });
  
    return result;
  }
  
  // FUNCTION that gets university name associated to a specific email domain
  function getUniversityFromEmail(email, mappings) {
    const domain = email.substring(email.lastIndexOf('@') + 1).toLowerCase();
  
    for (const mapping of mappings) {
      if (mapping.domains.includes(domain)) {
        return mapping.university;
      }
    }
    return null;
  }
  
  // FUNCTION that generates list of 40 universities ranked closely to a specific university name
  function generateUniversityList(university, ranking, range = 20) {
    const index = ranking.indexOf(university);
  
    if (index === -1) {
      return []; // University not found in the ranking
    }
  
    const result = [];
    const seen = new Set(); // Use a Set to track seen universities to avoid duplicates
  
    // Add universities ranked higher
    for (let i = Math.max(0, index - range); i < index; i++) {
      if (!seen.has(ranking[i])) {
        result.push(ranking[i]);
        seen.add(ranking[i]);
      }
    }
  
    // Add universities ranked lower
    for (let i = index + 1; i < Math.min(ranking.length, index + range + 1); i++) {
      if (!seen.has(ranking[i])) {
        result.push(ranking[i]);
        seen.add(ranking[i]);
      }
    }
  
    // If there are not enough universities, fill up the list from the start or end
    let lowerIndex = index - range;
    let upperIndex = index + range + 1;
  
    while (result.length < 2 * range) {
      if (lowerIndex >= 0) {
        if (!seen.has(ranking[lowerIndex])) {
          result.unshift(ranking[lowerIndex]);
          seen.add(ranking[lowerIndex]);
        }
        lowerIndex--;
      } else if (upperIndex < ranking.length) {
        if (!seen.has(ranking[upperIndex])) {
          result.push(ranking[upperIndex]);
          seen.add(ranking[upperIndex]);
        }
        upperIndex++;
      } else {
        break; // Avoid infinite loop
      }
    }
  
    // Ensure the list is ordered by their positions in the ranking
    return result.slice(0, 2 * range);
  }
  
  // Export the functions
  module.exports = {
    isValidEmail,
    hasAccess,
    mapUniversitiesToDomains,
    getUniversityFromEmail,
    generateUniversityList
  };  