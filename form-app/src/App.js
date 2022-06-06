
import './App.css';
import './assets/styles.css'
import Form from './components/Form.jsx'
import CommentList from './components/CommentList.jsx'
import Comment from './components/Comment.jsx'

function App() {
  return (
    <div className="App">
      <CommentList>
        <Comment/>
      </CommentList>
      <Form />
    </div>
  );
}

export default App;
