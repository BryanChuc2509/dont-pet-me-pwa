import type { StoryChapter } from '../api'

type StoryTimelineProps = {
  chapters: StoryChapter[]
  imageUrl: (path: string) => string
}

export function StoryTimeline({ chapters, imageUrl }: StoryTimelineProps) {
  return (
    <ol className="story-timeline">
      {chapters.map((chapter, index) => (
        <li className="story-timeline__item" key={chapter.titulo}>
          <span className="story-timeline__marker" aria-hidden="true">
            {index + 1}
          </span>
          <article className="story-card">
            <img className="rounded-md" src={imageUrl(chapter.imagen)} alt="" loading="lazy" decoding="async" />
            <div className="story-card__content">
              <h2>{chapter.titulo}</h2>
              <p>{chapter.descripcion}</p>
            </div>
            <button className="story-card__arrow" type="button" aria-label={`Leer ${chapter.titulo}`}>
              <span aria-hidden="true">›</span>
            </button>
          </article>
        </li>
      ))}
    </ol>
  )
}
