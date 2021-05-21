import './App.css';
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <h1>Comments</h1>
      <Comments></Comments>
    </div>
  );
}

export default App;

// Повторите пример с комментариями из ДЗ Недели 17 на React. Сделайте, чтобы при добавлении нового комментария он добавлялся сверху в списке и подсвечивался другим цветом. 