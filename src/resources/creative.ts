import Rick from "../images/creative/Rick.jpg";
import Sculpture from "../images/creative/sculpture.png";
import BoxPaint from "../images/creative/BoxPaint.png";
import YalePress from "../images/creative/YalePress.jpeg";
import Posters from "../images/creative/Posters.png";
import TNJ from "../images/creative/TNJ.png";
import Fun from "../images/creative/wink.png";
import RickImages from "./RickImages";
import SculptureImages from "./SculptureImages";
import FunImages from "./FunImages";
import YalePressImages from "./YalePressImages";
import TNJImages from "./TNJImages";
import PostersImages from "./PostersImages";
import { ResourceType } from "../types";

const creative: ResourceType[] = [
    {
        src: Rick,
        id: "Rick",
        title: "Pickup Truck Tiny House",
        description: [
            `In 2017 I bought a 1997 Ford Ranger that had 130,000 miles, with the plan to build a tiny house \
    and live in it. I named the truck Rick and he has been my travel companion since.  In 2018, I removed the truck \
    bed and began building Rick's Casita. I made the base from steel, the skeleton from pine, and the skin from cedar,\
     using fiberglass and epoxy to seal it. I designed and installed a 200W solar system that fed a fridge, dimmer, four\
      lights, and a water pump. I lived in it from June to December of 2019 in Berkeley and New Haven.`,
        ],
        images: RickImages,
        heightWidthRatio: 1,
    },
    {
        src: BoxPaint,
        id: "BoxPaint",
        title: "Box Paint",
        description: [
            `A very simple drawing app for the web, which can be accessed here. Play around to figure out which keyboard\
     keys change the color. I recommend starting out with something like 20 columns. Below is an abstract example that I drew.`,
        ],
        images: [BoxPaint],
        link: "https://chasewestover.github.io/box-paint/",
        heightWidthRatio: 1,
    },
    {
        src: YalePress,
        id: "YalePress",
        title: "Cover Designs for Yale Press ",
        description: [
            `1) This design takes the most liberties with the interpretation of the text. The centered shapes\
     abstract from the idea of teeth, talons, or claws, grinding in hopeless tension, drawing from the domestic despair\
      and neurotic spitballing present in the texts. Something beautiful emerges from the negative space and the \
      collective form of the shapes, just like with the language. The type draws on Greek influence.`,

            `2) More neutral, the idea for this design is a chaotic scaffolding around an ordered architecture of thought. The \
    scribbles relate to the handwritten text and to the personal touches of a journal.`,

            `3) This design with the staircase hints at the duality of possible reads for the disorienting text. The type \
    selection is simple, allowing the zigzagging lines of the steps to dominate the visual language. The torn paper \
    and the staples gesture at the intensely personal, autobiographical nature of the works, and also at a kind of frantic \
    necessity to get words down on paper.`,
        ],
        images: YalePressImages,
        heightWidthRatio: 1.56,
    },
    {
        src: Posters,
        id: "Posters",
        title: "Posters and Compositional Exercises",
        description: [
            `For the Mass Incarceration poster I researched Mass Incarceration in the US and wrote the poster text, \
    placing hard-hitting facts at the beginning. The horizontal stripes overwhelm and confine the background type.

    For the compositional exercises, I was tasked with using horizontal and vertical black rectangles to communicate certain \
    concepts on white poster board. From left to right: confinement, motion, imbalance, structure, chaos.`,
        ],
        images: PostersImages,
        heightWidthRatio: 1.29,
    },
    {
        src: Sculpture,
        id: "Sculpture",
        title: "Sculpture",
        description: [
            `A variety of the sculpture work I did at Yale.

    The metal pieces are from a year-long project on connection points that culminated in these free-standing pieces \
    made of playfully assembled modules. A few iterations are present here, but the modules can be put together in an \
    infinite number of ways.

    The wooden piece is an abstraction of a spinal column, made from a single straight 2x4.

    The rest of the images are experiments and sketches using various concepts.`,
        ],
        images: SculptureImages,
        heightWidthRatio: 1.48,
    },
    {
        src: TNJ,
        id: "TNJ",
        title: "The New Journal",
        description: [`A collection of cover and story designs from when I was the creative director of The New Journal at Yale. `],
        images: TNJImages,
        heightWidthRatio: 1.3,
    },
    {
        src: Fun,
        id: "Fun",
        title: "Fun Design Projects",
        description: [`A variety of fun exercises featuring hand-lettering and illustrations.`],
        images: FunImages,
        heightWidthRatio: 0.68,
    },
];

export default creative;
