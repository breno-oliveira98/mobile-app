const Section = ({title, space, children}) => {
    return ( 
        <div className={`w-full bg-white rounded-md shadow-md h-auto p-5 ${space}`}>
             <h1 className="text-lg font-bold mb-4 col-span-3">{title}</h1>
            {children}
        </div>
     );
}
 
export default Section;