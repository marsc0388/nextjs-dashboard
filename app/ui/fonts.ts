import { Inter, Lusitana } from 'next/font/google'

//Inter is the font we import from the next/font/google module
// latin is the subset we want to load
export const inter = Inter({ subsets: ['latin']})
export const lusitana = Lusitana({ weight: ["700", '400'], subsets: ['latin']})