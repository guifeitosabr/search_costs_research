// Import the readline module
const readline = require('readline');

// Import the functions from functions.js
const {
  isValidEmail,
  hasAccess,
  mapUniversitiesToDomains,
  getUniversityFromEmail,
  generateUniversityList
} = require('./functions');

// List of universities that have a ME dept.
const meUniversities = [
  "Arizona State University", "Auburn University", "Binghamton University", "Boston University", "Boston University", "Brown University", "Brown University", "California Institute of Technology", "Carnegie Mellon University", "Clemson University", "Clemson University", "Colorado School of Mines", "Columbia University", "Cornell University", "Drexel University", "Duke University", "Florida State University", "George Mason University", "Georgia Institute of Technology", "Georgia Institute of Technology", "Graduate Center, CUNY", "Harvard University", "Iowa State University", "Johns Hopkins University", "Johns Hopkins University", "Johns Hopkins University", "Massachusetts Institute of Technology", "Massachusetts Institute of Technology", "North Carolina State University", "Northwestern University", "Oregon State University", "Oregon State University", "Oregon State University", "Oregon State University", "Pennsylvania State University", "Princeton University", "Princeton University", "Purdue University", "Rensselaer Polytechnic Institute", "Rice University", "Rutgers University-New Brunswick", "Texas A&M University", "Texas A&M University", "Texas Tech University", "Tufts University", "University at Buffalo", "University of Alabama", "University of Arizona", "University of California, Berkeley", "University of California, Irvine", "University of California, Los Angeles", "University of California, Los Angeles", "University of California, Riverside", "University of California, San Diego", "University of California, San Diego", "University of California, San Diego", "University of California, San Diego", "University of California, San Diego", "University of California, Santa Barbara", "University of Cincinnati", "University of Colorado Boulder", "University of Colorado Boulder", "University of Connecticut", "University of Delaware", "University of Florida", "University of Hawaii at Manoa", "University of Houston", "University of Illinois Chicago", "University of Illinois Urbana-Champaign", "University of Iowa", "University of Kansas", "University of Kentucky", "University of Louisiana at Lafayette", "University of Louisville", "University of Maine", "University of Maryland, Baltimore County", "University of Maryland, College Park", "University of Michigan", "University of Minnesota", "University of Minnesota", "University of Missouri", "University of North Texas", "University of Pennsylvania", "University of Rochester", "University of South Florida", "University of Southern California", "University of Southern Mississippi", "University of Tennessee", "University of Texas at Arlington", "University of Texas at Arlington", "University of Texas at Dallas", "University of Utah", "University of Washington", "University of Washington", "University of Wisconsin-Madison", "University of Wisconsin-Milwaukee", "Utah State University", "Vanderbilt University", "Virginia Commonwealth University", "Virginia Tech", "Virginia Tech", "Virginia Tech", "Washington State University", "Washington University in St. Louis", "Wayne State University", "West Virginia University"
]

// List of email domains of direct contact to each university's ME dept.
const meEmailDomains1 = [
    "asu.edu", "auburn.edu", "binghamton.edu", "bu.edu", "bu.edu", "brown.edu", "brown.edu", "caltech.edu", "andrew.cmu.edu", "clemson.edu", "clemson.edu", "mines.edu", "columbia.edu", "cornell.edu", "drexel.edu", "duke.edu", "eng.famu.fsu.edu", "gmu.edu", "me.gatech.edu", "me.gatech.edu", "ccny.cuny.edu", "harvard.edu", "iastate.edu", "jhu.edu", "jhu.edu", "jhu.edu", "mit.edu", "mit.edu", "ncsu.edu", "northwestern.edu", , , , , , , , , , "rice.edu", "rutgers.edu", "tamu.edu", "tamu.edu", "ttu.edu", "tufts.edu", "buffalo.edu", "ua.edu", "arizona.edu", "berkeley.edu", "uci.edu", "ucla.edu", "ucla.edu", "ucr.edu", "ucsd.edu", "ucsd.edu", "ucsd.edu", "ucsd.edu", "ucsd.edu", "engineering.ucsb.edu", "ucmail.uc.edu", "colorado.edu", "colorado.edu", "uconn.edu", "udel.edu", "eng.ufl.edu", , , "uic.edu", , , "ku.edu", , "louisiana.edu", "louisville.edu", "maine.edu", , , "umich.edu", , , , , "seas.upenn.edu", "rochester.edu", "eng.ufl.edu", , "usm.edu", "utk.edu", "uta.edu", , "utdallas.edu", , , , "wisc.edu", , "usu.edu", "vanderbilt.edu", , , , , , , "wayne.edu"
]

