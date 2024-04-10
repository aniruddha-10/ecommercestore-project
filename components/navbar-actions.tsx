"use client";

import Button from "@/components/ui/Button";
import Navbar from "./navbar";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className ="ml-auto flex items-center gap-x-4">
           <Button onClick={()=> router.push("/cart")} className= "flex items-center rounded-full bg-black px-4 py-2" >
            <ShoppingBag
            size = {20}
            color = "white"
            />
            <span className="ml-2 text-m font-small text-gray-300">
                {cart.items.length}
            </span>
           </Button>
        </div>
    );
}
 
export default NavbarActions;