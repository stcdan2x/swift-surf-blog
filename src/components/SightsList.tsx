import { Link } from "gatsby";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import React from "react";
import slugify from "slugify";

type SightsListProps = {
  nodes: object[];
};

export interface nodeType {
  content: { tags: string[]; attractions: string[] };
  featured: boolean;
  id: string;
  title: string;
  image: any;
}

const SightsList = ({ nodes = [] }: { nodes: nodeType[] }) => {
  return (
    <div className="sights-list">
      {nodes.map((node: nodeType, i: number) => {
        const { id, title, image, content } = node;
        const imagePath = getImage(image);
        const slug = slugify(title, { lower: true });
        return (
          <Link className="sight" key={id} to={`/${slug}`}>
            <GatsbyImage
              className="sight-img"
              image={imagePath}
              alt={`${title}`}
            />
            <div>
              <h5>{title}</h5>
              <p>{content.attractions[0]}</p>
              <p>{content.attractions[1]}</p>
              <p>{content.attractions[2]}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SightsList;
