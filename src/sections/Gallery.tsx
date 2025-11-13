"use client";

import Image from "next/image";

type GalleryContent =
  | {
      type: "image";
      src: string;
      alt: string;
      unoptimized?: boolean;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      alt: string;
    };

type GalleryStackItem = {
  content: GalleryContent;
  aspectClass: string;
};

type GalleryColumn =
  | {
      kind: "stack";
      spanClass: string;
      items: GalleryStackItem[];
    }
  | {
      kind: "single";
      spanClass: string;
      aspectClass: string;
      content: GalleryContent;
    };

type GalleryRow = {
  columns: GalleryColumn[];
};

const galleryRows: GalleryRow[] = [
  {
    columns: [
      {
        kind: "stack",
        spanClass: "col-span-2 sm:col-span-2 lg:col-span-3",
        items: [
          {
            content: {
              type: "image",
              src: "/images/tg1.PNG",
              alt: "Tygo graffiti throw-up study",
              unoptimized: true,
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg13.PNG",
              alt: "Tygo chrome collage",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg3.jpg",
              alt: "Tygo emblem lockup",
            },
            aspectClass: "aspect-square",
          },
        ],
      },
      {
        kind: "single",
        spanClass: "col-span-2 sm:col-span-2 lg:col-span-6",
        aspectClass: "aspect-square lg:aspect-[2/3]",
        content: {
          type: "image",
          src: "/images/tg2.jpeg",
          alt: "Tygo nightlife vertical spread",
        },
      },
      {
        kind: "stack",
        spanClass: "col-span-2 sm:col-span-4 lg:col-span-3",
        items: [
          {
            content: {
              type: "image",
              src: "/images/tg4.jpeg",
              alt: "Tygo neon alley scene",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg5.jpg",
              alt: "Tygo neon skyline splash",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg7.png",
              alt: "Tygo retro magazine cover",
            },
            aspectClass: "aspect-square",
          },
        ],
      },
    ],
  },
  {
    columns: [
      {
        kind: "single",
        spanClass: "col-span-2 sm:col-span-2 lg:col-span-6",
        aspectClass: "aspect-square lg:aspect-[2/3]",
        content: {
          type: "video",
          src: "/videos/wake_tg.mp4",
          // poster: "/images/fire_tygo.gif",
          alt: "Tygo wake sequence",
        },
      },
      {
        kind: "stack",
        spanClass: "col-span-2 sm:col-span-2 lg:col-span-3",
        items: [
          {
            content: {
              type: "image",
              src: "/images/tg6.PNG",
              alt: "Tygo jungle tunnel poster",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg8.PNG",
              alt: "Tygo jungle panoramic",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg9.PNG",
              alt: "Tygo mascot animated loop",
              unoptimized: true,
            },
            aspectClass: "aspect-square",
          },
        ],
      },
      {
        kind: "stack",
        spanClass: "col-span-2 sm:col-span-4 lg:col-span-3",
        items: [
          {
            content: {
              type: "image",
              src: "/images/tg10.jpg",
              alt: "Tygo neon alley variant",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg12.jpg",
              alt: "Tygo chrome collage detail",
            },
            aspectClass: "aspect-square",
          },
          {
            content: {
              type: "image",
              src: "/images/tg11.jpg",
              alt: "Troll Tygo expression sheet",
              unoptimized: true,
            },
            aspectClass: "aspect-square",
          },
        ],
      },
    ],
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="relative bg-[#FF8B00] text-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10 lg:max-w-7xl lg:px-12 lg:py-20">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:items-end sm:text-left">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border-4 border-black bg-black px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-[#FF8B00] shadow-[6px_6px_0_rgba(0,0,0,1)]">
              Gallery
            </span>
            <h2 className="text-4xl font-black uppercase sm:text-5xl lg:text-6xl">
              Tygo Sketchbook
            </h2>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/70 sm:text-base">
              Art drops, animation frames, dan visual jungle yang bikin timeline bergetar.
            </p>
          </div>

          <a
            href="https://drive.google.com/drive/folders/1cZ9OR9kU3KoMM3a-mzk1KFlwGALg7ddq?usp=driv_e_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border-4 border-black bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.25em] text-black shadow-[8px_8px_0_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(0,0,0,1)]"
          >
            View Full Archive ↗
          </a>
        </div>

        <div className="space-y-8">
          {galleryRows.map((row, rowIndex) => (
            <div
              key={`gallery-row-${rowIndex}`}
              className="grid grid-cols-2 auto-rows-[1fr] gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-12 lg:gap-6"
            >
              {row.columns.map((column, colIndex) => {
                if (column.kind === "stack") {
                  return (
                    <div
                      key={`gallery-col-${rowIndex}-${colIndex}`}
                      className={`${column.spanClass} grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 lg:gap-4`}
                    >
                      {column.items.map((item, itemIndex) => (
                        <div
                          key={`stack-item-${rowIndex}-${colIndex}-${itemIndex}`}
                          className={`${itemIndex === column.items.length - 1 ? "col-span-2 sm:col-span-2 lg:col-span-1" : "col-span-1"}`}
                        >
                          <GalleryCard
                            content={item.content}
                            aspectClass={item.aspectClass}
                          />
                        </div>
                      ))}
                    </div>
                  );
                }

                return (
                  <div
                    key={`gallery-col-${rowIndex}-${colIndex}`}
                    className={`${column.spanClass}`}
                  >
                    <GalleryCard
                      content={column.content}
                      aspectClass={column.aspectClass}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type GalleryCardProps = {
  content: GalleryContent;
  aspectClass: string;
};

function GalleryCard({ content, aspectClass }: GalleryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border-4 border-black bg-white shadow-[6px_6px_0_rgba(0,0,0,1)] transition-all duration-200 sm:shadow-[8px_8px_0_rgba(0,0,0,1)] lg:shadow-[10px_10px_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
      <div className={`relative w-full ${aspectClass}`}>
        {content.type === "image" ? (
          <Image
            src={content.src}
            alt={content.alt}
            fill
            unoptimized={content.unoptimized}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <>
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={content.src}
              poster={content.poster}
              autoPlay
              muted
              loop
              playsInline
            />
            <span className="absolute left-5 top-5 rounded-full border-3 border-black bg-[#FF8B00] px-4 py-1 text-xs font-black uppercase tracking-[0.35em] text-black shadow-[4px_4px_0_rgba(0,0,0,1)]">
              Motion
            </span>
          </>
        )}
      </div>
    </div>
  );
}