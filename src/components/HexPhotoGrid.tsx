import photoOne from "@/assets/landing_page/DSC03407-2.jpg";
import photoTwo from "@/assets/landing_page/IMG_0015-Edit-2.jpg";
import photoThree from "@/assets/landing_page/IMG_4808-2.jpg";
import photoFour from "@/assets/landing_page/IMG_5092-2.jpg";
import photoFive from "@/assets/landing_page/_DSC7586-2.jpg";

const CYBER_YELLOW = "#FCD12A";

const cells = [
  { image: photoOne, alt: "Endre Kulutacz creative work" },
  { image: photoTwo, alt: "Endre Kulutacz photography" },
  { filler: true },
  { image: photoThree, alt: "Endre Kulutacz visual work" },
  { image: photoFour, alt: "Endre Kulutacz music project" },
  { filler: true },
  { image: photoFive, alt: "Endre Kulutacz creative portrait" },
];

export function HexPhotoGrid() {
  return (
    <div className="hex-photo-grid" aria-label="A selection of Endre Kulutacz's creative work">
      <svg className="absolute size-0" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="rounded-hexagon" clipPathUnits="objectBoundingBox">
            <path d="M .18 .015 Q .14 .015 .105 .04 L .025 .09 Q 0 .11 0 .15 V .85 Q 0 .89 .025 .91 L .105 .96 Q .14 .985 .18 .985 H .82 Q .86 .985 .895 .96 L .975 .91 Q 1 .89 1 .85 V .15 Q 1 .11 .975 .09 L .895 .04 Q .86 .015 .82 .015 Z" />
          </clipPath>
        </defs>
      </svg>
      {cells.map((cell, index) => (
        <div
          key={cell.filler ? `filler-${index}` : cell.image}
          className="hex-cell"
          style={{
            clipPath: "url(#rounded-hexagon)",
            backgroundColor: cell.filler ? CYBER_YELLOW : "rgba(255,255,255,0.78)",
          }}
        >
          {cell.image && (
            <img src={cell.image} alt={cell.alt} className="hex-cell-image" />
          )}
        </div>
      ))}
    </div>
  );
}
