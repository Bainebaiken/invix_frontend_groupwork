import React from "react";
import PostCardStyleHome from "./Cards/PostCardStyleHome";

function NewsGrid({
  editorPackSectionDatas,
  dataLength = "4",
  gridClasses = "col-lg-3 col-md-6",
}) {
  return (
    <div className="row g-0">
      {editorPackSectionDatas &&
        editorPackSectionDatas.length > 0 &&
        editorPackSectionDatas
          .slice(0, dataLength)
          .map((editorItems, index) => (
            <div key={editorItems.id} className={gridClasses}>
              <PostCardStyleHome
                datas={{
                  image: editorItems.post_images.editor_pack[index],
                  category: editorItems.post_cat[0],
                  date: editorItems.post_date,
                  title: editorItems.post_title,
                }}
              />
            </div>
          ))}
    </div>
  );
}

export default NewsGrid;
