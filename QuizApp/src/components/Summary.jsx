import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions'
export default function Summary({userAnswer}){

    const skippedAnswers = userAnswer.filter(answer => answer === null);
    const correctAnswers = userAnswer.filter(
        (answer, index) => answer === QUESTIONS[index].answers[0]
    );
    const skippedAnswerShare = Math.round(
        (skippedAnswers.length / userAnswer.length) * 100
    );
    const correctAnswerShare = Math.round(
        (correctAnswers.length / userAnswer.length) * 100
    );
    const wrongAnswerShare = 100 - (skippedAnswerShare + correctAnswerShare);
    return (
        <div id="summary">
            <img src={quizCompleteImg} alt='Thopgy icon'/>
            <h2>Quiz Completed!</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedAnswerShare}%</span>
                    <span className='text'>Skipped</span>
                </p>
                <p>
                    <span className='number'>{correctAnswerShare}%</span>
                    <span className='text'>Answered Correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswerShare}%</span>
                    <span className='text'>Answered Incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswer.map((answer, index) => {
                    let cssClass = 'user-answer';
                    if(answer === null){
                        cssClass += ' skipped';
                    } else if (answer === QUESTIONS[index].answers[0]){
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }
                    return (
                    <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className='question'>{QUESTIONS[index].text}</p>
                        <p className={cssClass}>{answer ?? 'Skipped'}</p>
                    </li>
                );
            })}
                

            </ol>
        </div>
    );
}