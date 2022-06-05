interface Props {
   source: string;
   width?: number | string;
   height?: number | string;
}

export const SVGIcon = ({ source, width = 200, height = 200 }: Props) => {
   return <img width={width} src={source} height={height} alt="icon" />;
};
