fetch("./data.json")//Fetches the Data and json file
  .then(response => response.json())//Parses the data
  .then(data => {
    const table = document.getElementById("table");//Gets the table
    let n = data.student.length;//Gets a varaible equal to the length of the object

    if (n > 0) {//If vaild
      
      for (let i = 0; i < n; i++) {
        const student = data.student[i];//Creates a variable with the respective object

        
        const row = table.insertRow(i);//Insert row method inserts as many rows as the number of object

        
        const nameCell = row.insertCell(0);//Adds cells
        const ageCell = row.insertCell(1);
        const classCell = row.insertCell(2);

        
        nameCell.textContent = student.name;//Edits the text content and adds the info
        ageCell.textContent = student.age;
        classCell.textContent = student.class;
      }
    } else {
      console.log("No student data found");
    }
  })
  .catch(error => console.error("Error ", error));

// Creating A Object 

// const student = {
//     name: "Akshat",
//     class: 9,
//     section: "A",
//     age: 14,
    
// };
// Turns the object into a json file

// const userjson = JSON.stringify(student);

// console.log(userjson);
