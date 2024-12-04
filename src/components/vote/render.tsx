import Cards from './card';

const Render = () => {
    return (
        <>
            <section className='lg:px-24  px-7'>
                <h1 className='font-bold text-center text-3xl'>Vote Categories</h1>
                <div className="p-10">
                     <Cards/>
                </div>
              
        </section>
        </>  
    )
}
export default Render