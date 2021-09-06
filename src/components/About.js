export default function About(props) {

    let myStyle = {
        color : props.mode === 'dark' ? 'white' : 'black',
        backgroundColor : props.mode === 'dark' ? 'rgba(0, 0, 0, 0.85)' : 'white',
        // border : '1px solid',
        borderColor : props.mode === 'dark' ? 'white' : 'black',
    }
    // const [myStyle, setMyStyle] = useState({
    //     color : 'white',
    //     backgroundColor : 'black',
    //     border : '1px solid white'
    // })
    // const [btnText, setbtnText] = useState("Enable Light Mode")

    // function toggleStyle(){
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color : 'black',
    //             backgroundColor : 'white',
    //         })
    //         setbtnText("Enable Dark Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border : '1px solid white'
    //         })
    //         setbtnText("Enable Light Mode");
    //     }
    // }

    return (
    <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className="my-2">About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
{/*      <div className="container">
        <button onClick={toggleStyle} type="button" class="btn btn-dark mx-2 my-3">{btnText} </button>
    </div>*/}
    </div>
    )
}
