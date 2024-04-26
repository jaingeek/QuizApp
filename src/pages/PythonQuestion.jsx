import "./page.css";

export default function SQLQuestion(){
    function display(event) {
      // Retrieve selected answers from the form
      let ans1 = event.target.python_q1.value;
      let ans2 = event.target.python_q2.value;
      let ans3 = event.target.python_q3.value;
      let ans4 = event.target.python_q4.value;
      let ans5 = event.target.python_q5.value;
      let ans6 = event.target.python_q6.value;
      let ans7 = event.target.python_q7.value;
      let ans8 = event.target.python_q8.value;
      let ans9 = event.target.python_q9.value;
      let ans10 = event.target.python_q10.value;

      // Initialize marks
      let marks = 0;

      // Check answers and update marks
      if (ans1 === 'To define a function') marks++;
      if (ans2 === 'By a colon') marks++;
      if (ans3 === 'List') marks++;
      if (ans4 === 'The object instance being operated on') marks++;
      if (ans5 === 'To handle exceptions') marks++;
      if (ans6 === 'len()') marks++;
      if (ans7 === "''' Comment '''") marks++;
      if (ans8 === 'To define a function') marks++;
      if (ans9 === 'True') marks++;
      if (ans10 === 'break') marks++;

      // Display the obtained marks
      alert("Marks Obtained: " + marks);
    }


   return(
    <div className='content'>
        <form onSubmit={display}>
            <h1>Answer these Python Questions</h1>
            <Question1
              ques="Q1. What is the primary purpose of the 'def' keyword in Python?"
              op1="To define a variable"
              op2="To create a class"
              op3="To define a function"
              op4="To import a module"
              name="python_q1"
            />

            <Question2
              ques="Q2. In Python, how is an 'if' statement terminated?"
              op1="By a semicolon"
              op2="By a comma"
              op3="By a colon"
              op4="By a period"
              name="python_q2"
            />

            <Question3
              ques="Q3. Which Python data type is used to store an ordered collection of elements?"
              op1="List"
              op2="Tuple"
              op3="Set"
              op4="Dictionary"
              name="python_q3"
            />

            <Question4
              ques="Q4. What does the 'self' parameter represent in a Python class method?"
              op1="The class itself"
              op2="The superclass"
              op3="The object instance being operated on"
              op4="A reserved keyword"
              name="python_q4"
            />

            <Question5
              ques="Q5. In Python, what is the purpose of the 'try' and 'except' blocks?"
              op1="To define a function"
              op2="To create an object"
              op3="To handle exceptions"
              op4="To import modules"
              name="python_q5"
            />

            <Question6
              ques="Q6. Which Python function is used to calculate the length of a string?"
              op1="count()"
              op2="length()"
              op3="len()"
              op4="size()"
              name="python_q6"
            />

            <Question7
              ques="Q7. What is the correct way to comment out multiple lines in Python?"
              op1="# Comment"
              op2="// Comment"
              op3="''' Comment '''"
              op4="/* Comment */"
              name="python_q7"
            />

            <Question8
              ques="Q8. In Python, what is the purpose of the 'lambda' keyword?"
              op1="To declare a variable"
              op2="To define a function"
              op3="To create a class"
              op4="To import a module"
              name="python_q8"
            />

            <Question9
              ques="Q9. What is the output of the following Python code snippet?"
              op1="True"
              op2="False"
              op3="None"
              op4="Error"
              name="python_q9"
            />

            <Question10
              ques="Q10. Which Python keyword is used to exit a loop prematurely?"
              op1="halt"
              op2="break"
              op3="finish"
              op4="stop"
              name="python_q10"
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

