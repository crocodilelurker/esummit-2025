import { notFound } from "next/navigation";
import { Metadata } from "next";
type Props = {
    params: Promise< { memberId :string } >;
}

export const generateMetadata =async ({params}:Props) :Promise<Metadata> => {
    const id= (await params).memberId;
    return {
        title:`Member ${id}`,
        description:"Core Member Each details"
    }
}

export default async function Home({ params }:Props)
{
    const memberId = (await params).memberId;
    //we will validate the Member Id via the response 
    //here i take a simple example
    if(parseInt(memberId)>1000)
        notFound();//custom not found is created we can work on it 
    
    return <div>Hello {memberId} </div>
}