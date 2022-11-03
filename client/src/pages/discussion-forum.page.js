import React, { useState, useEffect } from "react";
// import { Oval } from "react-loader-spinner";
import QuestionList from "../components/question-list.component";
import SearchBar from "../components/search-bar.component";

function DiscussionForum() {
  return (
    <div className="p-5">
      <SearchBar />
      <QuestionList />
    </div>
  );
}

export default DiscussionForum;
