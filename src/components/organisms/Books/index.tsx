import React from 'react';
import { useBook } from '../../../hooks/useBook';
import { useExternalSearch } from '../../../hooks/useExternalSearch';
import { Books as Presentational } from './Books';

export const Books: React.VFC = () => {
  const { handleCreate } = useBook();
  const {
    titleRef,
    inputRef,
    isLoading,
    searchResult,
    searchResults,
    pageCount,
    currentPage,
    haveRegistered,
    handleSubmit,
    handlePagenation,
    handleSelect,
  } = useExternalSearch();

  return (
    <Presentational
      inputRef={inputRef}
      titleRef={titleRef}
      isLoading={isLoading}
      searchResults={searchResults}
      pageCount={pageCount}
      currentPage={currentPage}
      searchResult={searchResult}
      haveRegistered={haveRegistered}
      handleSubmit={handleSubmit}
      handleCreate={handleCreate}
      handlePagenation={handlePagenation}
      handleSelect={handleSelect}
    />
  );
};
