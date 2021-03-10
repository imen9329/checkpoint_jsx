import "./App.css";
import MyImage from "./MyImage.jpg";
import "./Style.css";

function App() {
    return (
        <div className="App">
            <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
                <h1 className="title red">Your name here</h1>
                <br />
                <img src={MyImage} alt="jellyFish Image" />
                <br />
                <img src="/MyImage2.jpg" alt="flower image" />
            </div>
            <video width="320" height="240" controls>
                <source src="myVideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default App;
