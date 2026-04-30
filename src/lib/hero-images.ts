import type { HeroImage } from "@/components/page-primitives";

const commonsFile = (fileName: string, width = 1800) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${fileName}?width=${width}`;

export const heroImages = {
  about: {
    src: commonsFile("Scenes_from_The_University_of_Lagos_Campus_01.jpg"),
    alt: "University of Lagos campus road and lagoon-front area, representing Nigerian campus communities.",
    credit: "Eze the second / CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Scenes_from_The_University_of_Lagos_Campus_01.jpg"
  },
  services: {
    src: commonsFile("Department_of_Computer_engineering,_Laspotech.jpg"),
    alt: "Computer engineering department building at Lagos State Polytechnic, representing campus technology services.",
    credit: "Abiolakintrunde / CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Department_of_Computer_engineering,_Laspotech.jpg"
  },
  packages: {
    src: commonsFile("School_of_art,_design_and_printing,_Yabatech,_Lagos.jpg"),
    alt: "School of Art, Design and Printing building at Yaba College of Technology, representing printing and design packages.",
    credit: "Abiolakintrunde / CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:School_of_art,_design_and_printing,_Yabatech,_Lagos.jpg"
  },
  retainership: {
    src: commonsFile("A_lecturer_lecturing_in_a_class_at_Yaba_College_of_Technology_polytechnic,_Lagos_Nigeria.jpg", 1400),
    alt: "A lecturer teaching students at Yaba College of Technology, representing class and department support.",
    credit: "Oreoluwa Adetimehin / CC BY-SA 4.0",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:A_lecturer_lecturing_in_a_class_at_Yaba_College_of_Technology_polytechnic,_Lagos_Nigeria.jpg"
  },
  contact: {
    src: commonsFile("Lagos_State_University_of_Science_and_Technology_(Lasutech).jpg"),
    alt: "Main gate of Lagos State University of Science and Technology, representing the Samsilo Digital Hub service area.",
    credit: "Ei'eke / CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lagos_State_University_of_Science_and_Technology_(Lasutech).jpg"
  },
  blog: {
    src: commonsFile("Yabatech_Library.jpg"),
    alt: "Yaba College of Technology library building, representing student guides, research, and learning support.",
    credit: "Abiolakintrunde / CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Yabatech_Library.jpg"
  },
  article: {
    src: commonsFile("Faculty_of_Education,_Lagos_State_University_(LASU)_Ojo.jpg"),
    alt: "Faculty of Education entrance at Lagos State University, representing student learning resources and campus guidance.",
    credit: "SIMIOFAFRICA / CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Faculty_of_Education,_Lagos_State_University_(LASU)_Ojo.jpg"
  }
} satisfies Record<string, HeroImage>;
