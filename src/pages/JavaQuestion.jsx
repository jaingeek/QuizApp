import "./page.css";

export default function SQLQuestion(){
    function display(event) {
    // Retrieve selected answers from the form
    let ans1 = event.target.java_q1.value
    let ans2 = event.target.java_q2.value
    let ans3 = event.target.java_q3.value
    let ans4 = event.target.java_q4.value
    let ans5 = event.target.java_q5.value
    let ans6 = event.target.java_q6.value
    let ans7 = event.target.java_q7.value
    let ans8 = event.target.java_q8.value
    let ans9 = event.target.java_q9.value
    let ans10 = event.target.java_q10.value

    // Initialize marks
    let marks = 0;

    // Check answers and update marks
    if (ans1 === 'To create a static method that can be called without creating an instance of the class') marks++;
    if (ans2 === 'Try') marks++;
    if (ans3 === 'To access the superclass methods and fields') marks++;
    if (ans4 === 'private') marks++;
    if (ans5 === 'Compilation error') marks++;
    if (ans6 === 'To refer to the current instance of the class') marks++;
    if (ans7 === 'float') marks++;
    if (ans8 === 'Exits a loop or switch statement') marks++;
    if (ans9 === 'To declare a constant variable') marks++;
    if (ans10 ==='Method') marks++;

    // Display the obtained marks
    alert("Marks Obtained: " + marks);
}


   return(
      <div className='content'>
        <form onSubmit={display}>
          <h1>Answer these Java Questions</h1>
          <Question1
              ques="Q1. What is the purpose of the 'static' keyword in Java?"
              op1="To define a variable that belongs to the class rather than the instance of a class"
              op2="To create a static method that can be called without creating an instance of the class"
              op3="To declare a constant variable"
              op4="To define a class as abstract"
              name="java_q1"
          />

          <Question2
              ques="Q2. What is the Java keyword used to handle exceptions?"
              op1="Exception"
              op2="Catch"
              op3="Throw"
              op4="Try"
              name="java_q2"
          />

          <Question3
              ques="Q3. In Java, what is the purpose of the 'super' keyword?"
              op1="To access the superclass methods and fields"
              op2="To define a subclass"
              op3="To create an instance of a class"
              op4="To call the superclass constructor"
              name="java_q3"
          />

          <Question4
              ques="Q4. Which Java modifier is used to restrict access to a class or a member within a package?"
              op1="public"
              op2="private"
              op3="protected"
              op4="default"
              name="java_q4"
          />

          <Question5
              ques="Q5. What is the output of the following Java code snippet?
                        int a=10
                        int b=20;
                        int sum=a+b;
                        System.out.println(sum);"
              op1="true"
              op2="false"
              op3="Compilation error"
              op4="Runtime error"
              name="java_q5"
          />

          <Question6
              ques="Q6. What is the role of the 'this' keyword in Java?"
              op1="To refer to the current instance of the class"
              op2="To create a new instance of a class"
              op3="To access superclass methods"
              op4="To define a static method"
              name="java_q6"
          />

          <Question7
              ques="Q7. Which Java data type is used to store single-precision floating-point numbers?"
              op1="float"
              op2="double"
              op3="int"
              op4="long"
              name="java_q7"
          />

          <Question8
              ques="Q8. What does the 'break' statement do in Java?"
              op1="Exits a loop or switch statement"
              op2="Skips the current iteration of a loop"
              op3="Throws an exception"
              op4="Terminates the program"
              name="java_q8"
          />

          <Question9
              ques="Q9. What is the purpose of the 'final' keyword in Java?"
              op1="To declare a constant variable"
              op2="To define a class as abstract"
              op3="To create a static method"
              op4="To restrict access to a class"
              name="java_q9"
          />

          <Question10
              ques="Q10. What is the Java term for a function defined within a class?"
              op1="Function"
              op2="Procedure"
              op3="Method"
              op4="Routine"
              name="java_q10"
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
