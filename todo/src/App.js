import './App.css';
import Header from './MyComponents/Header';
import Todolist from './MyComponents/Todolist';
import Footer from './MyComponents/Footer';

function App() {
 
  let todos =[
    {
        sno :1,
        title : "Complete NFS most wanted",
        desc : "Defeat Razor to become the blacklist 1"
    },
    {
        sno :2,
        title : "Complete One Piece",
        desc : "Luffy is going to be the King of the Pirates"
    },
    {
        sno :3,
        title : "Bleach is Sick",
        desc : "How will Ichigo get his new Zanpakutu"
    }
    ]  
  
  
  return (
    <div>
  <Header title="My Todo List"  searchBar={false}/>
    <Todolist todos={todos}/>
    <Footer/>
    
    
      
    </div>
  );
}

export default App;
