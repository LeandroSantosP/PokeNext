interface TitleCustomProps {
   text: string;
   color: string;
   fontSize: number;
}

export const TitleCustom = ({ text, color, fontSize }: TitleCustomProps) => <h1 style={{ color: `${color}`, fontSize: `${fontSize}` }} >{text}</h1>