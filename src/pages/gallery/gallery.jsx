import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
export default function gallery() {

  const GalleryLength  = 15;
  const images = []
  for(let i= 1; i<= GalleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  console.log(images)
  return (
    <>
     <Header title='Our Gallery' image={HeaderImage}>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rem magni maiores commodi, ad deleniti. Maxime, asperiores quae!
     </Header>
     <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image,index)=>{
            return(
            <article key={index}>
              <img src={image} alt={`Gallery Image ${index +1}`} />
            </article>
            )
          })
        }
      </div>
     </section>
     
    </>
  )
}
