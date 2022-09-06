/**
 * --------------------------------------------------------------------------
 * Container to hold comments ToolBox Section
 *
 * @version 1.0
 * --------------------------------------------------------------------------
 */

import React from "react";

import ToolsSectionTitles from "../toolsSectionTitle";
import AddCommentBtn from "./addCommentBtn";
import TextInput from "./textInput";

const CommentInputSection = () => {
  return (
    <div>
      <ToolsSectionTitles titleText="Comments" />

      <div>
        <TextInput />
        <div className="grid">
          <AddCommentBtn />
        </div>
      </div>
    </div>
  );
};

export default CommentInputSection;
