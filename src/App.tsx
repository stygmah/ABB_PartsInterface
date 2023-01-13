import { useEffect, useState } from 'react';
import  Part from './components/Part';
import { Feature } from './interfaces/feature';
import { createRandomFeature, updateFeatures } from './utils/dummyGenerator';

interface Part {
  features: Feature[],
  partName: string
}

const dummyPart:Part = {
  features: [
    createRandomFeature('random feature'),
    createRandomFeature('random feature'),
    createRandomFeature('random feature'),
    createRandomFeature('random feature'),
    createRandomFeature('random feature'),
    createRandomFeature('random feature'),
  ],
  partName: 'partName',
}


function App() {
  const [part, setPart] = useState(dummyPart);

  useEffect(()=>{
    const intervalId = window.setInterval(()=>{
      const oldFeatures = part.features;
      setPart({
        ...part,
        features: updateFeatures(oldFeatures),
      })
    }, 10000);
    return () => clearInterval(intervalId);
  },[]);

  return (
    <div className="App">
      {
        part ?       
        <Part 
          features={part.features}
          partName={part.partName}
        />:
        null
      }
    </div>
  );
}

export default App;
