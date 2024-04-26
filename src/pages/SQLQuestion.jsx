import "./page.css";

export default function SQLQuestion(){
    function display(event) {
    // Retrieve selected answers from the form
    let ans1 = event.target.q1.value;
    let ans2 = event.target.q2.value;
    let ans3 = event.target.q3.value;
    let ans4 = event.target.q4.value;
    let ans5 = event.target.q5.value;
    let ans6 = event.target.q6.value;
    let ans7 = event.target.q7.value;
    let ans8 = event.target.q8.value;
    let ans9 = event.target.q9.value;
    let ans10 = event.target.q10.value;

    // Initialize marks
    let marks = 0;

    // Check answers and update marks
    if (ans1 === 'Structured Query Language') marks++;
    if (ans2 === 'WHERE') marks++;
    if (ans3 === 'To retrieve data from one or more tables') marks++;
    if (ans4 === 'COUNT(*)') marks++;
    if (ans5 === 'To combine rows from two or more tables based on a related column') marks++;
    if (ans6 === 'ORDER BY DESC') marks++;
    if (ans7 === 'To group rows that have the same values in specified columns') marks++;
    if (ans8 === 'Organizing data to minimize redundancy') marks++;
    if (ans9 === 'Filters the results based on a specified condition') marks++;
    if (ans10 === 'INSERT INTO') marks++;

    // Display the obtained marks
    alert("Marks Obtained: " + marks);
  }


   return(
    <div className='content'>
        <form onSubmit={display}>
            <h1>Answer these SQL Questions</h1>
            <Question1
            ques="Q1. What does SQL stand for?"
            op1="Structured Query Language"
            op2="Standardized Query Language"
            op3="Sequential Query Language"
            op4="Simplified Query Language"
            name="q1"
        />

        <Question2
            ques="Q2. Which SQL clause is used to filter the results of a query?"
            op1="ORDER BY"
            op2="GROUP BY"
            op3="WHERE"
            op4="HAVING"
            name="q2"
        />

        <Question3
            ques="Q3. What is the purpose of the SQL SELECT statement?"
            op1="To update records in a table"
            op2="To insert new records into a table"
            op3="To retrieve data from one or more tables"
            op4="To delete records from a table"
            name="q3"
        />

        <Question4
            ques="Q4. Which SQL function is used to find the total number of rows in a table?"
            op1="COUNT(*)"
            op2="SUM()"
            op3="AVG()"
            op4="MAX()"
            name="q4"
        />

        <Question5
            ques="Q5. What is the purpose of the SQL JOIN clause?"
            op1="To concatenate strings"
            op2="To update existing records"
            op3="To combine rows from two or more tables based on a related column"
            op4="To perform mathematical operations"
            name="q5"
        />

        <Question6
            ques="Q6. Which SQL statement is used to sort the result set in descending order?"
            op1="SORT DESC"
            op2="ORDER BY DESC"
            op3="DESC SORT"
            op4="ORDER DESC"
            name="q6"
        />

        <Question7
            ques="Q7. What is the purpose of the SQL GROUP BY clause?"
            op1="To filter the results of a query"
            op2="To update records in a table"
            op3="To group rows that have the same values in specified columns"
            op4="To delete records from a table"
            name="q7"
        />

        <Question8
            ques="Q8. In SQL, what does the term 'Normalization' refer to?"
            op1="Sorting data in ascending order"
            op2="Organizing data to minimize redundancy"
            op3="Creating indexes on tables"
            op4="Combining tables into one large table"
            name="q8"
        />

        <Question9
            ques="Q9. What does the SQL WHERE clause do?"
            op1="Filters the results based on a specified condition"
            op2="Orders the results in ascending order"
            op3="Joins two or more tables"
            op4="Combines rows from two or more tables"
            name="q9"
        />

        <Question10
            ques="Q10. Which SQL statement is used to add new rows to a table?"
            op1="INSERT INTO"
            op2="ADD ROW"
            op3="ADD RECORD"
            op4="NEW ROW"
            name="q10"
        />

            
          <button className="submit-button" type="submit">Get Results</button>

        </form>

        </div>
   );
}

function Question1(props) {
  return (
   <div className='questions'>
      <div className='question'><strong>{props.ques}</strong><br /> </div>
      <div className='options'>
        <input type="radio" name={props.name} value={props.op1} /> <label>{props.op1}</label>
        <input type="radio" name={props.name} value={props.op2} /> <label>{props.op2}</label>
         <input type="radio" name={props.name} value={props.op3} /> <label>{props.op3}</label>
        <input type="radio" name={props.name} value={props.op4} /> <label>{props.op4}</label>
      </div>
    </div>
  );
}

