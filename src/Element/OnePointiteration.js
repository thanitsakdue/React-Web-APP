import {React, Component} from"react";
import {Button, Form} from"react-bootstrap";
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

class OnePointiteration extends Component{

    Cal_Onepoint(){
        var equation = document.getElementById("Equation").value;
        var x0 = parseFloat(document.getElementById("input_x0").value);
        var x1, xold, scope;
        var e = 0.00001;
        do{
            xold = x0;
            scope = { x:x0 };
            x1 = evaluate(equation, scope);
            x0 = x1;

        }while((Math.abs((x1-xold) / x1) * 100) >= e);
        
        document.getElementById("ans").innerHTML=x1;
    }

    render(){
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                        <h1 className="text-center" > One Point Iteration</h1>
                        <br/><br/>

                        <div>
                            <Form.Control id="Equation" type="text" placeholder="input Equation" style={{width:"10%", margin:"0 auto"}} defaultValue="(1+2*x)/4"></Form.Control>
                            <br/>
                            <Form.Control id="input_x0" type="number" placeholder="input X0" style={{width:"10%", margin:"0 auto"}}></Form.Control>
                        </div>
                        <br/>

                        <Button  className="btn btn-warning mx-auto d-block"  onClick={this.Cal_Onepoint} style={{width:"10", margin:"0 auto"}}> Calculate </Button>
                        <br/><br/>
                        <h5 className="text-center" id="ans"></h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default OnePointiteration;