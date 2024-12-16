const Cart = () => {
    const array = [1]
    return ( 
        <div className="w-full h-fit p-4 bg-slate-50 shadow-md rounded-md">
            <h1 className="font-bold text-xl mb-3">Seu carrinho</h1>
            {array.length > 0 ? (
                <p>Você tem {array.length} {array.length > 1 ? "itens" : "item"} no carrinho</p>
            ) : (
                <p>Seu carrinho está vazio.</p>
            )}
        </div>
     );
}
 
export default Cart;