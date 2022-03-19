
import './App.css';
import LoadComments from './components/LoadComments/LoadComments';
import LoadPosts from './components/LoadPosts/LoadPosts';
function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <LoadComments></LoadComments>
    </div>
  );
}

export default App;
