import { useState } from 'react';
import './App.css';

const messages = [
  "Learn React 😃",
  "Apply for Jobs 🤠",
  "Invest your new income 😎 "
]

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((currentStep) => currentStep + 1);
    }
  }

  return (
    <>
      <button className='close' onClick={() => setIsOpen((toggle) => !toggle)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className='numbers'>
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step} >{messages[step - 1]}
          <buttton
          onClick={() => alert(`Learn how to ${messages[step - 1]} `)}
          style={{ backgroundColor: "#7950f2", color: "#fff", cursor: "pointer"}}
          >
            Learn how
            </buttton> 
          </StepMessage>

          <div className='buttons'>
            <Buttton onClicked={handlePrevious} text="Previous" emoji="👈" />
            <Buttton onClicked={handleNext} text="Next" emoji="👉" />
          </div>
        </div>
      )}
      <div>
      <StepMessage step={1}>
            <p>Pass in content</p>
            <p>🤠</p>
          </StepMessage>
          <StepMessage step={1}>
            <p>Read children Props</p>
            <p>😎</p>
          </StepMessage>
      </div>
        
    </>

  );
}

export default App;

function Buttton({ text, onClicked, emoji }) {
  return (
    <button style={{ backgroundColor: "#7950f2", color: "#fff", cursor: "pointer", borderRadius: "30px", fontSize: "16px" }}
      onClick={onClicked}>
      <span>{emoji}</span> {text}
    </button>
  )
}

function StepMessage({ step, children }) {
  return (
    <div className='message'>
      <h3>Step  : {step}</h3>
      {children}
    </div>
  )
}
