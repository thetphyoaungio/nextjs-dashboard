import { Lusitana, Inter } from "next/font/google";

const lusitana = Lusitana({ weight:['400'], subsets: ['latin'] });
const inter = Inter({subsets:['latin']});

export {
    lusitana,
    inter
}