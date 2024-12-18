import axios from 'axios';
import ProductCard from '../ProductCard';
import Section from '../Section'
import { useEffect, useState } from 'react';

const ProductListing = () => {
    const [produtos, setProdutos] = useState([])
    const fetchProdutos = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
        const data = res.data
        setProdutos(data)
    }

    useEffect(() => {
        fetchProdutos();
    }, [])
    return ( 

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {produtos.map((item) => (
                    <ProductCard img={item.image} category={item.category} description={item.description} price={item.price} title={item.title} key={item.id} priceDiscount={item.price} onClick={()=> alert(item.title)}/>
                ))}
            </div>

     );
}
 
export default ProductListing;