const ProductCard = ({ img = 'https://placehold.co/250', title = 'Title', description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio ducimus voluptas, culpa quod maiores reiciendis suscipit dicta amet earum ipsa, in cum libero? Reprehenderit, a! Officiis rem odit mollitia velit?', price = 99.99, priceDiscount = 79.99, category = 'categoria', onClick}) => {
    return ( 
        <div className="max-w-[250px] h-[400px] flex flex-col shadow-lg rounded-md cursor-pointer" onClick={onClick}>
            {/* Contêiner da Imagem */}
            <div className="flex-shrink-0 h-[200px] overflow-hidden p-3 bg-white rounded-md">
                <img src={img} className="object-fill w-full h-full" alt="product" />
            </div>

            {/* Contêiner de conteúdo com flex-grow */}
            <div className="flex flex-col p-2 h-full justify-between">
                <small className="text-gray-500">{category}</small>
                <h4 className="font-semibold text-xl line-clamp-1">{title}</h4>
                <p className="line-clamp-2 text-lg">{description}</p>

                {/* Preço */}
                <div className="flex gap-3">
                    <span className="line-through text-lg text-gray-400 font-normal">R${priceDiscount}</span>
                    <p className="text-gray-800 text-lg font-semibold">R${price}</p>
                </div>
            </div>
        </div>
     );
}
 
export default ProductCard;
