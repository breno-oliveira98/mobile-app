const ProductCard = ({img = 'https://placehold.co/250', title = 'Title', description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio ducimus voluptas, culpa quod maiores reiciendis suscipit dicta amet earum ipsa, in cum libero? Reprehenderit, a! Officiis rem odit mollitia velit?', price = 99.99, priceDiscount = 79.99, category = 'categoria'}) => {
    return ( 
        <div className="max-w-[250px] h-fit flex flex-col bg-slate-100 shadow-lg rounded-md">
            <div className="max-w-[250px] max-h-[250px]">
                <img src={img} alt="" />
            </div>
            <div className="p-2 space-y-2">
                <small className="text-gray-500">{category}</small>
                <h4 className="font-semibold text-xl">{title}</h4>
                <p className="line-clamp-2 text-lg">{description}</p>
                <div className="flex gap-3">
                    <span className="line-through text-lg text-gray-400 font-normal">{priceDiscount}</span>
                    <p className="text-gray-800 text-lg font-semibold">{price}</p>
                </div>
            </div>
          
        </div>
     );
}
 
export default ProductCard;