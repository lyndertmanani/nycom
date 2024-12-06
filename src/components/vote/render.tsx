 
import Card from "./card";
import { categories } from './data';
 

const Render = () => {
    return (
        <>
           <h1 className="font-bold text-center text-5xl ">Nomination Categories</h1>
          <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map(category => (
                <Card key={category.id} category={category} />
              ))}
            </div>
            </section>     
            </>
  );
};

export default Render;