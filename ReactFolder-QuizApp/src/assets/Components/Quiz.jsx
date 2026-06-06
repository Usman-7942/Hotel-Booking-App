import React,{ useState } from 'react'
import "./Quiz.css"
const Quiz = () => {


  const [start, setstart] = useState(false);
  const [selected, setselected] = useState("");
  const [indexupdate, setindexupdate] = useState(0);
  const [score, setscore] = useState(0);
  const [status, setstatus] = useState("");
  const [showresult, setshowresult] = useState(false);
  const Questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    id: 2,
    question: "Which language is used for styling web pages?",
    options: [
      "HTML",
      "Python",
      "CSS",
      "Java"
    ],
    correctAnswer: "CSS"
  },
  {
    id: 3,
    question: "Which is used to make a website interactive?",
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "C++"
    ],
    correctAnswer: "JavaScript"
  },
  {
    id: 4,
    question: "Which company developed React?",
    options: [
      "Google",
      "Microsoft",
      "Facebook",
      "Amazon"
    ],
    correctAnswer: "Facebook"
  },
  {
    id: 5,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style System",
      "Creative Style Sheets",
      "Colorful Style Syntax"
    ],
    correctAnswer: "Cascading Style Sheets"
  }
];



    let clickedoption = (opt)=>{
        setselected(opt)
        if(opt === Questions[indexupdate].correctAnswer)
        {
            setscore( prev => prev + 1);
            setstatus("Correct");
        }
        else
        {
            setstatus("Wrong");
        }
        setTimeout(()=>{
           setindexupdate(prev => {
            if (prev + 1 < Questions.length) {
                return prev + 1;
            } else {
                setshowresult(true);
                return prev;
            }
        });
           setselected("");
        },2000)
    }


    const goback = () => {
        setstart(false);
        setshowresult(false);
        setindexupdate(0);
        setscore(0);
    };


  return (
    <div>
     
     {
        !start ? (
        <div className="container">
            <h2>Quiz</h2>
            <p>let's Start your Quiz by clicking the Start Button</p>
            <button className="start_btn"
            onClick={()=>{
                setstart(true)
            }}
            >
                Start
            </button>
        </div>
        ) 
     

    : showresult ? (
                    <div className="container">
                        {
                            score < 3 ?(
                                <p className="show_progress">
                                Do not Give Up Try Again </p>
                            ) 
                            : score == 3 ?(
                                <p className="show_progress">
                                Very Good Improve More Keep It Up</p>
                            )
                            :  (
                                <p className="show_progress">
                                Execellent Job</p>
                            )
                        }
                        <button className="back_btn"
                        onClick={ goback }
                        >Back</button>
                    </div>
                
    )    

    :

     
         (
        <div className="questions_container">
            <p className="questions_list">
                {`Q.${indexupdate + 1}   ${Questions[indexupdate].question}`}
            </p>

            {Questions[indexupdate].options.map((opt, index) =>(
                <div className="options_list" key={index}
                    onClick={ () => clickedoption(opt)}
                    style={{ border: selected === opt
                            ? opt === Questions[indexupdate].correctAnswer
                                ? "2px solid green"
                                : "2px solid red"
                            : "none"
                        }}
                    >
                    {`${index + 1}.  ${opt}`}
                </div>
            ))}
              
            

           


            
                 
           {
            selected && (<div>
                <div className="score">
                {`Score is ${score}`}
            </div>

            <div className="answer"
                style={{ color: status === "Correct" ? 
                    "green" : status ==="Wrong"
                    ? "red" : "none"
                }}
            >
                {status}
            </div>
                </div>
            )
           }
                
            
            

            <div className="questions_bar">
                <div className="bar"
                  style={{
                    width: selected
                        ? `${((indexupdate + 1) / Questions.length) * 100}%`
                        : `${(indexupdate / Questions.length) * 100}%`
                    }}
                ></div>
            </div>
        </div>
        )
    }












    </div>
  )
}

export default Quiz
