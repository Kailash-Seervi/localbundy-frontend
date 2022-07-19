import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function AdvPagination({paginationOptions, getData}) {
    const {count, next, page_number, page_size, previous} = paginationOptions;
    const totalPages = Math.ceil(count/page_size);

    const pages = [];
    for(let i =0; i<totalPages;i++){
        pages.push(i);
    }

  return (
    <React.Fragment>
        {count?
        <Pagination>
            <Pagination.First disabled={page_number===1} onClick={()=>getData(1)} />
            <Pagination.Prev disabled={page_number===previous} onClick={()=>getData(previous)}/>
            {pages.map(i=>{
               return <Pagination.Item active={page_number===i+1} onClick={()=>getData(i+1)}>{i+1}</Pagination.Item>
            })}
            {/* <Pagination.Ellipsis /> */}
            <Pagination.Next disabled={page_number===next} onClick={()=>getData(next)} />
            <Pagination.Last disabled={page_number===totalPages} onClick={()=>getData(totalPages)}/>
        </Pagination>:
        false}
    </React.Fragment>
  );
}

export default AdvPagination;