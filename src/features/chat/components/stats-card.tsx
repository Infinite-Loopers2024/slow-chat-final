type Props={
 title: string,
 children: React.ReactNode
}

export function StatsCard({title, children}: Props){

 return (
   <section className="w-8/12 md:w-4/12 flex flex-col items-center justify-center">
     <h2 className="mb-4 md:mt-4 md:mb-4 text-center text-xl font-bold">
       {title}
     </h2>
    {children}
   </section>
 );

}