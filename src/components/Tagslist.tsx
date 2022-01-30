import React from "react"
import { nodeType } from "./SightsList"

const Tagslist = ({ nodes = [] }: { nodes: nodeType[] }) => {
  console.log(nodes)

  return (
    <div className="tags-container">
      <h4>Sights Categories</h4>
      <div className="tags-list">
        {nodes.map((node: nodeType, i: number) => (
          <p key={node.id}>
            {node.content.tags[0]}, {node.content.tags[1]},{" "}
            {node.content.tags[2]}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Tagslist
