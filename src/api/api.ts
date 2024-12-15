import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AdvertisingRequest, FullAdResponse, GPSCoordinates, SearchOptions } from './dto';

/* const useSplitAdEstimateMutation = () => {
  const fetcher = (requestBody: Omit<AdvertisingRequest, 'period' | 'start'>) =>
    axios.post<FullAdResponse>('estimate/split-ad', requestBody).then(({ data }) => data);

  return useMutation(fetcher);
}; */

export const useFullAdEstimateMutation = () => {
  const fetcher = (requestBody: AdvertisingRequest) =>
    axios.post<FullAdResponse>('api/v1/estimate/full-ad', requestBody).then(({ data }) => data);

  return useMutation({ mutationFn: fetcher });
};

export const useApartmentSearchByGpsMutation = () => {
  const fetcher = (requestBody: GPSCoordinates) =>
    axios.post('api/v1/search/gps', requestBody).then(({ data }) => {
      return data;
    });

  return useMutation({ mutationFn: fetcher });
};

export const useApartmentSearchByAddressMutation = () => {
  const fetcher = (requestBody: SearchOptions) =>
    axios.post('api/v1/search/address', requestBody).then((response) => {
      return response;
    });

  return useMutation({ mutationFn: fetcher });
};

export const useGetDataQuery = () => {
  const fetcher = () =>
    axios.get('data/info').then(({ data }) => {
      return data;
    });

  return useQuery({ queryKey: ['data'], queryFn: fetcher });
};
