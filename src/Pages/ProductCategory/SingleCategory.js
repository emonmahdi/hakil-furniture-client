import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookingModal from '../../components/BookingModal/BookingModal';
import CategoryCard from './CategoryCard';

const SingleCategory = () => {
    const {Id} = useParams();
    const [items, setItems] = useState([]);
    const [getItem, setGetItem] = useState({});
    const [furniture, setFurniture] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${Id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setItems(data);
        })
    }, [Id]);

   /*  useEffect(() => {
        const filter = items.filter(item => item?.category === Id);
        // console.log(filter);
        setGetItem(filter);
    }, [items]) */


  return (
    <div className='container py-12 mx-auto'>
        <h2 className="text-2xl font-bold py-8 text-center mb-4">
            <span className='text-primary'>{items.categoryTitle}</span> {" "}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4"> 
        {
            items?.items?.map((item, index) => <CategoryCard
            key={index}
            item={item}
            setFurniture={setFurniture}
            ></CategoryCard>)
        }
        </div>
        { furniture && <BookingModal setFurniture={setFurniture} furniture={furniture}></BookingModal>}
    </div>
  )
}

export default SingleCategory
