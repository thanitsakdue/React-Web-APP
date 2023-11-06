import { useState } from "react"
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";

const Regression =()=>{
    const data  = [
                    {index: 1, X:10, Y:5},
                    {index: 2, X:15,Y:9},
                    {index: 3, X:20, Y:15},
                    {index: 4, X:30, Y:18},
                    {index: 5, X:40,Y:22},
                    {index: 6, X:50,Y:30},
                    {index: 7, X:60,Y:35},
                    {index: 8, X:70,Y:38},
                    {index: 9, X:80,Y:43}
                                            ]
    const data2 = [
                    {index: 1, X1:1, X2:0, X3:1,Y:4},
                    {index: 2, X1:0, X2:1, X3:3,Y:-5},
                    {index: 3, X1:2, X2:4, X3:1,Y:-6},
                    {index: 4, X1:3, X2:2, X3:2,Y:0},
                    {index: 5, X1:4, X2:1, X3:5,Y:-1},
                    {index: 6, X1:2, X2:3, X3:3,Y:-7},
                    {index: 7, X1:1, X2:6, X3:4,Y:-20}
                                                        ]

    const data3 = [
                    [1, 0, 2, 3, 4, 2, 1],
                    [0, 1, 4, 2, 1, 3, 6],
                    [1, 3, 1, 2, 5, 3, 4]
                                            ]

    const Xtarget = [0, 0, 0]
    const [html, setHtml] = useState(null);
    const [FormHtml, setFormHtml] = useState(null);
    const [N,setN] = useState(0) // not use
    const [Xfind,setX] = useState(0)
    const [M,setM] = useState(0)
    const LinearAns=[];
    const PolyAns=[];
    const PolyA=[];
    const MultiAns=[];

    const print = (s, array, r) =>{
        if(s===1){
            console.log(LinearAns);
            return(
                <Container>
                <Table striped bordered hover variant="dark">
                    <tbody>
                        <tr>
                            <th width="20%">f({array[r].X1}) = </th><td>({array[r].A0}) + ({array[r].A1}) * ({array[r].X1})</td>
                        </tr>
                        <tr>
                            <th width="20%">f({array[r].X1}) = </th><td>{array[r].Ans}</td>
                        </tr>
                        <tr>
                            <th width="20%">Standard Error = </th><td>{array[r].Syx}</td>
                        </tr>
                        <tr>
                            <th width="20%">R-Square = </th><td>{array[r].R2}</td>
                        </tr>
                    </tbody>
                </Table>
                </Container>
            );
        }else if(s===2){
            return(
                <Container>
                <Table striped bordered hover variant="dark">
                    <tbody>
                        <tr>
                            <th width="20">f({array[r].X1}) = </th>
                            <td key="Apoly">
                                {PolyA.map((element, index)=>{
                                    if(index < PolyA.length-1){
                                        return(
                                            <>({element.Ai})*({Math.pow((array[r].X1),index)})+</>  
                                        )
                                    }else{
                                        return(
                                            <>({element.Ai})*({Math.pow((array[r].X1),index)})</>  
                                        )
                                    }
                                })}
                            </td>
                        </tr>
                        <tr>
                            <th width="20%">f({array[r].X1}) = </th><td>{array[r].Ans}</td>
                        </tr>
                        <tr>
                            <th width="20%">Standard Error = </th><td>{array[r].Syx}</td>
                        </tr>
                        <tr>
                            <th width="20%">R-Square = </th><td>{array[r].R2}</td>
                        </tr>
                    </tbody>
                </Table>
                </Container>
            );
        }else{
            return(
                <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="25%">A0</th>
                            <th width="25%">A1</th>
                            <th width="25%">A2</th>
                            <th width="25%">A3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{array[r].A0}</td>
                            <td>{array[r].A1}</td>
                            <td>{array[r].A2}</td>
                            <td>{array[r].A3}</td>
                        </tr>
                    </tbody>
                </Table>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="30%">X1</th>
                            <th width="30%">X2</th>
                            <th width="30%">X3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{array[r].X1}</td>
                            <td>{array[r].X2}</td>
                            <td>{array[r].X3}</td>
                        </tr>
                    </tbody>
                </Table>
                <Table striped bordered hover variant="dark">
                    <tbody>
                    <tr>
                            <th width="50%">f(X1, X2, X3) = </th><td>(A0) + (A1) * (X1) + (A2) * (X2) + (A3) * (X3)</td>
                        </tr>
                        <tr>
                            <th width="50%">f({array[r].X1},{array[r].X2},{array[r].X3}) = </th><td>({array[r].A0}) + ({array[r].A1}) * ({array[r].X1}) + ({array[r].A2}) * ({array[r].X2}) + ({array[r].A3}) * ({array[r].X3})</td>
                        </tr>
                        <tr>
                            <th width="50%">f({array[r].X1},{array[r].X2},{array[r].X3}) = </th><td>{array[r].Ans}</td>
                        </tr>
                        <tr>
                            <th width="50%">Standard Error = </th><td>{array[r].Syx}</td>
                        </tr>
                        <tr>
                            <th width="50%">R-Square = </th><td>{array[r].R2}</td>
                        </tr>
                    </tbody>
                </Table>
                </Container>
            );
        }
        
    }
    const printForm = (s) =>{
        if(s===1){
            return(
                <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="20%">Position</th>
                            <th width="40%">X</th>
                            <th width="40%">Y</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td>{element.index}</td>
                                <td>{element.X}</td>
                                <td>{element.Y}</td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
                <Form>
                    <Form.Label>Input X</Form.Label>
                    <input type="number" id="XLinear" onChange={(event)=>setX(event.target.value)} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    <br></br>
                    <Button  className="btn btn-warning mx-auto d-block"  id ="Linear"  onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>
                </Container>
            );
        }else if(s===2){
            return(
                <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="20%">Position</th>
                            <th width="40%">X</th>
                            <th width="40%">Y</th>
                        </tr>
                    </thead>
                <tbody>
                    {data.map((element, index)=>{
                        return  (
                        <tr key={index}>
                            <td>{element.index}</td>
                            <td>{element.X}</td>
                            <td>{element.Y}</td>
                        </tr>)
                    })}
                </tbody>
                </Table>
                <Form>
                    <Form.Label>Input M</Form.Label>
                    <input type="number" id="MPoly" style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    <br></br>
                    <Form.Label>Input X</Form.Label>
                    <input type="number" id="XPoly" style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    <br></br>
                    <Button className="btn btn-warning mx-auto d-block"  id ="Poly"  onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>
                </Container>
            );
        }else{
            return(
                <Container>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th width="10%">Position</th>
                            <th width="20%">X1</th>
                            <th width="20%">X2</th>
                            <th width="20%">X3</th>
                            <th width="20%">Y</th>
                        </tr>
                    </thead>
                <tbody>
                    {data2.map((element, index)=>{
                        return  (
                        <tr key={index}>
                            <td>{element.index}</td>
                            <td>{element.X1}</td>
                            <td>{element.X2}</td>
                            <td>{element.X3}</td>
                            <td>{element.Y}</td>
                        </tr>)
                    })}
                </tbody>
                </Table>
                <Form>
                    <Form.Label>Input X1</Form.Label>
                    <input type="number" id="1" onChange={inputXtarget} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    <br></br>
                    <Form.Label>Input X2</Form.Label>
                    <input type="number" id="2" onChange={inputXtarget} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    <br></br>
                    <Form.Label>Input X3</Form.Label>
                    <input type="number" id="3" onChange={inputXtarget} style={{width:"20%", margin:"0 auto"}} className="form-control"></input>
                    <br></br>
                    <Button  className="btn btn-warning mx-auto d-block" id ="Multi"  onClick={calculateRoot}>
                        Calculate
                    </Button>
                </Form>
                </Container>
            );
        }
    }

    const fill2DimensionsArray = (arr, rows, columns) => {
        for (var i = 0; i < rows; i++) {
            arr.push([0])
            for (var j = 0; j < columns; j++) {
                arr[i][j] = 0;
            }
        }
    }
    
    const diagonalize = (M) => {
      var m = M.length;
      var n = M[0].length;
      for(var k=0; k<Math.min(m,n); ++k) {
        var i_max = findPivot(M, k);
        if (M[i_max][k] === 0)
            throw new Error("Matrix is singular");
        swap_rows(M, k, i_max);
        for(var i=k+1; i<m; ++i) {
          var c = M[i][k] / M[k][k];
          for(var j=k+1; j<n; ++j) {
            M[i][j] = M[i][j] - M[k][j] * c;
          }
          M[i][k] = 0;
        }
      }
    }
    
    const findPivot = (M, k) => {
      var i_max = k;
      for(var i=k+1; i<M.length; ++i) {
        if (Math.abs(M[i][k]) > Math.abs(M[i_max][k])) {
          i_max = i;
        }
      }
      return i_max;
    }
    
    const swap_rows = (M, i_max, k) => {
      if (i_max !== k) {
        var temp = M[i_max];
        M[i_max] = M[k];
        M[k] = temp;
      }
    }
    
    const makeM = (a, b) => {
      for(var i=0; i<a.length; ++i) {
        a[i].push(b[i]);
      }
    }
    
    const substitute = (M) => {
      var m = M.length;
      for(var i=m-1; i>=0; --i) {
        var x = M[i][m] / M[i][i];
        for(var j=i-1; j>=0; --j) {
          M[j][m] -= x * M[j][i];
          M[j][i] = 0;
        }
        M[i][m] = x;
        M[i][i] = 1;
      }
    }
    
    const extractX = (M) => {
      var x = [];
      var m = M.length;
      var n = M[0].length;
      for(var i=0; i<m; ++i){
        x.push(M[i][n-1]);
      }
      return x;
    }
    
    const solve = (a, b) => {
      makeM(a,b);
      diagonalize(a);
      substitute(a);
      var x = extractX(a);
      return x;
    }

    const LinearRegression = (x) => {
        var i;
        var n = data.length
        var sumX = 0;
        var sumY = 0;
        var sumXY = 0;
        var sumX2 = 0;
        var st = 0;
        var sr = 0;
        var obj={};
        for(i=0;i<n;i++){
            sumX += data[i].X;
            //console.log("sumX = "+sumX);
            sumY += data[i].Y;
            //console.log("sumY = "+sumY);
            sumXY += data[i].X*data[i].Y;
            //console.log("sumXY = "+sumXY);
            sumX2 += data[i].X*data[i].X;
            //console.log("sumX2 = "+sumX2);
        }
    
        var xm = sumX/n;
        //console.log("xm = "+xm);
        var ym = sumY/n;
        //console.log("ym = "+ym);
        var a1 = (n*sumXY-sumX*sumY)/(n*sumX2-sumX*sumX)
        //console.log("a1 = "+a1);
        var a0 = ym - a1*xm;
        //console.log("a0 = "+a0);
    
        for(i =0;i<n;i++){
            st += Math.pow((data[i].Y-ym),2);
            sr += Math.pow((data[i].Y-a1*data[i].X-a0),2);
        }
    
        var syx = Math.pow((sr/(n-2)),0.5);
        var r2 = (st-sr)/st;
        var ans = a0+a1*x;
        console.log("X = "+x);
        obj = {
            X1:x,
            A0:a0,
            A1:a1,
            Ans:ans,
            Syx:syx,
            R2:r2
        }
        LinearAns.push(obj)
        //console.log("\tf(x) = "+a0+" + "+a1+"(x)");
        //console.log("\tans = "+ans);
        //console.log("\tstandard error = "+syx);
        //console.log("\tR-Squared = "+r2);
    }
    
    const PolynomialRegression = (target, order) => {
        var i,j,k,l;
        var n = data.length;
        var a = [];
        var obj = {};
        fill2DimensionsArray(a, order+1, order+1);
        var b = new Array(order+1).fill(0);
        var sum=0;
        var astring = "";
        //console.log(a);
        for(i=0;i<order+1;i++){
            for(k=0;k<=i;k++){
                sum=0;
                var t=i+k;
                for(j=0;j<n;j++){
                    sum+= Math.pow(data[j].X,t);
                }
                //console.log("i="+i+"k="+k+"sum="+sum);
            
                a[i][k] = sum;
                a[k][i] = sum;
            }
            sum=0;
            for(j=0;j<n;j++){
                sum+= data[j].Y*Math.pow(data[j].X,i)
            }
            b[i] = sum;
            //console.log(a);
            //console.log(b);
        }
        var sumY = 0;
        var st = 0;
        var sr = 0;
        var ans = 0;
        var s = "";
        var f = solve(a, b);
        sum = 0;
        for(i=0;i<order+1;i++){
            ans+=f[i]*Math.pow(target,i);
            astring = "a"+i;
            if(i===0){
                s += f[i]+" + ";
            }else if(i<order){
                s += f[i]+" (x^"+i+") + ";
            }else
                s += f[i]+" (x^"+i+")";
            //console.log(ans)
            obj = {
                An:astring,
                Ai:f[i],
            }
            PolyA.push(obj)
        }
        
        for(i=0;i<n;i++){
            sumY += data[i].Y;
        }
    
        var ym = sumY/n;
    
        for(i=0;i<n;i++){
            var ax = 0;
            for(j=0;j<order+1;j++){
                if(j===0){
                    ax-= f[j];
                }else{
                    ax-= f[j]*Math.pow(data[i].X,j);
                }
                //console.log("ax = "+ax)
            }
            st+= Math.pow((data[i].Y-ym),2);
            sr+= Math.pow((data[i].Y+ax),2)
            //console.log("sr = "+sr);
        }
        var syx = Math.pow((sr/(n-(order+1))),0.5);
        var r2 = (st-sr)/st;
        obj = {
            X1:target,
            Ans:ans,
            Syx:syx,
            R2:r2
        }
        PolyAns.push(obj)
        //console.log("\tf(x) = "+s);
        //console.log("\tans = "+ans);
        //console.log("\tstandard error = "+syx);
        //console.log("\tR-Squared = "+r2);
    }

    const MultipileRegression = (target) => {
        var i,j,k;
        var order = 3;
        var n = data2.length;
        var a = [];
        var obj = {};
        fill2DimensionsArray(a, order+1, order+1);
        var b = new Array(order+1).fill(0);
        //console.log(a);
        var sum = 0;
        for(i=0;i<order+1;i++){
            for(k=0;k<=i;k++){
                sum=0;
                for(j=0;j<n;j++){
                    if(i===0){
                        sum+=Math.pow(data3[i][j],i)
                    }else if(k===0 && i<=order){
                        sum+= data3[i-1][j];
                    }else{
                        sum+= data3[i-1][j]*data3[k-1][j];
                    }
                }
                //console.log("i="+i+"k="+k+"sum="+sum);
                //console.log(sum);
                a[i][k] = sum;
                a[k][i] = sum;
            }
            sum=0;
            for(j=0;j<n;j++){
                if(i===0){
                    sum+= data2[j].Y;
                }else{
                    sum+= data2[j].Y*data3[i-1][j]
                }
            }
            b[i] = sum;
            //console.log(a);
            //console.log(b);
        }
        var sumY = 0;
        var st = 0;
        var sr = 0;
        
        var ans = 0;
        var s = "";
        var f = solve(a, b);
        for(i=0;i<order+1;i++){
            if(i===0){
                s += f[i]+" + ";
                ans+=f[i];
            }else if(i<order){
                s += f[i]+"(x"+i+") + ";
                ans+=f[i]*target[i-1];
            }else{
                s += f[i]+"(x"+i+")";
                ans+=f[i]*target[i-1];
            }
            //console.log(ans)
        }
        
        for(i=0;i<n;i++){
            sumY += data2[i].Y;
        }
    
        var ym = sumY/n;
    
        for(i=0;i<n;i++){
            var ax = 0;
            for(j=0;j<order+1;j++){
                if(j===0){
                    ax-= f[j];
                }else{
                    ax-= f[j]*data3[j-1][i];
                }
                //console.log("ax = "+ax)
            }
            st+= Math.pow((data2[i].Y-ym),2);
            sr+= Math.pow((data2[i].Y+ax),2);
            //console.log("y["+i+"] = "+y[i]);
            //console.log("sr = "+sr);
        }
        var syx = Math.pow((sr/(n-(order+1))),0.5);
        var r2 = (st-sr)/st;
        obj = {
            X1:target[0],
            X2:target[1],
            X3:target[2],
            A0:f[0],
            A1:f[1],
            A2:f[2],
            A3:f[3],
            Ans:ans,
            Syx:syx,
            R2:r2
        }
        MultiAns.push(obj)
        //console.log("\tf(x) = "+s);
        //console.log("\tans = "+ans);
        //console.log("\tstandard error = "+syx);
        //console.log("\tR-Squared = "+r2);
    }

    const inputN = (event) =>{
        console.log(event.target.value)
        setN(event.target.value)
    }

    const inputX = (event) =>{
        console.log(event.target.value)
        setX(parseInt(event.target.value))
        console.log(Xfind)
    }

    const inputM = (event) =>{
        console.log(event.target.value)
        setM(event.target.value)
        console.log(M)
    }

    const inputXtarget = (event) =>{
        console.log(event.target.value)
        Xtarget[(event.target.id)-"1"] = parseInt(event.target.value)
        console.log(Xtarget)
    }
    
    const ShowForm = (event) =>{
        if(event.target.id==="Linear"){
            setFormHtml(printForm(1));
        }
        else if(event.target.id==="Poly"){
            setFormHtml(printForm(2));
        }
        else{
            setFormHtml(printForm(3));
        }
    }
    var round = 0;
    const calculateRoot = (event) =>{
        console.log(round)
        var a, b , n, i;
        if(event.target.id==="Linear"){
            a = parseInt(document.getElementById("XLinear").value)
            LinearRegression(a);
            setHtml(print(1, LinearAns, round));
            round++;
        }
        else if(event.target.id==="Poly"){
            a = parseInt(document.getElementById("XPoly").value)
            console.log("X = "+ a)
            b = parseInt(document.getElementById("MPoly").value)
            console.log("M = "+ b)
            PolynomialRegression(a, b);
            console.log("A = "+PolyA);
            console.log("Ans = "+PolyAns);
            setHtml(print(2, PolyAns, round));
            n = PolyA.length;
            for(i=0;i<n;i++)
            {
                PolyA.pop();
            }
            round++;
        }
        else{
            MultipileRegression(Xtarget);
            setHtml(print(3, MultiAns, round));
            round++;
        }
    }
    
    return (
    <Container>
        <h1>Regression Method</h1>
        <Form>
            <br></br>
            <Row>
                <Col >
                    <Button  className="btn btn-warning mx-auto d-block" id ="Linear"  onClick={ShowForm}>
                        Linear Regression
                    </Button>
                </Col>
                <Col >
                    <Button className="btn btn-warning mx-auto d-block"  id ="Poly"  onClick={ShowForm}>
                        Polynomial Regression
                    </Button>
                </Col>
                <Col >
                    <Button  className="btn btn-warning mx-auto d-block" id = "Multi"  onClick={ShowForm}>
                        Multipile Linear Regression
                    </Button>
                </Col>
            </Row>
            
        </Form>
        <br></br>
        <Container>
        {FormHtml}
        <br></br>
        {html}
        </Container>
    </Container> 
    )
}

export default Regression