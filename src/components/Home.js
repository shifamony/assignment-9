
import { useLoaderData } from 'react-router-dom';
import heroImg from '../img/1.jpg'
import HomeItems from './HomeItems';

const Home = () => {
  const quizeLoad = useLoaderData();
  const quizeData = quizeLoad.data;
  
  //console.log(quizeData);
    return (
      <div>
        <section className='bg-slate-500 pb-32 pt-16'>
       <div className=' px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
        
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
          Welcome To ProEdu Quize
          </h2>
    
          <p className="textclr mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-white">
          How strong is your Knowledge? Take our 10-question quiz to find out — and maybe learn some new Development words along the way. You can try it as often as you'd like (we have many different versions).
          </p>
           
          </div>
         
        </div>
        <div className='relative lg:w-1/2 top-16'>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          
            {/* <Lottie animationData={reader} loop={true} /> */}
            <img
            src={heroImg}
            alt=""
            className="w-5/6 mx-auto mb-12  rounded-lg shadow-md lg:-mt-40 bg-gray-500"
      />
          </div>
        </div>
      </div>
    </div>
    {/* ========================== HEADER END ================== */}
    </section>
    <section>
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {quizeData.map(quize => (
          <HomeItems
          key={quize.id}
          quize={quize}
         
          ></HomeItems>
           
        ))}

      </div>
    </div>
    </section>
      </div>
        
    );
};

export default Home;