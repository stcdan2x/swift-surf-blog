import { Link } from "gatsby";
import React from "react";
import slugify from "slugify";
import tagsProc from "../utils/tagUtils";
import { nodeType } from "./SightsList";

const Tagslist = ({ nodes = [] }: { nodes: nodeType[] }) => {
  console.log(nodes);
  const catEnum = tagsProc(nodes);

  return (
    <aside className="tags-container">
      <h4>Categories</h4>
      <div className="list-container">
        <ul className="tags-list">
          {catEnum.map((item, idx: number) => (
            <li key={idx}>
              <Link to={`/${item[0]}`}>
                {item[0]} - ( {item[1]} )
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Tagslist;
