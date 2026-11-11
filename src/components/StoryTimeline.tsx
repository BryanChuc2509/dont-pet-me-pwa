import { useEffect, useState } from 'react'
import type { StoryChapter } from '../api'
import { storyDetails } from '../data/storyDetails'

type StoryTimelineProps = {
  chapters: StoryChapter[]
  imageUrl: (path: string) => string
}

export function StoryTimeline({ chapters, imageUrl }: StoryTimelineProps) {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null)

  useEffect(() => {
    if (selectedChapter === null) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedChapter(null)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [selectedChapter])

  return (
    <>
      <ol className="story-timeline">
        {chapters.map((chapter, index) => (
          <li className="story-timeline__item" key={chapter.titulo}>
            <span className="story-timeline__marker" aria-hidden="true">
              {index + 1}
            </span>
            <article className="story-card">
              <img className="story-card__image rounded-md" src={imageUrl(chapter.imagen)} alt="" loading="lazy" decoding="async" />
              <div className="story-card__content">
                <h2>{chapter.titulo}</h2>
                <p>{chapter.descripcion}</p>
              </div>
              <button
                className="story-card__arrow"
                type="button"
                aria-label={`Leer ${chapter.titulo}`}
                onClick={() => setSelectedChapter(index)}
              >
                <span aria-hidden="true">›</span>
              </button>
            </article>
          </li>
        ))}
      </ol>

      {selectedChapter !== null && storyDetails[selectedChapter] && (
        <div className="story-modal" role="presentation" onClick={() => setSelectedChapter(null)}>
          <section
            className="story-modal__content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="story-modal__close" type="button" aria-label="Cerrar historia" onClick={() => setSelectedChapter(null)}>
              ×
            </button>
            <h2 id="story-modal-title">{storyDetails[selectedChapter].title}</h2>
            <div className="story-modal__text">
              {storyDetails[selectedChapter].paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  )
}
