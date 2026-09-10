import photoOne from "@/assets/landing_page/DSC03407-2.jpg";
import photoTwo from "@/assets/landing_page/IMG_0015-Edit-2.jpg";
import photoThree from "@/assets/landing_page/IMG_4808-2.jpg";
import photoFour from "@/assets/landing_page/IMG_5092-2.jpg";
import photoFive from "@/assets/landing_page/_DSC7586-2.jpg";

const CYBER_YELLOW = "#FCD12A";
const PALETTE_GREY = "#5C6063";

const cells = [
  { image: photoThree, alt: "Andrew Kltcz practicing kendo" },
  { filler: true, tone: "grey" },
  { image: photoOne, alt: "Andrew Kltcz by the water" },
  { image: photoTwo, alt: "Andrew Kltcz photography" },
  { image: photoFive, alt: "Andrew Kltcz portrait" },
  { image: photoFour, alt: "Andrew Kltcz music project" },
  { filler: true },
];

export function HexPhotoGrid() {
  return (
    <div className="hex-photo-grid" aria-label="A selection of Andrew Kltcz's creative work">
      {cells.map((cell, index) => (
        <div
          key={cell.filler ? `filler-${index}` : cell.image}
          className={`hex-cell ${cell.filler ? "hex-filler" : "hex-photo"}`}
          style={{
            backgroundColor: cell.filler
              ? cell.tone === "grey"
                ? PALETTE_GREY
                : CYBER_YELLOW
              : undefined,
          }}
        >
          {cell.image && (
            <img src={cell.image} alt={cell.alt} width="180" height="180" decoding="async" className="hex-cell-image" />
          )}
        </div>
      ))}
    </div>
  );
}
