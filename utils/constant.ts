import importation from "@/public/assets/img/features/importations.jpg"
import graphics from "@/public/assets/img/features/Graphic_design.jpg"
import caption from "@/public/assets/img/features/caption_writing.jpg"
import photoedit from "@/public/assets/img/features/Photo_Editing.jpg"
import powerpoint from "@/public/assets/img/features/PowerPoint.jpg"
import bookwriting from "@/public/assets/img/features/BookWriting.jpg"
import microsoft from "@/public/assets/img/features/Microsoft.jpg"
import ecommerce from "@/public/assets/img/features/Ecommerce.jpg"
import {StaticImageData} from "next/image";


interface skills_data  {
    title: string,
    img: StaticImageData
}


export const skillsData: skills_data[] = [
    {
        title: "Importation",
        img: importation
    },
    {
        title: "Graphic Design",
        img: graphics
    },
    {
        title: "Caption Writing",
        img: caption
    },
    {
        title: "PowerPoint",
        img: powerpoint
    },
    {
        title: "Microsoft Office",
        img: microsoft
    },
    {
        title: "E-commerce Website creation",
        img: ecommerce
    },
    {
        title: "Book Writing",
        img: bookwriting
    },
    {
        title: "Photo Edit",
        img: photoedit
    }
]