import componentsImg from './assets/components.png';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';




function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
          
          
          
        </ul>
        </section>
        

      </main>
    </div>
  );
}

export default App;
