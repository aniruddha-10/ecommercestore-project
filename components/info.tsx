"use client";

import { ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/Button";
import { Product } from "@/types";

interface InfoProps {
    data: Product;
};

const Info: React.FC<InfoProps> = ({
data
}) => {
    return ( 
        <div>
            <h1 className="text-2xl font-bold text-black">
               {data.name} 
            </h1>
            <div className="mt-3 flex items-end justify-between">
                <p className= " text-black ">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-4 ">
                <h3 className=" font-semibold text-gray-900">
                    Size:
                </h3>
                <div>
                {data?.size?.name}
                </div>
            </div>
            <div className="flex items-center gap-x-4 ">
                <h3 className=" font-semibold text-gray-900">
                    Color:
                </h3>
                <div className="h-6 w-6 rounded-full border border-gray-600" style={{backgroundColor: data?.color?.name}}/>
            </div>
            </div>
            <div className = "mt-10 flex items-center gap-x-3 ">
            <Button className="flex items-center rounded-full bg-black  gap-x-2">
                Add to Cart 
                <ShoppingCart size={20} />
            </Button>
            </div>
        </div>
     );
}
 
export default Info ;