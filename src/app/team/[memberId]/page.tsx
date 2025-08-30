import { notFound } from "next/navigation";


export const metadata = {
    title:"Member Details Page",
    description:"Basic Member Details "
}

export default async function Home({ params }:{
    params : Promise < { memberId :string } >
})
{
    const memberId = (await params).memberId;
    //we will validate the Member Id via the response 
    //here i take a simple example
    if(parseInt(memberId)>1000)
        notFound();//custom not found is created we can work on it 
    
    return <div>Hello {memberId} </div>
}