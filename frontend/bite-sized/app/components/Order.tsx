import { useState } from "react";
import { Order, OrderCompTypes } from "../types";
import { AiFillProduct } from "react-icons/ai";

export default function Order({ post }: OrderCompTypes) {

  const [hasClickedOrder, setHasClickedOrder] = useState<boolean>(false)
  const [userOrder, setUserOrder] = useState<boolean>(false)
  const [orders, setOrders] = useState<Order[]>([])
  const Order = () => {
    console.log('order');
  }
  return (
    <>
      <div id={`Order-${post?.id}`} className="relative mr-[75px]">
        <div className="absolute bottom-0 pl-2">
          <div className="pb-4 text-center">
            <button
              disabled={hasClickedOrder}
              onClick={() => Order()}
              className="rounded-full bg-green-400 p-2 cursor-pointer"
            >
              {!hasClickedOrder ? (
                <AiFillProduct color={orders?.length > 0}
              ) : (
                
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
