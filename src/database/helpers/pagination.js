//Calculate pagination
exports.ComputePagination = (page, count, itemsPerPage) => {
  //total pages
  let pages = Math.ceil(count / 20);

  //prev and next pages
  let prev = page > 1 ? page - 1 : null;
  let next = page < pages ? page + 1 : null;

  //page starting item
  let startIndex = page * itemsPerPage - itemsPerPage;

  return { prev, next, count, pages, startIndex };
};
