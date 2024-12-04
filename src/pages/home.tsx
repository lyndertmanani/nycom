 
import Hero from './../components/hero/hero';
import Render from './../components/vote/render';
 

const Home =()=> {
 

    return (
      <>
        <section className='bg-slate-100'>
        <Hero />
        <section className='py-10'>
            <Render/>
   </section>
    </section>
      </>
    )
  }
  
  export default Home
  