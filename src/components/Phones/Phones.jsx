import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phones = () => {
    const [phones,setPhones] = useState([])
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data))
      axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(data => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map(phone =>{
            const obj = {
                name: phone.phone_name,
                price : parseInt(phone.slug.split('-')[1])
            }
            return obj ;
        })
        setPhones(phoneWithFakeData)

      })
    },[])
    return (
        <div>
            <h2 className="text-5xl"> phones : {phones.length}</h2>
            <BarChart width={600} height={400} data={phones}>
                <Bar dataKey='price' fill = '#8884d8'
                ></Bar>
            </BarChart>
        </div>
    );
};

export default Phones;