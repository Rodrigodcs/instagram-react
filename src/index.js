import ReactDOM from "react-dom";
import Header from "./Components/Header"
import Base from "./Components/Base"
import Corpo from "./Components/Corpo"
import Sidebar from "./Components/Sidebar"

export default function App(){
    return (
        <div>
            <Header/>
            <Base/>
            <Corpo/>
            <Sidebar/>
        </div>
    );
}

ReactDOM.render(App(), document.querySelector(".root"));