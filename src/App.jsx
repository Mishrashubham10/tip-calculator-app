import { useEffect, useState } from "react";

// Components
import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (bill > 0 && people > 0 && tip > 0) {
      setCalculatedTip(bill * (tip / 100));
      setTotal(calculatedTip + bill)
    }
  }, [bill, people, tip, calculatedTip]);

  const handleResetBtn = () => {
    setBill("");
    setTip("");
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
    console.log("Hurray! you're good to go");
  }

  return (
    <div className="wrapper">
      <h3 className="app-header">splitter</h3>
      <div className="container">
        <Form 
          bill={bill} 
          setBill={setBill}
          tip={tip} 
          setTip={setTip}
          people={people} 
          setPeople={setPeople} 
        />
        <Display
          total={total}
          people={people}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
        />
      </div>
    </div>
  );
}

export default App;
