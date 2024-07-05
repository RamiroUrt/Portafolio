import { BadgeCheck } from 'lucide-react';
const ArticleExp = () => {
  return (
    <>
  <div className='article-container dark:-text--light-white flex'>
      <article className='article_exp'>
      <BadgeCheck className=''/>
      <div className="text_tec">HTML</div>
      </article>
      <article className='article_exp'>
      <BadgeCheck />
      <div className="text_tec">CSS</div>
      </article>
      <article className='article_exp'>
      <BadgeCheck />
      <div className="text_tec">JS</div>
      </article>
      <article className='article_exp'>
      <BadgeCheck />
      <div className="text_tec">REACT</div>
      </article>
      <article className='article_exp'>
      <BadgeCheck />
      <div className="text_tec">TAILWIND</div>
      </article>
      <article className='article_exp'>
      <BadgeCheck />
      <div className="text_tec">BOOTSTRAP</div>
      </article>
    </div>
    </>
  )
}

export default ArticleExp