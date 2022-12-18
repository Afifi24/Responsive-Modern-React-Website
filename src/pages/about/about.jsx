import './about.css'
import Header from '../../components/Header'
import headerImage from '../../images/header_bg_1.jpg'
import storyImage from '../../images/about1.jpg'
import visionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
export default function about() {
  return (
    <>
      <Header title='About Us' image={headerImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ducimus temporibus reprehenderit quasi earum, recusandae voluptatibus iure reiciendis mollitia non!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={storyImage} alt="our story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quasi quia labore aliquam minus ducimus eligendi amet quisquam commodi non nam totam, nostrum incidunt expedita quas. Repudiandae nobis, excepturi id fugiat modi, consequatur quia autem molestias culpa facilis veritatis. Suscipit!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut consequuntur quae vero quos officiis dolorum, adipisci voluptas qui sequi ratione obcaecati eveniet molestias rerum laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dicta. Numquam, illum.</p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quasi quia labore aliquam minus ducimus eligendi amet quisquam commodi non nam totam, nostrum incidunt expedita quas. Repudiandae nobis, excepturi id fugiat modi, consequatur quia autem molestias culpa facilis veritatis. Suscipit!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut consequuntur quae vero quos officiis dolorum, adipisci voluptas qui sequi ratione obcaecati eveniet molestias rerum laudantium.</p>
          </div>
          <div className="about__section-image">
            <img src={visionImage} alt="our Vision" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="our Mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quasi quia labore aliquam minus ducimus eligendi amet quisquam commodi non nam totam, nostrum incidunt expedita quas. Repudiandae nobis, excepturi id fugiat modi, consequatur quia autem molestias culpa facilis veritatis. Suscipit!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut consequuntur quae vero quos officiis dolorum, adipisci voluptas qui sequi ratione obcaecati eveniet molestias rerum laudantium.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dicta. Numquam, illum.</p>
          </div>
        </div>
      </section>
    </>
  )
}
