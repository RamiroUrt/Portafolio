import { BadgeCheck } from 'lucide-react';


const ArticleExpBack = () => {
    return (
        <>
        <div className='article-container dark:-text--light-white flex'>
          <article className='article_exp '>
          <BadgeCheck />
          <div className="text_tec">NODEJS</div>
          </article>
          <article className='article_exp'>
          <BadgeCheck />
          <div className="text_tec">MONGODB</div>
          </article>
          <article className='article_exp'>
          <BadgeCheck />
          <div className="text_tec">SQL</div>
          </article>
          <article className='article_exp'>
          <BadgeCheck />
          <div className="text_tec">PYTHON</div>
          </article>
          <article className='article_exp'>
          <BadgeCheck />
          <div className="text_tec">JAVA</div>
          </article>
          <article className='article_exp'>
          <BadgeCheck />
          <div className="text_tec">C#</div>
          </article>
        </div>
        </>
      )
}

export default ArticleExpBack