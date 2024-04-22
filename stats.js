const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

if (fs.existsSync(outputFile)) { // check for existing output file
  fs.unlinkSync(outputFile); // delete it true. (To start a fresh file)
}

const data = fs.readFileSync(inputFile, "utf-8");
const lines = data.split(/\n/);

for (line of lines) {
      
      elements = line.split(delimiter);

      let lengthOfPass = elements[1].length
      //console.log(lengthOfPass)

      let accPassword = elements[1];
      //console.log(accPassword)

    console.log("The " + elements + " has " + elements[1].length + " characters ");

     //let lengthOfElements = line.length;
      //console.log(lengthOfElements);

      let differentLength = 

    
}

