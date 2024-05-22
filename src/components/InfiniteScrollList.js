import React from 'react';
import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import InfinteCard from './InfiniteCard';
import { Typography } from '@mui/material';

const fetchItems = async ({ pageParam = 1 }) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}limit=5&page=${pageParam}`);
  return response.data.data;
};

const InfiniteScrollList = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage && lastPage.length === 5) {
        return pages.length * 5;
      }
      return undefined;
    },
  });

  return (
    <div>
      <InfiniteScroll
        dataLength={data ? data.pages.flat().length : 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={<Typography align='center' variant='body2'>No more items </Typography>}
      >
        <ul  className='post-outer'>
          {data?.pages?.map((page, index) => (
            <React.Fragment key={index}>
              {page.map((item) => (
                <InfinteCard key={item.id} item={item}/>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollList;
