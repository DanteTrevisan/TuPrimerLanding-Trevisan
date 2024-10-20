import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const CartWidget = () => {
    const counter = 0

    return(
        <div className="flex justify-center items-center">
            <a className="col-span-1 flex justify-center items-center" href="#">
            <ShoppingCartIcon className="" />
            {counter > 0 ? (
                <p className="flex justify-center items-center bg-orange-400 rounded-full w-auto p-1">
                    {counter}
                </p>
            ) : (
                <p className="flex justify-center items-center rounded-full w-6 h-6">
                    {counter}
                </p>
            )

            }    
            </a>
        </div>
    );
}

export default CartWidget;