function Question2(props) {
  return (
    <div className='questions'>
      <div className='question'><strong>{props.ques}</strong><br /> </div>
      <div className='options'>
        <input type="radio" name={props.name} value={props.op1} /> <label>{props.op1}</label>
        <input type="radio" name={props.name} value={props.op2} /> <label>{props.op2}</label>
        <input type="radio" name={props.name} value={props.op3} /> <label>{props.op3}</label>
        <input type="radio" name={props.name} value={props.op4} /> <label>{props.op4}</label>
      </div>
    </div>
  );
}

function Question3(props) {
  return (
     <div className='questions'>
      <div className='question'><strong>{props.ques}</strong><br /> </div>
      <div className='options'>
        <input type="radio" name={props.name} value={props.op1} /> <label>{props.op1}</label>
        <input type="radio" name={props.name} value={props.op2} /> <label>{props.op2}</label>
        <input type="radio" name={props.name} value={props.op3} /> <label>{props.op3}</label>
        <input type="radio" name={props.name} value={props.op4} /> <label>{props.op4}</label>
      </div>
    </div>
  );
}
function Question4(props) {
  return (
     <div className='questions'>
      <div className='question'><strong>{props.ques}</strong><br /> </div>
      <div className='options'>
        <input type="radio" name={props.name} value={props.op1} /> <label>{props.op1}</label>
        <input type="radio" name={props.name} value={props.op2} /> <label>{props.op2}</label>
        <input type="radio" name={props.name} value={props.op3} /> <label>{props.op3}</label>
        <input type="radio" name={props.name} value={props.op4} /> <label>{props.op4}</label>
      </div>
    </div>
  );
}
function Question5(props) {
  return (
     <div className='questions'>
      <div className='question'><strong>{props.ques}</strong><br /> </div>
      <div className='options'>
        <input type="radio" name={props.name} value={props.op1} /> <label>{props.op1}</label>
        <input type="radio" name={props.name} value={props.op2} /> <label>{props.op2}</label>
        <input type="radio" name={props.name} value={props.op3} /> <label>{props.op3}</label>
        <input type="radio" name={props.name} value={props.op4} /> <label>{props.op4}</label>
      </div>
    </div>
  );
}
function Question6(props) {
  return (
     <div className='questions'>
      <div className='question'><strong>{props.ques}</strong><br /> </div>
      <div className='options'>
        <input type="radio" name={props.name} value={props.op1} /> <label>{props.op1}</label>
        <input type="radio" name={props.name} value={props.op2} /> <label>{props.op2}</label>
        <input type="radio" name={props.name} value={props.op3} /> <label>{props.op3}</label>
        <input type="radio" name={props.name} value={props.op4} /> <label>{props.op4}</label>
      </div>
    </div>
  );
}
function Question7(props) {
  return (
     <div className='questions'>
      <div className='question'><strong>{props.ques}</strong><br /> </div>
      <div className='options'>
        <input type="radio" name={props.name} value={props.op1} /> <label>{props.op1}</label>
        <input type="radio" name={props.name} value={props.op2} /> <label>{props.op2}</label>
        <input type="radio" name={props.name} value={props.op3} /> <label>{props.op3}</label>
        <input type="radio" name={props.name} value={props.op4} /> <label>{props.op4}</label>
      </div>
    </div>
  );
}
function Question8(props) {
  return (
     <div className='questions'>
      <div className='question'><strong>{props.ques}</strong><br /> </div>
      <div className='options'>
        <input type="radio" name={props.name} value={props.op1} /> <label>{props.op1}</label>
        <input type="radio" name={props.name} value={props.op2} /> <label>{props.op2}</label>
        <input type="radio" name={props.name} value={props.op3} /> <label>{props.op3}</label>
        <input type="radio" name={props.name} value={props.op4} /> <label>{props.op4}</label>
      </div>
    </div>
  );
}
function Question9(props) {
  return (
     <div className='questions'>
      <div className='question'><strong>{props.ques}</strong><br /> </div>
      <div className='options'>
        <input type="radio" name={props.name} value={props.op1} /> <label>{props.op1}</label>
        <input type="radio" name={props.name} value={props.op2} /> <label>{props.op2}</label>
        <input type="radio" name={props.name} value={props.op3} /> <label>{props.op3}</label>
        <input type="radio" name={props.name} value={props.op4} /> <label>{props.op4}</label>
      </div>
    </div>
  );
}
function Question10(props) {
  return (
     <div className='questions'>
      <div className='question'><strong>{props.ques}</strong><br /> </div>
      <div className='options'>
        <input type="radio" name={props.name} value={props.op1} /> <label>{props.op1}</label>
        <input type="radio" name={props.name} value={props.op2} /> <label>{props.op2}</label>
        <input type="radio" name={props.name} value={props.op3} /> <label>{props.op3}</label>
        <input type="radio" name={props.name} value={props.op4} /> <label>{props.op4}</label>
      </div>
    </div>
  );
}

