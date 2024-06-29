import ArticleExpBack from "../components/ArticleExpBack"
import ArticleExpFront from "../components/ArticleExpFront"

const Experience = () => {
  return (
    <section className="experience mt-[15rem]" id="experience">
        <p className="section_text_p text-center">Explore my</p>
        <h1 className="title">Experience</h1>
        <div className="experience_details_container">
            <div className="about_details">
                <div className="details_container">
                    <h2 className="experience_sub_title">Frontend Development</h2>
                    <div className="article-container">
                        <ArticleExpFront />
                    </div>
                </div>
                <div className="details_container">
                    <h2 className="experience_sub_title">Backend Development</h2>
                    <div className="article-container">
                        <ArticleExpBack />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience
