import {React, Component } from"react";
import { Form,} from "react-bootstrap";
import {evaluate} from"mathjs";

const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto"
}

const Div = {
    width:"100%",
    margin:"0 auto"
}

class FalsePosition extends Component{
    constructor(props) {
    super(props);
    this.state = {
      answer: null, // Initialize answer as null
    };
  }

    Cal_Falseposition(){
        var XR = document.getElementById("input_xr").value
        var XL = document.getElementById("input_xl").value;
        var equation = document.getElementById("Equation").value;
        var xr = parseFloat(XR);
        var xl = parseFloat(XL);
        var scope;
        var xm, yl, yr, ym;
        // var itermax = 50;
        // var iter = 0;
        do{
            scope = { x:xr };
            yr = evaluate(equation, scope);
            scope = { x:xl };
            yl = evaluate(equation, scope);
            xm = (xl*yr + xr*yl) / (yr - yl);
            scope = { x:xm };
            ym = evaluate(equation, scope);
            // iter++;

            if(ym * yr < 0){
                xl = xm;
            }
            else if(ym * yr > 0){
                xr = xm;
            }
        }
        while(Math.abs(ym) >= 0.000001);

        this.setState({ answer: xm });
    }

    render(){
          const centerTextStyle = {
              textAlign: 'center',
            };
            const centerAnswerStyle = {
                textAlign: "center",
                marginTop: "20px", // Adjust the margin-top value as needed
              };
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                    <h1 style={centerTextStyle} > FalsePosition Method</h1>

                        <br/><br/>

                        <div>
                            <Form.Control id="Equation" type="text" placeholder="input Equation" style={{width:"10%", margin:"0 auto"}} defaultValue="x^4 - 13"></Form.Control>
                            <br/>
                            <Form.Control id="input_xl" type="number" placeholder="input XL" style={{width:"10%", margin:"0 auto"}} defaultValue="1.5"></Form.Control>
                            <Form.Control id="input_xr" type="number" placeholder="input XR" style={{width:"10%", margin:"0 auto"}} defaultValue="2"></Form.Control>
                        </div>
                        <br/>

                        <button
                        type="button"
                        className="btn btn-warning mx-auto d-block"
                        style={{ margin: "1% auto" }}
                        onClick={this.Cal_Falseposition.bind(this)}
                        >
                        Calculate
                        </button>
                        <br/><br/>
                         {this.state.answer !== null && (
                        < h5 style={centerAnswerStyle}>Answer = {this.state.answer.toPrecision(7)}</h5>
                         )}
                    </div>
                </div>
            </div>
        )
    }
}

export default FalsePosition;