export const getAddressToGps = ({ selectedCity, selectedDistrict, selectedArea, setGps }: any) => {
  const geocoder = new kakao.maps.services.Geocoder();
  const address = `${selectedCity} ${selectedDistrict} ${selectedArea}`;

  geocoder.addressSearch(address, (result, status) => {
    if (status === kakao.maps.services.Status.OK) {
      setGps &&
        setGps({
          lat: parseFloat(result[0].y),
          lng: parseFloat(result[0].x),
        });
    } else {
      console.error(`주소(${address})에 대한 좌표 검색 실패: ${status}`);
    }
  });
};
