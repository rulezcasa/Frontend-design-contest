import "./styles.css"
import settings from "/Volumes/Harish/Coding/React /src/assets/Settings.png";
import bell from "/Volumes/Harish/Coding/React /src/assets/Vector.svg";
import profile from "/Volumes/Harish/Coding/React /src/assets/Ellipse 1.png";
import one from  "/Volumes/Harish/Coding/React /src/assets/1.jpg";
import two from  "/Volumes/Harish/Coding/React /src/assets/1.jpg";
import three from "/Volumes/Harish/Coding/React /src/assets/2.jpg";
import four from "/Volumes/Harish/Coding/React /src/assets/3.jpg";
import five from "/Volumes/Harish/Coding/React /src/assets/4.jpg";
import six from "/Volumes/Harish/Coding/React /src/assets/5.jpg";
export default function App(){
  return <div className="navigation-bar">
    <div className="form-row">
    <ul>
      <li className="logo">Demo company</li>
      <li><a href="#home">Home</a></li>
      <li><a href="#news">About</a></li>
      <li><a href="#contact">Work</a></li>
      <li><a href="#contact">Pricing</a></li>
      <li><a className="blog" href="#contact">Blog</a></li>
      <li><a className="settings" href="#settings"><img src={settings}></img></a></li>
      <li><a className="bell" href="#bell"><img src={bell}></img></a></li>
      <li><a className="profile" href="#bell"><img src={profile}></img></a></li>
    </ul>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="find-courses">
      <form>
        <label htmlFor="courses" className="courses-title">We tackle interesting topics everyday</label>
        <input className="input-box" type="text" defaultValue="Find Courses"></input>
      </form>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="nav-bar-2">
    <ul>
      <li><button class="button button5">All</button></li>
      <li><button class="button button5">Technology</button></li>
      <li><button class="button button5">Education</button></li>
      <li><button class="button button5">Lifestyle</button></li>
      <li><button class="button button5">Healthcare</button></li>
      <li><button class="button button5">Sport</button></li>
      <li><button class="button button5">Food</button></li>
    </ul>
    </div>
    <div class="flex-container">
      <div className="img-align">
        <img className="img-one" src={one}></img>
        <br></br>
        L I F E S T Y L E
        <div className="textbox">
            <br></br>
            Changing people's lifestyles for the better
        </div>
        <br></br>
        <div className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam officia animi corrupti, iste tempore assumenda modi odio minima molestiae earum maxime quod, iusto consequuntur iure quidem ratione autem maiores!
        </div>
      </div>
      < div>
      <img className="img-one" src={two}></img>
      <br></br>
        T E C H N O L O G Y
        <div className="textbox">
            <br></br>
            Simple solutions for complex connections
        </div>
        <br></br>
        <div className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam officia animi corrupti, iste tempore assumenda modi odio minima molestiae earum maxime quod, iusto consequuntur iure quidem ratione autem maiores!
        </div>
      </div>
      <div>
      <img className="img-one" src={three}></img>
      <br></br>
        S P O R T 
        <div className="textbox">
            <br></br>
            All things are difficult before they are easy
        </div>
        <br></br>
        <div className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam officia animi corrupti, iste tempore assumenda modi odio minima molestiae earum maxime quod, iusto consequuntur iure quidem ratione autem maiores!
        </div>
      </div>
      <div>
      <img className="img-one" src={four}></img>
      <br></br>
        E D U C A T I O N
        <div className="textbox">
            <br></br>
            How to memorize everything you read?
        </div>
        <br></br>
        <div className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam officia animi corrupti, iste tempore assumenda modi odio minima molestiae earum maxime quod, iusto consequuntur iure quidem ratione autem maiores!
        </div>
      </div>
      </div>
      <div class="flex-container">
      <div>
        <img className="img-one" src={five}></img>
        <br></br>
        L I F E S T Y L E
        <div className="textbox">
            <br></br>
            Changing people's lifestyles for the better
        </div>
        <br></br>
        <div className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam officia animi corrupti, iste tempore assumenda modi odio minima molestiae earum maxime quod, iusto consequuntur iure quidem ratione autem maiores!
        </div>
      </div>
      < div>
      <img className="img-one" src={six}></img>
      <br></br>
        T E C H N O L O G Y
        <div className="textbox">
            <br></br>
            Changing people's lifestyles for the better
        </div>
        <br></br>
        <div className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam officia animi corrupti, iste tempore assumenda modi odio minima molestiae earum maxime quod, iusto consequuntur iure quidem ratione autem maiores!
        </div>
      </div>
      <div>
      <img className="img-one" src={one}></img>
      <br></br>
       S P O R T
        <div className="textbox">
            <br></br>
            Changing people's lifestyles for the better
        </div>
        <br></br>
        <div className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam officia animi corrupti, iste tempore assumenda modi odio minima molestiae earum maxime quod, iusto consequuntur iure quidem ratione autem maiores!
        </div>
      </div>
      <div>
      <img className="img-one" src={three}></img>
      <br></br>
        E D U C A T I O N
        <div className="textbox">
            <br></br>
            Changing people's lifestyles for the better
        </div>
        <br></br>
        <div className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam officia animi corrupti, iste tempore assumenda modi odio minima molestiae earum maxime quod, iusto consequuntur iure quidem ratione autem maiores!
        </div>
      </div>
      </div>
  </div>
}