// List of email domains of dept. chair of each university's ME dept.
const meEmailDomains2 = [
    "asu.edu", "auburn.edu", "binghamton.edu", "bu.edu", "bu.edu", "brown.edu", "brown.edu", "caltech.edu", "cmu.edu", "clemson.edu", "clemson.edu", "mines.edu", "columbia.edu", "cornell.edu", "drexel.edu", "duke.edu", "eng.famu.fsu.edu", "gmu.edu", "gatech.edu", "gatech.edu", "ccuny.cuny.edu", "seas.harvard.edu", "iastate.edu", "jhu.edu", "jhu.edu", "jhu.edu", "mit.edu", "mit.edu", "ncsu.edu", "northwestern.edu", "oregonstate.edu", "oregonstate.edu", "oregonstate.edu", "oregonstate.edu", "psu.edu", "princeton.edu", "princeton.edu", "purdue.edu", "rpi.edu", "rice.edu", "rutgers.edu", "tamu.edu", "tamu.edu", "ttu.edu", "tufts.edu", "buffalo.edu", "eng.ua.edu", "arizona.edu", "berkeley.edu", "uci.edu", "seas.ucla.edu", "seas.ucla.edu", "ucr.edu", "ucsd.edu", "ucsd.edu", "ucsd.edu", "ucsd.edu", "ucsd.edu", "engineering.ucsb.edu", "ucmail.uc.edu", "colorado.edu", "colorado.edu", "uconn.edu", "udel.edu", "ufl.edu", "hawaii.edu", "uh.edu", "uic.edu", "illinois.edu", , , "uky.edu", "louisiana.edu", "louisville.edu", "maine.edu", "umbc.edu", "umd.edu", "umich.edu", "umn.edu", "umn.edu", "missouri.edu", "unt.edu", "seas.upenn.edu", "me.rochester.edu", "ufl.edu", , , "utk.edu", "uta.edu", "uta.edu", "utdallas.edu", "utah.edu", "uw.edu", "uw.edu", "wisc.edu", "uwm.edu", "usu.edu", "vanderbilt.edu", "vcu.edu", "vt.edu", "vt.edu", "vt.edu", "wsu.edu", "wustl.edu", "wayne.edu", "mail.wvu.edu"
];
  
// Map of universities that have a ME dept. and their respective email domains
const meMappedUniversities = mapUniversitiesToDomains(meUniversities, meEmailDomains1, meEmailDomains2);

// List of universities that have a ME dept. ranked
const meUniversityRanking = [
  "Massachusetts Institute of Technology", "Stanford University", "California Institute of Technology", "University of California, Berkeley", "Georgia Institute of Technology", "University of Illinois Urbana-Champaign", "University of Michigan", "Purdue University", "Cornell University", "Princeton University", "Carnegie Mellon University", "University of Texas at Austin", "Northwestern University", "University of Chicago", "Johns Hopkins University", "Texas A&M University", "University of California, Los Angeles", "Pennsylvania State University", "University of Maryland, College Park", "University of Minnesota", "University of Pennsylvania", "Georgetown University", "University of North Carolina at Chapel Hill", "University of Wisconsin–Madison", "Emory University", "Virginia Tech", "Harvard University", "University of California, San Diego", "Duke University", "Ohio State University", "Rice University", "Columbia University", "University of Colorado Boulder", "University of Florida", "University of Southern California", "University of Washington", "Brown University", "Rensselaer Polytechnic Institute", "Boston College", "University of California, Santa Barbara", "University of Notre Dame", "Yale University", "Arizona State University", "University of California, Davis", "University of California, Irvine", "Iowa State University", "North Carolina State University", "Northeastern University", "University of Virginia", "Washington University in St. Louis", "Case Western Reserve University", "Michigan State University", "Vanderbilt University", "Boston University", "Colorado School of Mines", "Rutgers University–New Brunswick", "Brandeis University", "University of Delaware", "Clemson University", "Drexel University", "Tufts University", "University at Buffalo", "University of Arizona", "University of Connecticut", "University of Iowa", "University of Pittsburgh", "Auburn University", "Indiana University Bloomington", "Tulane University", "Dartmouth College", "George Washington University", "Stony Brook University", "University of Illinois Chicago", "University of California, Santa Cruz", "University of Massachusetts Amherst", "University of Tennessee", "Colorado State University", "New York University", "Oregon State University", "University of Central Florida", "University of Cincinnati", "University of Houston", "University of Utah", "University of Oregon", "Washington State University", "Syracuse University", "George Mason University", "University of Texas at Dallas", "University of California, Riverside", "Oklahoma State University–Stillwater", "University of Alabama", "New Jersey Institute of Technology", "University of Texas at Arlington", "University of Alabama in Huntsville", "University of Kentucky", "University of Nebraska–Lincoln", "University of Rochester", "University of South Carolina", "Binghamton University", "Kansas State University", "University at Albany, SUNY", "Texas Tech University", "University of Georgia", "University of Kansas", "University of Maryland, Baltimore County", "University of Missouri", "Virginia Commonwealth University", "West Virginia University", "Baylor University", "Florida State University", "Louisiana State University", "Mississippi State University", "University of Miami", "University of New Mexico", "University of Oklahoma", "University of Wisconsin–Milwaukee", "Graduate Center, CUNY", "Temple University", "University of Arkansas", "University of Hawaii at Manoa", "University of New Hampshire", "University of South Florida", "University of Texas at San Antonio", "Utah State University", "Wayne State University", "Old Dominion University", "Georgia State University", "Kent State University", "University of Alabama at Birmingham", "University of Colorado Denver", "University of Denver", "University of Louisville", "University of Maine", "University of Nevada, Reno", "Florida International University", "Montana State University", "Ohio University", "University of Texas at El Paso", "University of Mississippi", "University of Nevada, Las Vegas", "University of North Texas", "North Dakota State University", "University of Memphis", "University of Louisiana at Lafayette", "University of Southern Mississippi", "University of Montana"
];

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Please enter your email: ', (email) => {
    if (!hasAccess(email, meEmailDomains1, meEmailDomains2)) {
      rl.close();
      return;
    }

    const university = getUniversityFromEmail(email, meMappedUniversities);

    if (university) {
      console.log(`University associated with your email: ${university}`);
      const universityList = generateUniversityList(university, meUniversityRanking);
      console.log("Here are the universities ranked 20 places higher and 20 places lower:");
      console.log(universityList.join("\n"));
    } else {
      console.log("The email domain is not associated with any university in the list.");
    }

    rl.close();
  });
}

// Run the main function
main();