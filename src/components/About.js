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
              <strong>
                Analyze Your Text
              </strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            <strong>
                Free to use
            </strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>
                    Browser compatible
                </strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
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
