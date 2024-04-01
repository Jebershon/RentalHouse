import './/Home.css';
import { useEffect, useState } from 'react';
import { Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import house from './Asserts/3d-view-house-model.jpg'
function Home() {
    const [data,setData]=useState([]);
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);

    const [SearchTerm,setSearchTerm]= useState(0);

    const [filter,setFilter]=useState([]);

    const [alldata,setAlldata] = useState([]);

    function filterRent(){
        setAlldata(data.concat(data1,data2));
        const filteredData = alldata.filter(x => x.rent <= SearchTerm);
        setFilter(filteredData);
        console.log(filter);
    }

    function handleFilter(s) {
        if(alldata.length == 0){
            setAlldata(data.concat(data1,data2));
        }
        const filteredData = alldata.filter(x => x.tenant_preferred == s);
        setFilter(filteredData);
        console.log(filteredData);
    }
    
    useEffect(()=>{axios.get('https://rental-platforms.onrender.com/magicbrix').then((res=>{
        setData(res.data);
        console.log(res);  
      })).catch(err => console.log(err))},[]);

      useEffect(()=>{axios.get('https://rental-platforms.onrender.com/99acres').then((res=>{
        setData1(res.data);
        console.log(res);  
      })).catch(err => console.log(err))},[]);

      useEffect(()=>{axios.get('https://rental-platforms.onrender.com/housing').then((res=>{
        setData2(res.data);
        console.log(res);  
      })).catch(err => console.log(err))},[]);
    

  return (
    <div>
    <center><div style={{backgroundColor:"black",color:"beige"}} className='mt-2 mb-2 p-3'>House Rental</div></center>
    <Row>
    <Col lg={2}>
    <div>
        <center>
        <input type="number" placeholder="Enter rent amount" onChange={(e)=>{setSearchTerm(e.target.value)}}></input>
        <button onClick={()=>{filterRent()}}>filter</button>
        </center>
    </div>
    <br/>
    </Col>
    <Col></Col>
    <Col lg={2}>
    <center>
    <strong>Tenant</strong>
    <button value="family" onClick={()=>{handleFilter("Family")}}>family</button>
    <button value="bachelors"  onClick={()=>{handleFilter("Bachelors")}}>bachelors</button>
    </center>
    </Col>
    </Row>
    <div>
        Filtered Data:
        <div>
        <Row>
        {filter?.map((x,index) => 
        <Col lg={3}>
            <div className='card p-3 mt-3 mb-3' id={x._id}>
                <div>
                    <img src={house} width={100} height={100} alt='house'></img>
                </div>
                <div><strong>furnishing:</strong> {x.furnishing}</div>
                <div><strong>location:</strong> {x.location}</div>
                <div><strong>platform:</strong> {x.platform}</div>
                <div><strong>plot_area:</strong> {x.plot_area}</div>
                <div><strong>rent :</strong>{x.rent}</div>
                <div><strong>security_deposit :</strong>{x.security_deposit}</div>
                <div><strong>specification :</strong>{x.specification}</div>
                <div><strong>tenant_preferred :</strong>{x.tenant_preferred}</div>
            </div>
        </Col>
        )}
        </Row>
        </div>
    </div>
    <hr/>
    <div>
    <Row>
        {data?.map((x,index) => 
        <Col lg={3}>
            <div className='card p-3 mt-3 mb-3' id={x._id}>
                <div>
                    <img src={house} width={100} height={100} alt='house'></img>
                </div>
                <div><strong>furnishing:</strong> {x.furnishing}</div>
                <div><strong>location:</strong> {x.location}</div>
                <div><strong>platform:</strong> {x.platform}</div>
                <div><strong>plot_area:</strong> {x.plot_area}</div>
                <div><strong>rent :</strong>{x.rent}</div>
                <div><strong>security_deposit :</strong>{x.security_deposit}</div>
                <div><strong>specification :</strong>{x.specification}</div>
                <div><strong>tenant_preferred :</strong>{x.tenant_preferred}</div>
            </div>
        </Col>
        )}
        {data1?.map((x,index) => 
        <Col lg={3}>
            <div className='card p-3 mt-3 mb-3' id={x._id}>
                <div>
                    <img src={house} width={100} height={100} alt='house'></img>
                </div>
                <div><strong>furnishing:</strong> {x.furnishing}</div>
                <div><strong>location:</strong> {x.location}</div>
                <div><strong>platform:</strong> {x.platform}</div>
                <div><strong>plot_area:</strong> {x.plot_area}</div>
                <div><strong>rent :</strong>{x.rent}</div>
                <div><strong>security_deposit :</strong>{x.security_deposit}</div>
                <div><strong>specification :</strong>{x.specification}</div>
                <div><strong>tenant_preferred :</strong>{x.tenant_preferred}</div>
            </div>
        </Col>
        )}
        {data2?.map((x,index) => 
        <Col lg={3}>
            <div className='card p-3 mt-3 mb-3' id={x._id}>
                <div>
                    <img src={house} width={100} height={100} alt='house'></img>
                </div>
                <div><strong>furnishing:</strong> {x.furnishing}</div>
                <div><strong>location:</strong> {x.location}</div>
                <div><strong>platform:</strong> {x.platform}</div>
                <div><strong>plot_area:</strong> {x.plot_area}</div>
                <div><strong>rent :</strong>{x.rent}</div>
                <div><strong>security_deposit :</strong>{x.security_deposit}</div>
                <div><strong>specification :</strong>{x.specification}</div>
                <div><strong>tenant_preferred :</strong>{x.tenant_preferred}</div>
            </div>
        </Col>
        )}
    </Row>
    </div>
    </div>
  );
}

export default Home;