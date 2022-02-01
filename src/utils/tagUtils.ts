const tagsProc = nodes => {
  const allTags = {};

  nodes.forEach(node => {
    node.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] += 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });

  const tagsWithCount = Object.entries(allTags).sort((a, b): number => {
    const [tagcurr] = a,
      [tagnext] = b;

    return tagcurr.localeCompare(tagnext);
  });

  return tagsWithCount;
};

export default tagsProc;
