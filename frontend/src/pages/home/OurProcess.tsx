import '../../assets/styles/home/ourProcess.module.css'
import ProcessBox from '../../components/ProcessBox.jsx'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.module.css';

export default function OurProcess() {

  const processArray = [1,2,3,4]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }

    return (
    <>
       <section className="ourProcess">
       <hr className='hRunner' />

          <div className='processContent'>
            <div className='elevateContainer'>
              <h3 className='elevateBrand'>
                  How we <span className='aboutMobile elevateBrand'>can</span>  elevate your brand.
              </h3>
            </div>
            
            <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={4000}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container-two"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {processArray.map((value) => <div><ProcessBox refKey={value}/></div>) }
          </Carousel>
          </div>
         
         <div className='processMobile'>
         {processArray.map((value) => <div><ProcessBox refKey={value}/></div>) }
         </div>
          
        </section>
    </>
  )
}
