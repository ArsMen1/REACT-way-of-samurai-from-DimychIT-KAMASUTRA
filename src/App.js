import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import Friends from "./components/AllFriends/Friends";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={'app-wrapper-content'}>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage}
                                              updateNewMessageText={props.updateNewMessageText}
                                              newMessagesText={props.dialogsPage.newMessagesText}/>}/>
                <Route path='/profile'
                       render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}
                                              updateNewPostText={props.updateNewPostText}/>}/>
                <Route path='/Music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
            </div>
        </div>
    );
};

export default App;