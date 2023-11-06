import {React, Component} from "react";
import Form from "react-bootstrap/Form";


class Gauss extends Component{
    constructor(){
        super();
        console.log("constructor called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
    }
    createInputMatrix(){
       
        var N = document.getElementById("matrixSize").value;
        var MatString = ''//"<Form><Form.Group >";
        var n = parseInt(N)

        if (N !== ''){
            MatString += "<div><Form.Label class = 'forMatrix' style={{margin:'1% auto'}}>Matrix Input</Form.Label></div>"
        
            for (var i = 0; i < n; i++){
                for (var j = 0; j < n; j++){
                    
                    MatString += "<input id='inputA" + i + j + "' type='number' placeholder='a" + String.fromCharCode(8320 + i) + String.fromCharCode(8321 + j) + "' style='width:7%; margin:0.2% auto; margin-right: 5px; '/>"

                }
                MatString+="<span> | </span>"
               
                MatString += "<input id='inputA" + i + n + "' type='number' placeholder='b" + String.fromCharCode(8320 + i) + "' style='width:5%; margin:1% auto;'/>"

                MatString+="<br>"
            }
        }

        //sent out
        document.getElementById("generateMatrix").innerHTML = MatString;
    }
    
    getVariable(){


        //f
        function cloneArray(A) {
            return A.map((a)=> a.slice());
        }

        //var def
        var N = document.getElementById("matrixSize").value;
        var n = parseInt(N)
        

        //create array A
        var A = new Array(n)

        for (let index = 0; index < A.length; index++) {
            A[index] = new Array(n);
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n+1; j++) {
                var NUM = document.getElementById("inputA"+i+j+"").value;
                var num = parseInt(NUM)
                A[i][j] = num
            }
        }
        // console.log(math.sum(A))    // test

        //calculate
        var ans = '';
        var calM = cloneArray(A);
        for (let c = 0; c < n - 1; c++) {
          for (let i = c + 1; i < n; i++) {
            var toMul = calM[i][c];
            if (calM[i][c] !== 0) {
              for (var j = 0; j < n + 1; j++) {
                calM[i][j] = Number((calM[i][j] - (calM[c][j] / calM[c][c] * toMul)).toFixed(5));
              }
            }
          }
        }
        
        //solve equation
        var x = new Array(n);
        x[n - 1] = calM[n - 1][n] / calM[n - 1][n - 1];
        for (let i = n - 2; i >= 0; i--) {
          var sum = 0;
          for (let j = n - 1; j >= i + 1; j--) {
            sum += calM[i][j] * x[j];
          }
          x[i] = (calM[i][n] - sum) / calM[i][i];
        }
        for (let i = 0; i < n; i++) {
          ans += `X<sub>${i + 1}</sub> = ${x[i]}<br>`;
        }
        //sent
        document.getElementById("showAns").innerHTML = ans;
      }
    render(){
        const h3Style = {
            marginTop: "20px", // You can adjust the value to your preferred spacing
          };
        return(
                <div className="text-center">
                   <h3 style={h3Style}>Gauss Elimination Method</h3>
                    <Form>
                        <Form.Group class="mb-3 text-center">
                            <Form.Label class = "text-center" >
                                Input Matrix Size
                            </Form.Label>
                            {/* f(x) */}
                            <Form.Control
                            id="matrixSize"
                            type="number"
                            step="1"
                            min="0" // Add this line to set the minimum allowed value
                            placeholder="Enter matrix size n x n"
                            style={{ width: "35%", margin: "1% auto" }}
                            onChange={this.createInputMatrix}
                            />
                            
                            {}
                            
                            <div class = 'secoundHead' id = "generateMatrix"></div>

                            <button type="button" class="btn btn btn-warning" style={{margin:"1% auto"}} onClick={this.getVariable}>Calculate</button>
                        </Form.Group>
                    </Form>

                    {/* <h3>Root answer here lah:</h3> */}
                    <div class = 'secoundHead text-center' id = "showAns"></div>

                </div>
        );
    }
}
export default Gauss;