import componentsImg from './assets/components.png';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';
import TabButton from './components/TabButton';

function App() {
  let tabConstent = 'Please click a button';
  function handleSelect(selectedButton) {

    console.log(selectedButton);
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('component')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabConstent};
        </section>
      </main>
    </div>
  );
}

export default App;
