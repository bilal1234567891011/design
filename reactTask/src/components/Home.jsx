import axios from 'axios';
import { React, useEffect, useState } from 'react'
import './Home.css'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Remark from './Remark';
import Top from './Top';






function Home() {

  const [allMaterials, setAllMaterials] = useState([])
  const fetchData = async () => {
    const result = await axios.get('http://localhost:8000/getAllMaterial')
    setAllMaterials(result.data.materials);
  }

  const handleDelete=async(uid)=>{
    const result=await axios.delete('http://localhost:8000/deleteMaterial/'+uid)
    alert(result.data.message)
    fetchData()
  }

  console.log(allMaterials);
  useEffect(() => {
    fetchData()
  }, [])


  return (
    

    <div>
            


           <Top></Top>

   
      <div className='color'>
      <Table  className='w-80 container border mt-2 ' striped bordered hover>
        <thead  >
          <tr >
            <th style={{background:"rgb(242, 202, 42)", color:'violet'}}>orderListI teamNrUID</th>
            <th style={{background:"rgb(242, 202, 42)"}}>Item NR</th>
            <th style={{background:"rgb(242, 202, 42)",color:'RED'}}>Material ID</th>
            <th style={{background:"rgb(242, 202, 42)",color:'RED'}}>MAT.Description</th>
            <th style={{background:"rgb(242, 202, 42)"}}>Current QTY</th>
            <th style={{background:"rgb(242, 202, 42)"}}>Previous QTY</th>
            <th style={{background:"rgb(242, 202, 42)"}}>QTY Diff</th>
            <th style={{background:"rgb(242, 202, 42)"}}>Order comments</th>
            <th style={{background:"rgb(242, 202, 42)"}}>
              <Link  to={'/add'} >
              <button className='bb'>+</button></Link>
              <button className='bs'>-</button>

            </th>
          </tr>
        </thead>
        <tbody>

          {
            allMaterials?.map((item, index) => (
              <tr>
                <td style={{background:"rgb(242, 202, 42)"}}>{index + 1}</td>
                <td style={{background:"rgb(242, 202, 42)"}}>{item.itemno}</td>
                <td style={{background:"rgb(242, 202, 42)",color:'RED'}} >{item.mid}</td>
                <td style={{background:"rgb(242, 202, 42)",color:'RED'}}>{item.desc}</td>
                <td style={{background:"rgb(242, 202, 42)"}}>{item.cqty}</td>
                <td style={{background:"rgb(242, 202, 42)"}}>{item.pqty}</td>
                <td style={{background:"rgb(242, 202, 42)"}}>{item.diff}</td>
                <td style={{background:"rgb(242, 202, 42)"}}>{item.comment}</td>
                <td style={{background:"rgb(242, 202, 42)"}}></td>

                {/* <td style={{background:"rgb(242, 202, 42)"}}>
                  <Button onClick={()=>handleDelete(item.uid)} className='button' variant='danger'><i class="fa-solid fa-trash"></i></Button>
                </td> */}
              </tr>

            ))


          }




        </tbody>
      </Table>
      </div>
      <Remark></Remark>

    </div>
    
  )
}

export default Home