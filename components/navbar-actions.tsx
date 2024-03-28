"use client";

import Button from "@/components/ui/Button";
import Navbar from "./navbar";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className ="ml-auto flex items-center gap-x-4">
           <Button className= "flex items-center rounded-full bg-black px-4 py-2">
            <ShoppingBag
            size = {20}
            color = "white"
            />
            <span className="ml-2 text-m font-small text-gray-300">
                0
            </span>
           </Button>
        </div>
    );
}
 
export default NavbarActions;