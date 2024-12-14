export interface Apart {
  apartName: string; // 아파트명
  unitPrice: number; // 1대당 가격
  tvCount: number; // 총 대수
  totalPrice: number; // 총 가격
  company: string; // 광고 업체명
  address: string; // 주소
  rating: string; // 등급
  request: number; // 견적 요청 수
}

// n 명의 사장님

export interface AdvertisingRequest {
  apart: Apart[]; // 아파트 정보 리스트
  store: string; // 업체명
  industry: string; // 업종
  business: string; // 사업 유형
  period?: string; // 광고 기간
  start?: string; // 광고 시작 시점
  description: string; // 요청 및 문의사항
  author: string; // 작성자 이름
  phone: string; // 연락처
  email: string; // 이메일
  personalAgree: boolean; // 개인정보 수집/이용 동의 여부
  marketingAgree: boolean; // 마케팅 정보 수신 동의 여부
}

export interface SearchOptions {
  city: string; // 주소 - 시
  district: string; // 주소 - 구
  area: string; // 주소 - 동
  sort?: 'low' | 'high'; // 가격 정렬 기준, "low"가 Default
  rating?: string | null; // 등급, 선택하지 않을 경우 null
  company?: string | null; // 광고 업체, 선택하지 않을 경우 null
}

export interface GPSCoordinates {
  gpsX: number; // 위도
  gpsY: number; // 경도
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface FullAdResponse {
  apartName: string[]; // 업체명 목록
  industry: string; // 업종
  business: string; // 사업 유형
  start: string; // 광고 시점
  description: string; // 요청 사항
  author: string; // 작성자
  phone: string; // 연락처
  email: string; // 이메일
}
