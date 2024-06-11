import { useCallback, useState } from "react";

import QUESTIONS from '../questions';
import Questions from "./Questions";
import Summary from "./Summary";

export default function Quiz(){
    const [userAnswer, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswer.length;
    const quizComplete = activeQuestionIndex === QUESTIONS.length;
    
    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer){
        setUserAnswer((prevUserAnswer) => {
            return [...prevUserAnswer, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null), 
        [handleSelectAnswer]);

    if(quizComplete){
        return <Summary userAnswer = {userAnswer}/>
    }

    return (
        <div id="quiz">
            <Questions 
                key={activeQuestionIndex}
                questionIndex={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}